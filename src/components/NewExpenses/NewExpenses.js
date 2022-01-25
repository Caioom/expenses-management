import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpenses = (props) => {
    const [addNewExpenseClicked, setAddNewExpenseClicked] = useState(false)
    const saveNewExpenseHandler = (expense) => {
        props.onAddNewExpense(expense)
        setAddNewExpenseClicked(false)
    }

    const addNewExpenseHandler = () => {
        setAddNewExpenseClicked(() => !addNewExpenseClicked)
    }

    const cancelExpenseEditingHandler = () => {
        setAddNewExpenseClicked(false)
    }

    let addNewExpenseContent = <button onClick={addNewExpenseHandler}>Add new expense</button>
    if(addNewExpenseClicked) {
        addNewExpenseContent = <ExpenseForm onCancel={cancelExpenseEditingHandler} onSaveNewExpense={saveNewExpenseHandler}/>
    }

    return (
        <div className="new-expense">
            {addNewExpenseContent} 
        </div>
    )
}

export default NewExpenses