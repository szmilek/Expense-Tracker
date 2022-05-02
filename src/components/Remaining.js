import React, {useContext} from "react";
import AppContext from "../context/AppContext";

const Remaining = () => {

    const {spentSoFar, budget} = useContext(AppContext);

    return (
        <div className="alert alert-secondary">
            <span>Remaining: {budget - spentSoFar}PLN</span>
        </div>
    )
}

export default Remaining;