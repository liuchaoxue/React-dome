import {takeEvery, put} from 'redux-saga/effects'
import {CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST , GET__MY_LIST} from './actionTypes'
import axios from 'axios'
import  {getListAction} from './actionCreators'

function* mySaga(){
    yield takeEvery(GET__MY_LIST,getList)
}

function* getList(){
    // axios.get('https://www.easy-mock.com/mock/5d6d169723f431172b9625ee/ReactDome01/getReduxList')
    //     .then((res)=>{
    //         const data = res.data
    //         const action =  getListAction(data)
    //         put(action)
    //     })
    const res =yield  axios.get('https://www.easy-mock.com/mock/5d6d169723f431172b9625ee/ReactDome01/getReduxList')
    const action =  getListAction(res.data)
    yield put(action)
}

export default mySaga