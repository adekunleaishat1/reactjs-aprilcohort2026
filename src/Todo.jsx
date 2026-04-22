import React ,{useState} from 'react'

const Todo = () => {
    const [task, setTask] = useState([])
    const [input1, setInput1] = useState ('')
    const [input2, setInput2] = useState('')

  const addTask = ()=>{
    if (!input1.trim() || !input2.trim()) {
        return
        
    }
    const taskArr = {
        title: input1,
        description:  input2
    }
    console.log(taskArr);
    setTask([...task, taskArr])
        setInput1('')
        setInput2('')
  }

  const deleteTodo = (i) =>{
    // alert(i)
    task.splice(i,1)
    setTask(task)
  }

  return (
    <div>
        <input value={input1} type="text" onChange={(e) => setInput1(e.target.value)} />
        <input value={input2} type="text" onChange={(e) => setInput2(e.target.value)  } />
        <button onClick={addTask}>Add</button>

        {task.map((todo,index)=>{
            return (
                <>
                <div key={index} className='w-50 px-2 py-2 d-flex justify-content-between align-items-center shadow-sm mx-auto'>
                    <p>{todo.title}</p>
                    <p>{todo.description}</p>
                    <button onClick={()=>deleteTodo(index)} className='btn btn-danger'>delete</button>
                </div>
                </>
            )
        })}
    </div>

  )
}

export default Todo