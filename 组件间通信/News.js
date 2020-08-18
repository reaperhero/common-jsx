import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
class News extends Component {
    constructor(props){
        super(props);        
        this.state={          
          title:'新闻组件',
          msg:'我是新闻组件的msg'
        }
    }
    run=()=>{
      alert('我是父组件的run方法')
    }
    //获取子组件里面穿过来的数据
    getChildData=(result)=>{
      this.setState({
        msg:result
      })
    }
    getData=()=>{
      alert(this.state.title+'getData');
    }
    //父组件主动调用子组件的数据和方法
    getFooter=()=>{
      /*
        父组件主动获取子组件的数据
          1、调用子组件的时候指定ref的值 <Header ref='header'></Header>      
          2、通过this.refs.header  获取整个子组件实例  (dom（组件）加载完成以后获取 )
      */
      //alert(this.refs.footer.state.msg); //获取子组件的数据
      this.refs.footer.run();
    }
    render() {
      return (
        <div>        
            <Header title={this.state.title}  run={this.run}  news={this} />
          <br />
          <hr />
            <br />
            这是新闻组件的内容---{this.state.msg}
             <br />
             <button onClick={this.getFooter}>获取整个底部组件</button>
             <br />
            <hr />
            <br />
          <Footer  ref='footer'/>
        </div>
      );
    }
  }
  export default News;
  