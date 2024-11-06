import React, { useState, useEffect } from 'react';
import Expenses from "./components/Expenses";
import ButtonNewExpense from "./components/ButtonNewExpense";
import Filter from "./components/Filter";
import Chart from "./components/Chart";
import './App.css';
import ExpensesService from './services/ExpensesService';
import Loader from './components/Loader';

const App = () => {
    const [expenses, setExpenses] = useState([]);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date());
    const [isEditing, setIsEditing] = useState(false);
    const [currentExpenseId, setCurrentExpenseId] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
        setIsLoading(true);
        const data = await ExpensesService.getAllExpenses();
        data.forEach(element => {
            element.date = new Date(parseInt(element.date.seconds) * 1000);
        });
        setExpenses(data);
        setIsLoading(false);
    };

    const createExpense = async (expenseJSON) => {
        const newExpense = { title: expenseJSON.title, amount: expenseJSON.amount, date: expenseJSON.date };
        await ExpensesService.addExpense(newExpense);
        fetchExpenses();
    };

    const startEditingHandler = (expense) => {
        console.log("startEditingHandler");
        setIsEditing(true);
        setCurrentExpenseId(expense.id);
        setTitle(expense.title);
        setAmount(expense.amount);
        setDate(expense.date);
    };

    const updateExpense = async () => {
        const updatedExpense = { title, amount, date };
        await ExpensesService.updateExpense(currentExpenseId, updatedExpense);
        fetchExpenses();
        resetEditing();
    };

    const resetEditing = () => {
        setIsEditing(false);
        setCurrentExpenseId(null);
        setTitle("");
        setAmount(0);
        setDate(new Date());
    };

    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChange = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div className="container">
            <ButtonNewExpense onAddExpense={createExpense} />
            <div className="container_expense">
                <Filter selectedYear={filteredYear} onYearChange={filterChange} />
                <Chart expenses={filteredExpenses} />
                {isLoading ? (
                    <Loader />
                ) : expenses.length > 0 ? (
                    <Expenses
                        items={filteredExpenses}
                        fetchExpenses={fetchExpenses}
                        onEditExpense={startEditingHandler}
                    />
                ) : (
                    <h1>No data available</h1>
                )}
            </div>

            {isEditing && (
                <div>
                    <h2>Edit Expense</h2>
                    <input className="editing-form"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                    />
                    <input className="editing-form"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        placeholder="Amount"
                    />
                    <input className="editing-form"
                        type="date"
                        value={date.toISOString().split('T')[0]}
                        onChange={(e) => setDate(new Date(e.target.value))}
                    />
                    <button className="button btn" onClick={updateExpense}>Update</button>
                    <button className="button btn" onClick={resetEditing}>Cancel</button>
                </div>
            )}
        </div>
    );
}

export default App;
