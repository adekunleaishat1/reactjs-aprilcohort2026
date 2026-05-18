import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const OnePost = () => {
    const {id} = useParams()
    console.log(id);
    const [onepost, setonepost] = useState({})
    useEffect(() => {

    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res)=>{
        console.log(res);
        setonepost(res.data)
    }).catch((err)=>{
        console.log(err);
    })
    }, [])

  return (
    <div>
        OnePost
        <h1>{onepost.title}</h1>
        <p>{onepost.body}</p>
     </div>
  )
}

export default OnePost