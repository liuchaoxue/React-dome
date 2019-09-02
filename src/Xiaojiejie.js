import React,{Component,Fragment} from 'react'
import './style.css'
import axios from 'axios'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import {CSSTransition,TransitionGroup} from 'react-transition-group'

class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.state={
            inputVal:'',
            list:[]
        }
    }

    // componentWillMount(){
    //     console.log('will -------')
    // }

    componentDidMount(){
        console.log('did -------')
        axios.get('https://www.easy-mock.com/mock/5d6d169723f431172b9625ee/ReactDome01/getList')
            .then((res)=>{
                this.setState({list:res.data.data})
            })
            .catch((error)=>{console.log(`eroos${error}`)})
        
    }

    // shouldComponentUpdate(){
    //     console.log('1 shouldComponentUpdate -------')
    //     return true
    // }

    // componentWillUpdate(){
    //     console.log('2 componentWillUpdate -------')
    // }

    // componentDidUpdate(){
    //     console.log('4 componentDidUpdate -------')
    // }

    render(){
        console.log('render --------')
        return (
            <Fragment>
                {/* 第一次写注释 */}
                <div>
                    <label htmlFor="addServer">增加服务：</label>
                    <input id="addServer" 
                        className="input" 
                        value={this.state.inputVal} 
                        onChange={this.inputChange.bind(this)} 
                        ref={(input) => {this.input=input}}
                        />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                 </div>
                <ul ref={(ul)=>{this.ul= ul}}>
                    <TransitionGroup >
                        {
                            this.state.list.map((item,index)=>{
                                return (
                                    <CSSTransition
                                        timeout={2000}
                                        classNames="boss-text"
                                        unmountOnExit
                                        appear={true}
                                        key={index+item}
                                    >
                                        <div key={index+item}>
                                        {
                                            /*   
                                            <li 
                                                key={index+item} 
                                                onClick={this.deleteItem.bind(this,index)}
                                                dangerouslySetInnerHTML={{__html:item}}
                                                    >
                                            </li>
                                            */
                                        }
                                            <XiaojiejieItem 
                                                index={index}
                                                deleteItem={this.deleteItem.bind(this)}
                                                content={item} />
                                            
                                        </div>
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>

                <Boss />
            </Fragment>
        )
    }

    inputChange(e){
        this.setState({
            inputVal:e.target.value,
        },()=>{
            console.log('setState 异步')
        })
    }

    addList(){
        this.setState({
          list:[...this.state.list,this.state.inputVal],
          inputVal:''
        })
    }

    deleteItem(index){
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}

export default Xiaojiejie;