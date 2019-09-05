import React, { Component } from 'react';
import store from './store'
import {changeInputAction,addInputAction,delInputAction,getMyListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
    constructor(props){
        super(props)

        this.state = store.getState()
        this.changeInputVal = this.changeInputVal.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.delItem = this.delItem.bind(this)

        store.subscribe(this.storeChange)
    }
    
    componentDidMount() {
        const action = getMyListAction()
        store.dispatch(action)
    }

    render() { 
        return ( 
            <TodoListUI
                placeholder={this.state.placeholder} 
                inputVal={this.state.inputVal}
                changeInputVal={this.changeInputVal}
                clickBtn={this.clickBtn}
                list={this.state.list}
                delItem={this.delItem}
             />
         );
    }

    changeInputVal(e){
        const action = changeInputAction(e.target.value)

        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState)
    }

    clickBtn(){
        const action = addInputAction()
        store.dispatch(action)
    }

    delItem(index){
        const action = delInputAction(index)
        store.dispatch(action)
    }
}
 
export default TodoList;