import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoginRequest, logoutRequest } from "../LoginRTK/slice";
import { useNavigate } from "react-router";

function Login(){
    const dispatch = useDispatch()
    const navigate =useNavigate()
    const {loading,user,error} = useSelector((state)=> state.login)
    const [username,setUsername] = useState("")
    const [password,setPassword] =useState("")

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(fetchLoginRequest({username,password}))
    }
    const handleUsername=(e)=>{
        setUsername(e.target.value)
    }
     const handlePassword=(e)=>{
        setPassword(e.target.value)
        
    }
    useEffect(()=>{
        if(user && !error){
            localStorage.setItem("user",user.username)
            localStorage.setItem("LoggedIn", "Y")
            // console.log("LoggedIn User", user)
            // console.log("error",error)
            navigate('/counter')
            
        }
    },[user,error,navigate])




    return(
        <div>

            <div>
         <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input  type="text" placeholder="username" onChange={handleUsername} value={username}></input>
             <label>password</label>
            <input placeholder="password" type="password" onChange={handlePassword} value={password}></input>
            <button type="submit" disabled={loading}>{loading?"Logging in":"Login"}</button>

         </form>
         
         </div>
        </div>
    )
}
export default Login;