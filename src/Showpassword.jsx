import React,{useState} from 'react'

const Showpassword = () => {
    const [showing, setshowing] = useState(false)
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const [alluser, setAlluser] = useState([])

    const Hidepassword = () =>{
    //   if (showing == false) {
    //     setshowing(true)
    //   }else{
    //     setshowing(false)
    //   }
     setshowing(!showing)
    }
    console.log(showing);

    const Handleinputchange = (e) =>{
      console.log(e.target.value);
       setinput1(e.target.value)
    }
    const Signupuser = () =>{
        console.log(input1, input2);
        let userobj = {
            usernme:input1,
            email:input2
        }
        setAlluser([...alluser,userobj])
         console.log(alluser);
    }
    
  return (
    <div>
        <h1>{input1}</h1>
        <p>{input2}</p>
        <input onChange={Handleinputchange} type={showing ? "text" : "password"} />
        <button onClick={Hidepassword}>toggle</button>
        <input onChange={(e)=> setinput2(e.target.value) } type="text" />
        <button onClick={Signupuser}>signup</button>
        {alluser.length == 0 ? <h1>No user available.</h1> : alluser.map((user, index)=> {
            return (
                 <>
                 <h1 key={index}>Username:{user.usernme} , Email:{user.email}</h1>
            </>
            )
        })}
    </div>
  )
}

export default Showpassword