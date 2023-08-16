import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const Result = () => {
    const {total} = useSelector((counterStore) => counterStore);
    console.log(total, 'this is result page');
   

    return(
        <div>
            <h1>Ini Result Page</h1>
            <p>{total}</p>
        </div>
    );
};

export default Result;