import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BudgetSummary from "./Components/BudgetSummary";
import AddExpense from "./Components/AddExpense";
import ExpensesList from "./Components/ExpensesList";

const App = () => {
  return (
    <div className="container">
      <h1 className="mt-4 alert alert-secondary">Expense Tracker</h1>
      <BudgetSummary/>
      <AddExpense/>
      <ExpensesList/>
    </div>
  )
};

export default App;
