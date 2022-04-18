import React from "react";
import Budget from "./Budget";
import SpentSoFar from "./Spent so far";
import Remaining from "./Remaining";


const BudgetSummary = () => {
    return(
        <div className="container">
            <h2>Budget Summary</h2>
            <div className="row mt-4">
                <div className="col-sm">
                    <Budget/>
                </div>
                <div className="col-sm">
                    <SpentSoFar/>
                </div>
                <div className="col-sm">
                    <Remaining/>
                </div>
            </div>
        </div>
    )

}

export default BudgetSummary;