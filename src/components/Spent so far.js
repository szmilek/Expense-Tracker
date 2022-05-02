import React, {useContext} from "react";
import AppContext from "../context/AppContext";

const SpentSoFar = () => {

    const {spentSoFar} = useContext(AppContext);

    return (
        <div className="alert alert-secondary">
            <span>Spent So Far: {spentSoFar}PLN</span>
        </div>
    )
}

export default SpentSoFar;