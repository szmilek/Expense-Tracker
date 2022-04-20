import React, {useContext} from "react";
import {AppContext} from "../context/AppContext";


const Remaining = () => {

    const {expenses, budget} = useContext(AppContext);

    const totalExpences = expenses.reduce((total, item)=>{
        return total = total + item.cost
    }, 0)

    // 0 is a starting value

    const alertType = totalExpences > budget? "alert-danger" : "alert-success"
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {budget - totalExpences} PLN</span>
        </div>
    )
}

export default Remaining;