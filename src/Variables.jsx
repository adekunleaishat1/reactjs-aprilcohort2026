
import { useState } from 'react'

const Variables = () => {
    const [username, setuseranme] = useState("students")
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
//    {condinal statement ? "true value" : "false value"}  TERNARY OPERATOR
  return (
    <div>
      <input type="text" />
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