import "./App.css"
import Navbar from "./Navbar"
import hero from "./assets/hero.png"

function App2(){
    const username = "devyeesha"
    const userobj = {
        name:"lola", class:"Reactjs", age:20
    }
   const userarray = [
     { name:"lola", class:"Reactjs", age:20},
     { name:"shola", class:"Nodejs", age:20},
     { name:"bolu", class:"Angukar", age:20}
   ]
    return <>
    <Navbar/>
    <h1 className="ib">Welcome Ibrahim</h1>
    <h1>{username}</h1>
    <p>Name:{userobj.name}</p>
    <p>Class:{userobj.class}</p>
    <p>Age:{userobj.age}</p>
    <img src={hero} alt="" />
    {userarray.map((user,index)=>{
        return <>
        <div key={index}>
            <h1>{user.name}</h1>
            <h1>{user.class}</h1>
        </div>
        </>
    })}
    <table>
        <thead>
            <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Class</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {userarray.map((user, index)=>{
                return (
                    <>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.class}</td>
                        <td>{user.age}</td>
                    </tr>
                    </>
                )
            })}
        </tbody>
    </table>
    </>
}

export default App2