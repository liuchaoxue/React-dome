import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {

    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
//组件第一次存在于dom中，函数不会被执行。 如果已经存在Dom中，函数才会被执行
    // componentWillReceiveProps(){
    //     console.log('child componentWillReceiveProps -------')
    // }

    // componentWillUnmount(){
    //     console.log('end componentWillUnmount -------')
    // }

    shouldComponentUpdate(nextProps,nextStatr){
        if(nextProps.content !== this.props.content){
            return true
        }
        return false
    }

    render() { 
        return ( 
            <li onClick={this.handleClick}>{this.props.name}-{this.props.content}</li>
         );
    }

    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}

XiaojiejieItem.prototypes={
    name:PropTypes.string.isRequire,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}

XiaojiejieItem.defaultProps={
    name:'松岛枫'
}

export default XiaojiejieItem;