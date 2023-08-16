import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const Result = () => {

    const { total } = useSelector((counterState)=> counterState)
    console.log(total);

    return(
        <div>
            <h1>Ini Result Page</h1>
            <p>{total}</p>
        </div>
    );
};

export default Result;