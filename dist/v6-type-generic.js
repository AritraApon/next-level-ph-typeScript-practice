//? Generic type
// Generic Type মানে হলো এমন একটি Type, যেখানে আগে থেকেই নির্দিষ্ট করে দিতে হয় না যে কোন ধরনের Data ব্যবহার হবে।
// সহজভাবে বললে: Generic হলো এমন একটি ব্যবস্থা, যেখানে Type পরে নির্ধারণ করা যায়।
//todo example 1: simple
const getValue = (value) => {
    return value;
};
getValue('abc');
getValue(123);
//! getValue(true) ==> not support this is the problem how can i solve this proble lets watch . 
// todo example 2 :
const warpInArray = (value) => {
    return [value];
};
const stringArray = warpInArray('abc');
const numberArray = warpInArray(123);
const bollenArry = warpInArray(false);
const srtingBox = {
    value: 'hello '
};
const numBox = {
    value: 123
};
const userRes = {
    success: true,
    statusCode: 200,
    data: {
        name: 'abc',
        role: 'admin'
    }
};
const postRes = {
    data: {
        data: 'adfad',
        discription: 'a bhdkjkj',
        title: 'hdjfjaskj'
    },
    success: false,
    statusCode: 500,
};
export {};
// console.log('user res', userRes)
// console.log('Post res', postRes)
