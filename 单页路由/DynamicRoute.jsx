import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//url模块来解析url地址    在react里面使用url模块需要安装url模块    cnpm install url --save
import url from 'url';


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            list:[
                {
                    aid:'11',
                    title:'我是新闻1111'
                },
                {
                    aid:'222',
                    title:'我是新闻222'
                },
                {
                    aid:'3',
                    title:'我是新闻333'
                },
                {
                    aid:'4',
                    title:'我是新闻4444'
                }
            ]
        };
    }
    render() {
        return (
            <div>
                我是新闻组件
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return (
                                <li key={key}>                                   
                                    <Link to={`/content/${value.aid}`}>{value.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    //生命周期函数
    componentDidMount(){
        //获取动态路由的传值
        console.log(this.props.match.params.aid);  
    }
    render() {
        return (
            <div>
                我是新闻详情组件
            </div>
        );
    }
}
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    aid:'11',
                    title:'我是商品1111'
                },
                {
                    aid:'222',
                    title:'我是商品222'
                },
                {
                    aid:'3',
                    title:'我是商品333'
                },
                {
                    aid:'4',
                    title:'我是商品4444'
                }
            ]
         };
    }
    render() {
        return (
            <div>
                我是商品组件
                 <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return (
                                <li key={key}>                                   
                                    <Link to={`/productcontent?aid=${value.aid}`}>{value.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
class ProductContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    //生命周期函数
    componentDidMount(){
        // this.props.location.search
        //获取get传值
        console.log(url.parse(this.props.location.search,true));
        var query=url.parse(this.props.location.search,true).query;
        console.log(query)
    }
    render() {
        return (
            <div>
                我是商品详情组件
            </div>
        );
    }
}
class App extends Component {
    render() {
        return (
            <Router>
            <div>           
                <header className="title">
                    <Link to="/">首页</Link>
                    <Link to="/news">新闻</Link>
                    <Link to="/product">商品</Link>
                </header>
                <Route exact path="/" component={Home} />
                <Route path="/news" component={News} />
                <Route path="/content/:aid" component={Content} /> 
                <Route path="/product" component={Product} /> 
                <Route path="/productcontent" component={ProductContent} />                
            </div>
        </Router>
        );
    }
}
export default App;
