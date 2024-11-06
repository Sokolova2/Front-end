import React, { useState } from 'react';
import AddNewExpense from './AddNewExpense';
import './NewExpense.css';

const ButtonNewExpense = (props) => {
    const [isEditing, setEditing] = useState(false);

    const startEditing = () => setEditing(true);
    const stopEditing = () => setEditing(false);

    const saveExpense = (addNewExpense) => {
        const expenseData = {
            ...addNewExpense,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setEditing(false);
    };

    return (
        <div className="newExpenseButton">
            {!isEditing && <button className="buttonAddExpense" onClick={startEditing}>Add New Expense</button>}
            {isEditing && (
                <AddNewExpense
                    onSaveExpenseData={saveExpense}
                    onCancel={stopEditing}
                />
            )}
        </div>
    );
};

export default ButtonNewExpense;
