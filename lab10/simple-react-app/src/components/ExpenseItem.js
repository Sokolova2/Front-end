import ExpenseDate from "./ExpenseDate";
import Card from './Card';
import './ExpenseItem.css';
import ExpensesService from "../services/ExpensesService";

const ExpenseItem = (props) => {
    const deleteExpense = async () => {
        await ExpensesService.deleteExpense(props.id);
        props.fetchExpenses();
    };
    console.log(props);
    return (
        <Card className='expense-item'>
            <div className='expense-item_description'>
                <ExpenseDate date={props.date} />
                <h2>{props.title}</h2>
            </div>
            <div className="button-functional">
                <button className="button">${props.amount}</button>
                <div className="button-options">
                    <button className="button btn" onClick={deleteExpense}>Delete</button>
                    <button className="button btn" onClick={() => props.onEditExpense({ id: props.id, title: props.title, amount: props.amount, date: props.date })}>
                        Edit
                    </button>
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
