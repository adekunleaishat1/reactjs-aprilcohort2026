import React , {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Http = () => {
    const [isworking, setisworking] = useState(false)
    const [allpost , setAllpost] = useState([])

    useEffect(() => {
    //  fetch('https://jsonplaceholder.typicode.com/posts')
    // .then((res)=> res.json())
    // .then((data)=> console.log(data))
    // .catch((err)=> console.log(err))

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
        console.log(res);
        setAllpost(res.data)
    }).catch((err)=>{
        console.log(err);
    })
    // alert("working")
      
    }, [])

  return (
    <div>Http
        <Link>show</Link>
        <button onClick={()=> setisworking(!isworking)}>change</button>

        {allpost.map((post)=>(
          <div key={post.id}>
           <Link to={`/one/${post.id}`}>
           <p>{post.title}</p>
            <p>{post.body}</p>
           </Link>
          </div>
        ))}
    </div>
  )
}

export default Http