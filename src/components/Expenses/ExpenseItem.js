import React, { useState } from 'react'
import ExpenseDate from '../Expenses/ExpenseDate';
import '../Expenses/ExpenseItem.css';
import Card from '../UI/Card';
function ExpenseItem(props) {
    const [title, setTitle ] = useState(props.title)
    const clickHandler = () => {
        setTitle("Updated Title")
        

        
      
    }
    
    return (
        <Card className="expense-item">
           <ExpenseDate date={ props.date }/>
            <div className="expense-item__descrption">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>


    );
}

export default ExpenseItem;