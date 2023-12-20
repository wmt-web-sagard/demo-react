import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { fetchDelete, fetchUsersSuccess } from './userSagaSlice'

function* getFetchUser(){
    const res = yield call(()=>{
       return axios('https://65697204de53105b0dd70a35.mockapi.io/DemoApi')
    })

    console.log(res);
    const data = yield res.data
    yield put(fetchUsersSuccess(data))
}


  function* userSaga(){
    yield takeEvery('userSagaSlice/fetchLoading',getFetchUser);
}


export default userSaga

