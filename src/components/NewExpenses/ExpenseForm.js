import  { useState } from 'react'
import '../NewExpenses/ExpenseForm.css'
function ExpenseForm(props) {
    const [enteredTitle, setTitle] = useState('')
    const [enteredAmount, setAmount] = useState('')
    const [enteredDate, setDate] = useState('') 

    const titleHandler = (event) => {
       
        setTitle(event.target.value)

       
    }
    
    const amountHandler = (event) => {
     
        setAmount(event.target.value)

    }

    
    const dateHandler = (event) => {
         setDate(event.target.value)
    }
  
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        
        props.onSaveExpenseData(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
   }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                   <label>Title</label>
                   <input type="text" value={enteredTitle} onChange={titleHandler}></input>
                    </div>
                    <div className="new-expense__control">
                   <label>Amount</label>
                   <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountHandler}></input>
                    </div>
                    <div className="new-expense__control">
                   <label>Date</label>
                   <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateHandler}></input>
                    </div>

            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick={submitHandler}>Add Expense</button>
                <button  onClick={props.onCancel}>Cancel</button>

            </div>

        </form>

    )
}
export default ExpenseForm;