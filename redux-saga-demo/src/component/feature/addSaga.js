import { call, put, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects'
import axios from 'axios'
import { fetchDelete, postUser } from './userSagaSlice'

function* AddUser(data){
    console.log(data);
    yield call(()=>{
        return axios.post('https://65697204de53105b0dd70a35.mockapi.io/DemoApi/',data.payload)
     })
     const res = yield call(()=>{
        return axios('https://65697204de53105b0dd70a35.mockapi.io/DemoApi')
     })
 
     console.log(res);
     const users = yield res.data
     yield put(postUser(users))
     
}

export default function* addSaga(){
    yield takeLeading('userSagaSlice/postUser',AddUser);
}