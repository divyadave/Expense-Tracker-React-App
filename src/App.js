import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import { useState } from 'react';

function App() {
  const DUMMY_DATA = [{
    id: 'e1',
    title: 'Car Insurance',
    amount: 340,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e2',
    title: 'Toilet Paper',
    amount: 400,
    date: new Date(2021, 3, 28)

  },
  {
  id: 'e3',
  title: 'TV',
  amount: 200,
  date: new Date(2021, 4, 22)
  },
  {
    id: 'e4',
    title: 'Grocery',
    amount: 200,
    date: new Date(2021, 5, 24)

  }

  ]
  const [expenses, setExpenses] = useState(DUMMY_DATA)
  const addExpenseHandler = (addData) => {
    setExpenses((previousExpense) => {
      return [addData, ...previousExpense]
    })

  }
  return (
    <div>
      <h2 className="App">Expense Tracker App</h2> 
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
