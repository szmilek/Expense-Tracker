import React from "react";
import AddExpenseForm from "./AddExpenseForm";

const AddExpense = () => {
    return (
        <div className="container">
            <div className="row mt-4">
                <h2>Add Expense</h2>
                <AddExpenseForm/>
            </div>
        </div>
    )
}

export default AddExpense;