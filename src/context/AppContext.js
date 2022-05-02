import {createContext, useEffect, useState} from "react";

const AppContext = createContext();

export function AppProvider({children}) {

    const [budget, setBudget] = useState(2000)
    const [spentSoFar, setSpentSoFar] = useState(0);
    const [expenses, setExpenses] = useState([]);
    const [query, setQuery] = useState("");

    const handleDelete = id => {
        fetch(`http://localhost:3005/expenses/${id}`, {
            method: "DELETE"
        })
            .then(() => setExpenses(prev => prev.filter(el => el.id !== id)))
    }

    const handleSearch = (e) => {
        setQuery(e.target.value);
        console.log(e.target.value);
    }

    useEffect(() => {
        setSpentSoFar(expenses.reduce((prev, curr) => prev + +curr.cost, 0))
    }, [expenses])

    return(
        <AppContext.Provider value={{budget, spentSoFar, setBudget, expenses, handleDelete, setSpentSoFar, setExpenses, query, setQuery, handleSearch}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;