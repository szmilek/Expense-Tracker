import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BudgetSummary from "./components/BudgetSummary";
import AddExpense from "./components/AddExpense";
import ExpensesList from "./components/ExpensesList";
import SearchBar from "./components/SearchBar";
import {AppProvider} from "./context/AppContext";

const App = () => {

  const headingStyle = {
        backgroundColor: "lightGray"
    }

  return (
      <AppProvider>
          <div className="container">
              <h1 className="mt-4 alert" style={headingStyle}>Expense Tracker</h1>
              <h2 className="mt-4 alert">Budget Summary</h2>
              <BudgetSummary/>
              <h2 className="mt-4 alert">Add Expense</h2>
              <AddExpense/>

              <h2 className="mt-4 alert">Expenses</h2>
              <SearchBar/>
              <ExpensesList/>
          </div>
      </AppProvider>
  )
};

export default App;
