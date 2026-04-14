import "./App.css"
import Navbar from "./Navbar"
import hero from "./assets/hero.png"

function App2(){
    return <>
    <Navbar/>
    <h1 className="ib">Welcome Ibrahim</h1>
    <img src={hero} alt="" />
    </>
}
export default App2