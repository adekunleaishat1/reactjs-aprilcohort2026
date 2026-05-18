import Footer from "./Footer"
import Navbar from "./Navbar"
import { Route, Routes, useLocation} from "react-router-dom"
import Todo from "./Todo"
import Variables from "./Variables"
import Notfound from "./Notfound"
import Dashboard from "./Dashboard"
import Showpassword from "./Showpassword"
import ShowTask from "./ShowTask"
import Http from "./Http"
import OnePost from "./OnePost"

function App() {
   const mysty = {
    width:"200px",
    height:"200px",
    backgroundColor:"yellow",
    textAlign:"center",
    h1:{
       color:"green",
       fontSize:"50px"
    }
   }
   const location = useLocation()
   console.log(location);
   const paths = ["/", "/todo"]
   
   console.log(paths.includes(location.pathname));
   
  return <>
          {/* 
           <h1 className="welcome">Welcome to your react class</h1>
           <p style={{fontSize:"20px",color:"black", fontStyle:"italic" }}>Inline Styling in react </p>
           <div style={mysty}>
             <h1 style={mysty.h1}>Hello</h1>
           </div>
           <button className=" btn btn-dark">Click</button>
           <Footer/> */}
         
          {paths.includes(location.pathname) && <Navbar/> }
         <Routes>
          <Route path="/" element={<Variables/>} />
          <Route path="/todo" element={<Todo/>} />
          <Route path="/http" element={<Http/>} />
          <Route path="/one/:id" element={<OnePost/>} />
          <Route path="*" element={<Notfound/>}/>
          <Route path="/home" element={<Dashboard/>} >
           <Route path="/home/password" element={<Showpassword/>} />
           <Route path="/home/task" element={<ShowTask/>} />
          </Route>
         </Routes>

         </>
}

 export default App