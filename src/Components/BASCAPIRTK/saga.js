import { call, put, takeLatest } from "redux-saga/effects"
import { fetchPostError, fetchPostRequest, fetchPostSuccess } from "./slice"

 async function fetchPostApi(){
    const res= await  fetch("https://jsonplaceholder.typicode.com/posts")
    if(!res.ok){
        throw new Error("Api Failes")
    }
    return await res.json()
}

function* postSaga(){
    try{
        const response = yield call(fetchPostApi)
        yield put(fetchPostSuccess(response))
    }
    catch(error){
        yield put(fetchPostError(error.message))
    }
}
function* rootPostSaga(){
    yield takeLatest(fetchPostRequest.type,postSaga)
}
export default rootPostSaga
