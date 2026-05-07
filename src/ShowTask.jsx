import React, {useState} from 'react'
import Input from './props/Input'
import Button from './props/Button'
import Newdata from './Newdata'
const ShowTask = () => {
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const [alltask, setAlltask] = useState([])

    const HandleTask = () => {
        console.log("button clicked");
        const taskobj = {
            Title: input1,
            Description: input2
        }
        setAlltask([...alltask, taskobj])
        console.log(taskobj);
        
    }
    

return(
    <div>  
    <Input type="text" onchange={(e) => setinput1(e.target.value)} value=""/>
    <Input type="text" onchange={(e) => setinput2(e.target.value)} value=""/>
    <Button classname="btn btn-dark" onclick={HandleTask} text="Add Task"/>
    <Newdata task={alltask}/>
    
     
    </div>
)

}










export default ShowTask