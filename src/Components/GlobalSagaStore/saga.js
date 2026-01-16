import { all, fork } from "redux-saga/effects";
import rootPostSaga from "../BASCAPIRTK/saga";
import rootLoginSaga from "../LoginRTK/saga";

function* rootSaga(){
    yield all([fork(rootPostSaga),fork(rootLoginSaga)])
}
export default rootSaga