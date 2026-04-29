
import { useState } from 'react'
import Button from './props/Button'
import Input from './props/Input'

const Variables = () => {
    const [username, setuseranme] = useState("students")
    const [isshowing, setisshowing] = useState(false)
    // console.log(username);
    // console.log(isshowing);

    const [userdetail, setuserdetail] = useState([
        "go", "come", "sleep", "walk"
    ])

    let user = "lola"
    const updatestate = () =>{
        
        user = "shola"
        console.log(user);
        setuseranme("teachers")
    }
    const Signupuser =() =>{
      alert("user signup successful")
    }
//    {condinal statement ? "true value" : "false value"}  TERNARY OPERATOR
  return (
    <div>
      <Input  onchange={(e)=> console.log(e.target.value) }  type="password"/>
      <Input onchange={(e)=> console.log(e.target.value) } value="3000" type="number"/>
      <Button  classname="btn btn-danger" onclick={Signupuser} text="signup"/>
      <Button classname="btn btn-dark" text="Login"/>
      <Button  classname="btn btn-success" text="Click"/>
       <h1>{user}</h1>
       <h1 className={isshowing ? "text-danger" : "text-success"} >{username}</h1>
       <button onClick={updatestate}>update</button>
       {isshowing ?  userdetail.map((el,index)=>{
        return (
            <>
              <p>{el}</p>
            </>
        )
       })  : "No User available." }
    </div>
  )
}

export default Variables