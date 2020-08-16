import React from 'react';
import ReactDOM from 'react-dom';

class ParentCom extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        
        return (
            <div >
                <form action="http://www.baidu.com">
                    <div className="child" >
                        <h1>helloworld</h1>
                        <button onClick={this.parentEvent}>提交</button>
                    </div>

                </form>
                
                {/* 使用ES6箭头函数传递多个参数 */}
                <button  onClick={(e)=>{this.parentEvent('msg:helloworld',e)}}>提交</button>

            
            </div>
        )
    }

    parentEvent = (msg,e)=>{
        console.log(msg)
        console.log(e)  
    }
}


ReactDOM.render(
    <ParentCom></ParentCom>,
    document.querySelector("#root")
)