import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:''
         };
    }
    inputChange=()=>{
        let val=this.refs.username.value;

        this.setState({
            username:val
        })

    }
    getInput=()=>{

        alert(this.state.username);
    }

    //键盘事件
    inputKeyUp=(e)=>{

        console.log(e.keyCode);


        if(e.keyCode==13){

            alert(e.target.value);
        }

    }
    inputonKeyDown=(e)=>{

        console.log(e.keyCode);

        if(e.keyCode==13){

            alert(e.target.value);
        }
    }
    parentEvent = (msg,e)=>{
        console.log(msg)
        console.log(e)  
    }
    run=(event)=>{
        event.target.style.background='red';
        console.log(event.target.getAttribute('aid'))
    }
    
    inputChange1=(e)=>{
        console.log(e.target.value);
        this.setState({
            username:e.target.value
        })
    }

    getInput1=()=>{

        alert(this.state.username);
    }
    render() {
        return (
            <div>
                <input ref="username" onChange={this.inputChange}/> <button onClick={this.getInput}>获取input的值</button>
                <input onKeyUp={this.inputKeyUp}/>
                <input onKeyDown={this.inputonKeyDown}/>
                <button onClick={(e)=>{this.parentEvent('msg:helloworld',e)}}>提交</button>
                <button aid="123" onClick={this.run}>事件对象</button>
                <input onChange={this.inputChange1}/> <button onClick={this.getInput1}>获取input的值</button>
            </div>
        );
    }
}

export default List;