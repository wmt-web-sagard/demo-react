import axios from "axios";
import { call, put, takeLeading } from "redux-saga/effects";
import { updateUser } from "./userSagaSlice";

function* UpdateUser(data){
    console.log(data);
    yield call(()=>{
        return axios.put('https://65697204de53105b0dd70a35.mockapi.io/DemoApi/'+data.payload.id,data.payload)
     })
     const res = yield call(()=>{
        return axios('https://65697204de53105b0dd70a35.mockapi.io/DemoApi')
     })
 
     console.log(res);
     const users = yield res.data
     yield put(updateUser(users))
}

export function* updateSaga(){
    yield takeLeading('userSagaSlice/updateUser',UpdateUser)
}