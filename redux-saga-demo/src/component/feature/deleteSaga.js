import { call, put, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects'
import axios from 'axios'
import { fetchDelete } from './userSagaSlice'

function* DeleteUser(id){
    console.log(id);
    const res = yield call(()=>{
       return axios.delete('https://65697204de53105b0dd70a35.mockapi.io/DemoApi/'+id.payload)
    })

    console.log(res);
    const data = yield res.data
    yield put(fetchDelete(data))
}


    function* deleteSaga(){
        yield takeLeading('userSagaSlice/fetchDelete',DeleteUser);
    
    }
 
    export default deleteSaga