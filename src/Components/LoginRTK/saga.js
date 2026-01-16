import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchLoginFailure, fetchLoginRequest, fetchLoginSuccess } from "./slice";

async function fetchLoginApi() {
  const res = await axios.get("http://localhost:4000/users");
  return res.data; 
}

function* loginSaga(action){
    try{
        const {username,password}= action.payload
    const response = yield call(fetchLoginApi)
    const user = response.find((u)=>u.username=== username && u.password=== password)
    if(user){
        localStorage.setItem("user",user.username)
    yield put(fetchLoginSuccess(user))
    }
    else{
        yield put(fetchLoginFailure("Wrong credentials"))
    }
    }catch(error){
        yield put(fetchLoginFailure(error.message || "API failed "))
    }
}

function* rootLoginSaga(){
    yield takeLatest(fetchLoginRequest.type,loginSaga)
}
export default rootLoginSaga;
