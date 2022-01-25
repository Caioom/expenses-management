import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpenses/NewExpenses'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 298.78,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'er2',
    title: 'Car Fix',
    amount: 88.78,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e2',
    title: 'Car Wheels',
    amount: 328.78,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'er',
    title: 'Coffee',
    amount: 38.78,
    date: new Date(2021, 2, 20)
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const [filteredExpenses, setFilteredExpenses] = useState(DUMMY_EXPENSES)

  const newExpenseAddedHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddNewExpense={newExpenseAddedHandler} />
      <Expenses items={expenses}/>
    </div>
  )
}

export default App;
