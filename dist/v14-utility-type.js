//!----------------------------Utility Types-----------------------------
//?note; https://www.typescriptlang.org/docs/handbook/utility-types.html
const user = {
    id: 1,
    name: 'Max',
    // age: 27, //? Optional
    // role: 'member' //? Optional
};
const obj1 = {
    a: 1,
    b: 'abc',
};
// const obj2 Required<Props> = {  // error throw korbe jodi kono ekta missing thake
//     a: 1,
//     b: 'abc',
// }
const obj2 = {
    a: 1,
    b: 'abc',
    c: false
};
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
cats.boris;
const todo1 = {
    title: 'abc',
    description: 'abc',
};
const todo2 = {
    label: 'abc',
    priority: 123,
    // description:'abc',
    // title:'abc',
};
export {};
