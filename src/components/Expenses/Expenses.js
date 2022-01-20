import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css'

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState("2022")

    const yearSelectedHandler = (yearSelected) => {
        setSelectedYear(yearSelected)
        console.log(yearSelected)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={selectedYear} onSelectedYear={yearSelectedHandler} />
                {props.items.map((expense) =>(
                    <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
                ))}
            </Card>
        </div>
    )
}

export default Expenses