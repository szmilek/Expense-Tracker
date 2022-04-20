import React, {createContext, useReducer} from "react";

const AppReducer = (state, action) => {
    switch(action.type) {
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case "DELETE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };
        default:
            return state;
    }
}

// setting the initial state
const initialState = {
    budget: 0,
    expenses: []
}


// creating the context
export const AppContext = createContext();

// creating Provider
export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return(
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

// Reducer is in charge of creating a new state object based on the actions it receives

