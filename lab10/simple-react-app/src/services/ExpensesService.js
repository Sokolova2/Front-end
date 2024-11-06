import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase"; 

class ExpensesService {
    expensesCollectionRef = collection(db, "expenses");

    async getAllExpenses() {
        const data = await getDocs(this.expensesCollectionRef);
        return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    }

    async addExpense(expense) {
        return await addDoc(this.expensesCollectionRef, expense);
    }

    async updateExpense(id, updatedExpense) {
        const expenseDoc = doc(db, "expenses", id);
        const updatedData = {
            ...updatedExpense,
            date: updatedExpense.date instanceof Date ? updatedExpense.date : new Date()
        };
        return await updateDoc(expenseDoc, updatedData);
    }

    async deleteExpense(id) {
        const expenseDoc = doc(db, "expenses", id);
        return await deleteDoc(expenseDoc);
    }
}

export default new ExpensesService();