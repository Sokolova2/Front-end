import ExpenseDate from "./ExpenseDate";
import Card from './Card';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    return(
        <Card className = 'expense-item'>
            
            <div className = 'expense-item_description'>
                <ExpenseDate date = {props.date}/>
                <h2>{props.title}</h2>
                
            </div>
            <div className = 'expense-item_description'><button>${props.amount}</button></div>
        </Card>
    );
}

export default ExpenseItem;