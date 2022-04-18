import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = () => {

    // const API_URL = "http://localhost:3000";
    //
    // fetch(`${API_URL}/expenses`)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });

    const expenses = [
        {
            id: 1,
            name: "Dress",
            cost: 100,
            category: "Clothes",
            date: "24.04.2022"
        },
        {
            id: 2,
            name: "Bread",
            cost: 10,
            category: "Food",
            date: "24.04.2022"
        }
    ]

    return (
        <div className="container">
            <div className="row mt-4">
                <h2>Expenses</h2>
                <ul>
                    {expenses.map(((expense)=>(
                        <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} category={expense.category} date={expense.date}/>
                    )))}
                </ul>
            </div>
        </div>
    )
}

export default ExpensesList;