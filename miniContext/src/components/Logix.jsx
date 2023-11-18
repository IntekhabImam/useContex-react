import React, { useContext, useState } from "react"
import UserContext from '../context/UserContext'
const Login = () => {
    const [username, SetUsername ] =useState("")
    const [password, SetPassword ] =useState("")

    const{setUser} = useContext(UserContext)

    const handleClick =(e)=>{
        e.preventDefault()
        setUser({username, password})

    }

  return (
    <div>
      <h2>Login</h2>
      <input type="text"  placeholder="Enter username" value={username} onChange={(e)=> SetUsername(e.target.value)}/>
      {" "}
      <input type="text"  placeholder="Enter password" value={password} onChange={(e)=>SetPassword(e.target.value)}/>

      <button onClick={handleClick}>Submit</button>
    </div>
  )
};

export default Login;
