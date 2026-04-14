import Footer from "./Footer"
import Navbar from "./Navbar"


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

  return <>
          <Navbar/>
           <h1 className="welcome">Welcome to your react class</h1>
           <p style={{fontSize:"20px",color:"black", fontStyle:"italic" }}>Inline Styling in react </p>
           <div style={mysty}>
             <h1 style={mysty.h1}>Hello</h1>
           </div>
           <button className=" btn btn-dark">Click</button>
           <Footer/>
         </>
}

 export default App