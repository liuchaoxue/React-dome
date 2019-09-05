import React from 'react';
import {connect } from 'react-redux'


const TodoList = (props)=>{
    let {inputVal,inputChange,clickBut,list} = props

    return (
         
        <div>
            <div>
                <input value={inputVal} onChange={inputChange} />
                <button onClick={clickBut}>提交</button>
            </div>
            
            <ul>
                {
                    list.map((item)=>{
                        return (
                            <li key={item}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
     );
}



const stateProps =(state)=>{
    return {
        inputVal:state.inputVal,
        list:state.list
    }
}

const dispatchProps = (dispatch)=>{
    return {
        inputChange(e){
            let action ={
                type:'changeInput',
                value: e.target.value
            }
            dispatch(action)
        },
        clickBut(e){
            let action ={type:'addList'}
            dispatch(action)
        }
    }
}
 
export default connect(stateProps,dispatchProps)(TodoList);