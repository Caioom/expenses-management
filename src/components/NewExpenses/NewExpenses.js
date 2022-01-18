import React from 'react'

import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpenses = (props) => {
    const saveNewExpenseHandler = (expense) => {
        console.log(expense)
        props.onAddNewExpense()
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveNewExpense={saveNewExpenseHandler}/>
        </div>
    )
}

export default NewExpenses