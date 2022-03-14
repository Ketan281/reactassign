import React from "react";


const Counter = () => {
    const [count, setCount] = React.useState(0);
    function changeCount(val){
        setCount(count +val);
    }
    function doubleVal(val){
        setCount(count *val);
    }
    return(
        <>
        <div>
            Counter:{count}
        </div>
        <button onClick={()=>changeCount(1)}> 
         ADD
        </button>
        <button onClick={()=>changeCount(-1)}> 
         Substract
        </button>
        <button onClick={()=>doubleVal(2)}> 
         Double it
        </button>

        </>
    )
}
export {Counter}