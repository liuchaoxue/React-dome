import {CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST , GET__MY_LIST} from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value) =>({
    type:CHANGE_INPUT,
    value
})

export const addInputAction = () =>({
    type:ADD_ITEM
})

export const delInputAction = (index) =>({
    type:DEL_ITEM,
    index
})

export const getListAction = (data) =>({
    type:GET_LIST,
    data
})

export const getTodoList = () =>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5d6d169723f431172b9625ee/ReactDome01/getReduxList')
        .then((res)=>{
            const data = res.data
            const action =  getListAction(data)
            dispatch(action)
        })
    }
}

export const getMyListAction = ()=>({
    type:GET__MY_LIST,
    
})