import React from 'react'

const Input = (props) => {
  return (
    <div>
        <input onChange={props.onchange} type={props.type}  defaultValue={props.value}/>
    </div>
  )
}

export default Input