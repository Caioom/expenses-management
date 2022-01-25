import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import './Expenses.css'

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState("2021")

    const yearSelectedHandler = (yearSelected) => {
        setSelectedYear(yearSelected)
    }

    const filteredExpenses = props.items.filter(expense => {
        if (expense.date.getFullYear() == selectedYear) {
            return true
        } else {
            return false
        }
    })

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={selectedYear} onSelectedYear={yearSelectedHandler} />
                <ExpenseList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses