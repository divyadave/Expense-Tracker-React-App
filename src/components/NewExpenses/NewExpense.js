import ExpenseForm from "./ExpenseForm";
import '../NewExpenses/NewExpense.css'
import { useState } from "react";


function NewExpense(props) {
    const [isEdited, setEditing] = useState(false)
    const saveExpenseDataHandler = (enteredData) => {
        const saveExpense = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.onAddExpense(saveExpense)
        setEditing(true)
        

    }
    const startEditing = () => {
        setEditing(true)
    }
    const stopEditing = () => {
        setEditing(false)

    }
    return (
        <div className="new-expense">
            {!isEdited && <button  onClick={startEditing}>Add Expense</button>}
            {isEdited && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEditing}></ExpenseForm>}
        </div>

    )
}
export default NewExpense;