import React, {useContext} from "react";
import ExpenseItem from "./ExpenseItem";
import {AppContext} from "../context/AppContext";

const ExpensesList = () => {

    // const expenses = [
    //     {
    //         id: 1,
    //         name: "Dress",
    //         cost: 100,
    //         category: "Clothes",
    //         date: "24.04.2022"
    //     },
    //     {
    //         id: 2,
    //         name: "Bread",
    //         cost: 10,
    //         category: "Food",
    //         date: "24.04.2022"
    //     }
    // ]

    const {expenses} = useContext(AppContext);


    return (
        <div className="container">
            <div className="row mt-4">
                <ul className="list-group">
                    {expenses.map(((expense)=>(
                        <ExpenseItem
                            key={expense.id}
                            id={expense.id}
                            name={expense.name}
                            cost={expense.cost}
                            category={expense.category}
                            date={expense.date}/>
                    )))}
                </ul>
            </div>
        </div>
    )
}

export default ExpensesList;