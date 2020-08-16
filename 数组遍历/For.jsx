let arr = [1,2,3,4,5,6]
//对数组直接进行循环，相当于直接for循环,没有返回值
// let result = arr.forEach((item,index,arr)=>{
// 	console.log(item)
// 	console.log(index)
// 	console.log(arr)
// 	return item
// })
//console.log(result)


let arr2 = ['香蕉',"苹果","雪梨"]
//map,对数组每一项进行加工，加工完成之后返回1个新的数组
// let result2 = arr2.map((item,index,arr)=>{
// 	let str = index + item + index
// 	return str
// })
// console.log(result2)


let arr3 = [1,2,3,4,5,6,7,8,9];
//filter过滤，就是讲想要的内容进行筛选，不要内容去除，最终返回想要的内容的数组。
// let result3 = arr3.filter((item,index)=>{
// 	if(item%2==0){
// 		//通过返回true还是false进行选择，true就是想要，false就是去除。
// 		return true;
// 	}else{
// 		return false;
// 	}
// })
// console.log(result3)

//reduce,是对整个数组进行整合，比如你要做一个将数组里所有的数字进行相加
//将数组每一项内容整合后，返回1个内容
let arr4 = [1,2,3,4,5,6,7,8,9];
let result4 =arr4.reduce((pre,next,index)=>{
    console.log(pre);
    console.log(next);
    console.log(index)
    return pre+next
},0)
console.log(result4)



//for...in...主要用于遍历对象的，不适用于遍历数组,for(key in obj),里面的每项是key
//for...of...可以用来遍历数组，类数组的对象，字符串，set/map,generator,
//for(item of arr),里面的是每一项


let obj = {
    name:"老陈",
    type:"帅",
    content:"前端"
}

for(key in obj){
    console.log("key："+key+";value:"+obj[key])
}


let arr5 = ["范冰冰","李晨","鹿晗"]
//for of循环的是每一项
for(let item of arr5){
    console.log(item)
}