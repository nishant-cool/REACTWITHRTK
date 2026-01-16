import { all, fork } from "redux-saga/effects";
import rootPostSaga from "../BASCAPIRTK/saga";

function* rootSaga(){
    yield all([fork(rootPostSaga)])
}
export default rootSaga