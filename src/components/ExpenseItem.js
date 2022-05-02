import React, {useContext} from "react";
import {TiDelete} from "react-icons/ti"
import AppContext from "../context/AppContext";


const ExpenseItem = ({id, name, cost, category, date}) => {
    const { handleDelete } = useContext(AppContext);
    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {name}
            <div>
                <div>
                    <span className="alert alert-primary">{cost}PLN</span>
                    <span className="alert alert-info">{category}</span>
                    <span className="alert alert-secondary">{date}</span>
                    <TiDelete onClick={() => handleDelete(id)} size="1.8em"/>
                </div>
            </div>
        </li>
    )
}

export default ExpenseItem;