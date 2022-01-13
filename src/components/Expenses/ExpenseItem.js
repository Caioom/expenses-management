import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)
  
    const clickHandler = () => {
        setTitle('Updated!')
        console.log(title)
    }

    return (
        <Card className="expense-item"> 
            <div className="expense-item__description">
                <ExpenseDate date={props.date}></ExpenseDate>
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={clickHandler}>Click</button>
            </div>
        </Card>
    )
}

export default ExpenseItem