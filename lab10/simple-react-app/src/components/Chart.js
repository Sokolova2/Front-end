import React from "react";
import ChartBar from './ChartBar';
import "./Chart.css";

const Chart = ({ expenses }) => {
    const monthlyExpenses = Array(12).fill(0);
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    expenses.forEach((expense) => {
        const expenseMonth = expense.date.getMonth();
        monthlyExpenses[expenseMonth] += expense.amount;
    });

    return (
        <div className="chart-container">
            <div className="chart-inner">
                {monthlyExpenses.map((value, index) => (
                    <ChartBar 
                        key={index} 
                        value={value} 
                        maxValue={Math.max(...monthlyExpenses)} 
                        month={months[index]} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Chart;
