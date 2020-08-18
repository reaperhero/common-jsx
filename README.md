# common-jsx


## jsx语法

- 语法规则

1、所有的模板要被一个根节点包含起来

2、模板元素不要加引号


3、{}绑定数据       
 


4、绑定属性注意

```
class 要变成 className   

for 要变成  htmlFor

style属性和以前的写法有些不一样

<div style={{'color':'blue'}}>{this.state.title}</div>
<div style={{'color':this.state.color}}>{this.state.title}</div>
```

5、循环数据要加key

6、组件名称首字母大写、组件类名称首字母大写


- this指向

在以类继承的方式定义的组件中，为了能方便地调用当前组件的其他成员方法或属性（如：this.state），通常需要将事件处理函数运行时的 this 指向当前组件实例。

第一种方法：
```
run(){

        alert(this.state.name)
}
<button onClick={this.run.bind(this)}>按钮</button>
```


第二种方法：


构造函数中改变
```
this.run = this.run.bind(this);


run(){

        alert(this.state.name)
    }
<button onClick={this.run>按钮</button>
```


第三种方法：
```
run=()=> {
    alert(this.state.name)
}

<button onClick={this.run>按钮</button>
```

## 父子组件传值

父组件给子组件传值(传值,传方法,以及把整个父组件传给子组件)

1.在调用子组件的时候定义一个属性  <Header msg='首页'></Header>

2.子组件里面 this.props.msg          


父组件主动获取子组件的数据

1、调用子组件的时候指定ref的值   <Header ref='header'></Header>      

2、通过this.refs.header  获取整个子组件实例
