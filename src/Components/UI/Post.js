import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPostRequest } from "../BASCAPIRTK/slice"

function Post(){
    const dispatch =useDispatch()
    const {loading,data,error} =useSelector((state)=> state.posts)
    useEffect(()=>{
        console.log("api fetched")
        dispatch(fetchPostRequest())
        
    },[dispatch])

    return (
        <div>
            <ul>
                {data.slice(0,5).map((u)=>(
                    <li key={u.id}>{u.title}</li>
                ))}
            </ul>

            
        </div>
    )
}
export default Post