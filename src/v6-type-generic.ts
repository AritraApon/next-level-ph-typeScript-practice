//? Generic type

// Generic Type মানে হলো এমন একটি Type, যেখানে আগে থেকেই নির্দিষ্ট করে দিতে হয় না যে কোন ধরনের Data ব্যবহার হবে।

// সহজভাবে বললে: Generic হলো এমন একটি ব্যবস্থা, যেখানে Type পরে নির্ধারণ করা যায়।

//todo example 1: simple
const getValue = (value: string | number) =>{
    return value
}

getValue('abc');
getValue(123);
//! getValue(true) ==> not support this is the problem how can i solve this proble lets watch . 



// todo example 2 :
const warpInArray= <something>(value: something) =>{
    return [value]
}

const stringArray = warpInArray('abc')
const numberArray = warpInArray(123)
const bollenArry= warpInArray(false)

// console.log(stringArray, numberArray, bollenArry)

//todo Example 3 : type

type Box<T> ={
    value : T
}

const srtingBox : Box<string> ={
    value: 'hello '
}

const numBox : Box<number>={
    value:123
}



//todo : Example 4 : interface

interface ApiResponse<T> {
    data:T ,
    success:boolean,
    statusCode:number
}

interface User  {
    name:string,
    role:string,
}

interface Post {
    title:string,
    discription: string,
    data:string,
}



type userResponse = ApiResponse<User>
type postResponse = ApiResponse<Post>

const userRes: userResponse ={
    success:true,
    statusCode:200,
    data:{
        name:'abc',
        role:'admin'
    }
}

const postRes : postResponse={

    data:{
        data:'adfad',
        discription:'a bhdkjkj',
        title:'hdjfjaskj'
    },
    success:false,
    statusCode:500 ,

}
// console.log('user res', userRes)
// console.log('Post res', postRes)