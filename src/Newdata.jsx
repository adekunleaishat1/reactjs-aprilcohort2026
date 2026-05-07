import React, {useState} from "react";

const Newdata = ({task}) => {
    console.log(task);
    return(
         <div>
        {task.map((task)=>{
            return(
                <>
                <h1>{task.Title}</h1>
                <h1>{task.Description}</h1>
                </>
            )
        })}
    </div>
    )
   
}
export default Newdata