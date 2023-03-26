import React, {useState} from "react";

const Counter = () => {
    let [defaultCounter, modifiedCounter] = useState(0);

    function plusLike() {
        modifiedCounter(++defaultCounter);
    };

    function minusLike() {
        modifiedCounter(--defaultCounter);
    };

    return (
        <div>
            <h1>{defaultCounter}</h1>

            <button onClick={plusLike}>Like</button>
            <button onClick={minusLike}>Dislike</button> 
        </div>
    );
};

export default Counter;