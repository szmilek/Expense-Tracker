import React from "react";
import {TiDelete} from "react-icons/ti"

const ExpenseItem = ({id, name, cost, category, date}) => {

    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {name}
            <div>
                <div>
                    <span className="alert alert-primary">{cost}PLN</span>
                    <span className="alert alert-info">{category}</span>
                    <span className="alert alert-secondary">{date}</span>
                    <TiDelete size="1.8em"></TiDelete>
                </div>
            </div>
        </li>
    )
}

export default ExpenseItem;