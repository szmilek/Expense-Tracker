import React, {useContext} from "react";
import ExpenseItem from "./ExpenseItem";
import AppContext from "../context/AppContext";

const ExpensesList = () => {

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