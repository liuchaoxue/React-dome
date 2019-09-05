import {CHANGE_INPUT,ADD_ITEM,DEL_ITEM,GET_LIST} from './actionTypes'

const defaultState = {
    placeholder:'write',
    inputVal:'',
    list:[]
}



export default (state = defaultState,acticon)=>{


    // Reducer 只能接受state，不能改变state 
    if(acticon.type===CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = acticon.value
        return newState
    }

    if(acticon.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputVal)
        newState.inputVal = ''
        return newState
    }

    if(acticon.type === DEL_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(acticon.index,1)
        return newState
    }

    if(acticon.type === GET_LIST){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = acticon.data.data.list
        console.log(acticon)
        return newState
    }

    return state
}