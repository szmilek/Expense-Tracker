import React, {useContext} from "react";
import ExpenseItem from "./ExpenseItem";
import AppContext from "../context/AppContext";

const ExpensesList = () => {

    const {expenses, query} = useContext(AppContext);

    return (
        <div className="container">
            <div className="row mt-4">
                <ul className="list-group">

                    {expenses.filter(expense => {
                        if (query === "") {
                            return expense;
                        } else if (expense.name.toLowerCase().includes(query.toLowerCase())) {
                            return expense;
                        }
                    }).map(((expense)=>(
                        <ExpenseItem
                            key={expense.id}
                            id={expense.id}
                            name={expense.name}
                            cost={expense.cost}
                            category={expense.category}
                            date={expense.date}/>
                    )))}



                    {/*{expenses.map(((expense)=>(*/}
                    {/*    <ExpenseItem*/}
                    {/*        key={expense.id}*/}
                    {/*        id={expense.id}*/}
                    {/*        name={expense.name}*/}
                    {/*        cost={expense.cost}*/}
                    {/*        category={expense.category}*/}
                    {/*        date={expense.date}/>*/}
                    {/*)))}*/}
                </ul>
            </div>
        </div>
    )
}

export default ExpensesList;