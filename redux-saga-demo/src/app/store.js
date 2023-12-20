import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import userSaga from '../component/feature/fetchSaga'
import userSagaSliceReducer from '../component/feature/userSagaSlice'
import deleteSaga from '../component/feature/deleteSaga'
import addSaga from '../component/feature/addSaga'
import { updateSaga } from '../component/feature/updateSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer:{user:userSagaSliceReducer},
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(userSaga)
sagaMiddleware.run(deleteSaga)
sagaMiddleware.run(addSaga)
sagaMiddleware.run(updateSaga)