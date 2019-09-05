import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List} from 'antd'

const TodoListUI= (props)=>{
    return ( 
        <div style={{margin:'10px'}}>
            <div>
                <Input 
                    placeholder={props.placeholder}
                    style={{width: '250px',marginRight:'10px'}}
                    onChange={props.changeInputVal}
                    value={props.inputVal}
                />
                <Button type="primary" onClick={props.clickBtn}>增加</Button>
            </div>

            <div style={{margin:'10px',width:'300px'}}>
                <List 
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index)=>(
                        <List.Item 
                            onClick={()=>{props.delItem(index)}}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        </div>
     );
}

// class TodoListUI extends Component {
  
//     render() { 
//         return ( 
//             <div style={{margin:'10px'}}>
//                 <div>
//                     <Input 
//                         placeholder={this.props.placeholder}
//                         style={{width: '250px',marginRight:'10px'}}
//                         onChange={this.props.changeInputVal}
//                         value={this.props.inputVal}
//                     />
//                     <Button type="primary" onClick={this.props.clickBtn}>增加</Button>
//                 </div>

//                 <div style={{margin:'10px',width:'300px'}}>
//                     <List 
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item,index)=>(<List.Item onClick={()=>{this.props.delItem(index)}}>{item}</List.Item>)}
//                     />
//                 </div>
//             </div>
//          );
//     }
// }
 
export default TodoListUI;