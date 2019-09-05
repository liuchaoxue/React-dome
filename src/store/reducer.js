const defaultState ={
    inputVal:'123',
    list:['1','2']
}

export default (state=defaultState,action)=>{

    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = action.value
        return newState
    }

    if(action.type === 'addList'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputVal)
        return newState
    }

    return state
}