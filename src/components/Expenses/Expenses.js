import { useState } from "react";
import ExpenseChart from "../Chart/ExpenseChart";
import '../Expenses/Expenses.css';
import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expenses (props) {
    const [filteredYear, setFilteredYear] = useState('2021')
    const onInputFilterHandler = (inputYear) => {
        setFilteredYear(inputYear);

    }
    const filteredExpenses = props.expenses.filter((element) => {
        return element.date.getFullYear().toString() === filteredYear
    })
    
    return (
       
        <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterChange={onInputFilterHandler}></ExpenseFilter>
        <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
        <ExpenseList items={filteredExpenses}></ExpenseList>
        
        </Card>
    )
}
export default Expenses;