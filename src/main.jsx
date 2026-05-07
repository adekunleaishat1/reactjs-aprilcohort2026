import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from "./App2.jsx"
import Variables from './Variables.jsx'
import Showpassword from './Showpassword.jsx'
import Todo from './Todo.jsx'
import ShowTask from './ShowTask.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <App /> 
    </BrowserRouter>
  </StrictMode>,
)
