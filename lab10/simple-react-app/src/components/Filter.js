import React from "react";
import "./Filter.css";

const Filter = ({ selectedYear, onYearChange }) => {    
    const yearChange = (event) => {
        onYearChange(event.target.value);
    };

    return(
        <div className="filter_year">
            <p>Filter by year</p>
            <select className="select" value={selectedYear} onChange={yearChange}>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
            </select>
        </div>
    )
}

export default Filter;
