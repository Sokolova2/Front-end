import React, { useState } from "react";
import './NewExpense.css';

const AddNewExpense = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const addTitle = (event) => setTitle(event.target.value);
    const addAmount = (event) => setAmount(event.target.value);
    const addDate = (event) => setDate(event.target.value);

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title,
            amount: +amount,
            date: new Date(date)
        };

        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="newExpense">
                <div className="newExpenseInputs">
                    <div className="newExpenseInput">
                        <p>Title</p>
                        <input type="text" value={title} onChange={addTitle} />
                    </div>
                    <div className="newExpenseInput">
                        <p>Amount</p>
                        <input type="number" value={amount} onChange={addAmount} />
                    </div>
                </div>
                <div className="newExpenseDate">
                    <p>Date</p>
                    <input type="date" value={date} onChange={addDate} />
                </div>
            </div>
            <div className="newExpenseActions">
                <button className="buttonAddExpense button" type="button" onClick={props.onCancel}>Cancel</button>
                <button className="buttonAddExpense" type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default AddNewExpense;
