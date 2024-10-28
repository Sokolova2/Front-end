import React, { useState } from 'react';
import Expenses from "./components/Expenses";
import ButtonNewExpense from "./components/ButtonNewExpense";
import Filter from "./components/Filter";
import Chart from "./components/Chart";
import './App.css';

const App = () => {
    const [expenses, setExpenses] = useState([
        {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2023, 7, 14),},
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2024, 2, 12) },
        {id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2024, 2, 28),},
        {id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2024, 5, 12),},
    ]);

    const [filteredYear, setFilteredYear] = useState('2024')

    const addExpense = (expenseData) => {
        setExpenses((prevExpenses) => {
            return [expenseData, ...prevExpenses];
        });
    };

    const filterChange = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div className="container">
            <ButtonNewExpense onAddExpense={addExpense} />
            <div className="container_expense">
                <Filter selectedYear={filteredYear} onYearChange={filterChange} />
                <Chart expenses={filteredExpenses} />
                <Expenses items={filteredExpenses} />
            </div>
        </div>
    );
}

export default App;
