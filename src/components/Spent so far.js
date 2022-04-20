import React, {useContext} from "react";
import {AppContext} from "../context/AppContext";

const SpentSoFar = () => {

    const {expenses} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className="alert alert-secondary">
            <span>Spent So Far: {totalExpenses}PLN</span>
        </div>
    )
}

export default SpentSoFar;