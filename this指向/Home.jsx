import React from 'react';

import '../assets/css/index.css';


class Home extends React.Component{

    constructor(props){
        super(props);   //固定写法

        this.state={

            msg:'我是一个home组件',

            message:'我是一个message',

            username:'itying'
           
        }   

        //第二种改变this指向的方法

        this.getMessage= this.getMessage.bind(this);

    }

    run(){
        alert('我是一个run方法')
        
    }

    getData(){

        alert(this.state.msg);
    }


    getMessage(){

        alert(this.state.message);
    }

    getName=()=>{

        alert(this.state.username);
    }



    //第三种改变this指向的方法
    setData=()=>{

        //改变state的值

        this.setState({

            msg:"我是一个home组件 这是改变后的值"
        })

    }

    setName=(str)=>{

        //改变state的值

        this.setState({

            username:str
        })

    }

    render(){
        return(
            <div>
                <h2>{this.state.msg}</h2>    



                 <h2>{this.state.username}</h2>     


                <button onClick={this.run}>执行方法</button>

                <br />
                <br />

                <button onClick={this.getData.bind(this)}>获取数据--第一种改变this指向的方法</button>

                <br />
                <br />

                 <button onClick={this.getMessage}>获取数据--第二种改变this指向的方法</button>


                <br />
                <br />

                 <button onClick={this.getName}>获取数据--第三种改变this指向的方法</button>


                 <br />
                <br />

                 <button onClick={this.setData}>改变state里面的值</button>



               <br />
                <br />

                 <button onClick={this.setName.bind(this,'张三')}>执行方法传值</button>

                            
            </div>
        )

    }    
}
export default Home;
