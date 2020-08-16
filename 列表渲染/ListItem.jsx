import React from 'react';
import ReactDOM from 'react-dom';

class ListItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <li onClick={(event)=>{this.clickEvent(
                this.props.index,
                this.props.data.title,
                event
                )}}>
                <h3>{this.props.index+1}:listItem:{this.props.data.title}</h3>
                <p>{this.props.data.content}</p>
            </li>
        )
    }
    clickEvent=(index,title,event)=>{
        alert((index+1)+"-"+title)
    }
}



class Welcome extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[
                {
                    title:"第一节 React事件",
                    content:"事件内容"
                },
                {
                    title:"第二节 React数据传递",
                    content:"数据传递内容",
                },
                {
                    title:"第三节 条件渲染",
                    content:"条件渲染内容",
                }
            ]
        }
    }

    render(){
        let listArr = this.state.list.map((item,index)=>{
            return (
                <ListItem key={index} data={item} index={index}></ListItem>
            )
        })
        
        return (
            <div>
                <ul>
                    {listArr}
                </ul>

                <ul>
                {
                    this.state.list.map((item,index)=>{
                        return (
                            <li key={index} onClick={(event)=>{this.clickFn(index,item.title,event)}}>
                                <h3>{index+1}-复杂-{item.title}</h3>
                                <p>{item.content}</p>
                            </li>
                        )
                    })
                }
                </ul>

            </div>
        )
    }

    clickFn=(index,title,event)=>{
        console.log((index+1)+"-clickFn-"+title)
    }
}


ReactDOM.render(
    <Welcome></Welcome>,
    document.querySelector('#root')
)