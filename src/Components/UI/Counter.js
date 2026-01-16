import { useDispatch, useSelector } from "react-redux"
import { decrement, increment,reset } from "../RTK/counterSlice"
import { useNavigate } from "react-router";

function Counter(){
    const dispatch =useDispatch()
    const navigate =useNavigate()
    const { count } = useSelector((state) => state.counter);
    const handleIncrement =()=>{
        dispatch(increment())
    }
    const handleDecement =()=>{
        dispatch(decrement())
    }
    const handleReset =()=>{
        dispatch(reset())
    }
    const handleNavigate =()=>{
        navigate('/post')
    }

    return(
        <div>
            <p>Count:{count}</p>
            <div>
                <button onClick={handleIncrement}>+</button>
            </div>
            <div>
                <button onClick={handleDecement}> - </button>
            </div>
            <div>
                <button onClick={handleReset}>Reset</button>
            </div>
            <button onClick={handleNavigate}>Post page</button>
        </div>

    )
}
export default Counter