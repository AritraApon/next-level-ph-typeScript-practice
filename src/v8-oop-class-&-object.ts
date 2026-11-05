//! OOP : Object Oriented Programing
// 1. **Encapsulation** — Data ও Methods একসঙ্গে রাখা এবং Data-কে সুরক্ষিত রাখা।
// 2. **Abstraction** — অপ্রয়োজনীয় Details লুকিয়ে প্রয়োজনীয় Features দেখানো।
// 3. **Inheritance** — একটি Class-এর Properties ও Methods অন্য Class-এ ব্যবহার করা।
// 4. **Polymorphism** — একই Method বিভিন্নভাবে কাজ করতে পারা।


//? Class and Object :

//todo Example 1 -->
class User {
    name:string;
    email:string;
    role:string;

    constructor(name:string ,
         email:string,
         role:string)
         {
            this.name = name,
            this.email = email,
            this.role = role
         }
}


const user1 = new User('abc','abc@gmail.com','user')
const user2 = new User('def','def@gmail.com','admin')

// console.log('user1',user1 instanceof User)
// console.log('user2',user2)


//todo: Example 2 : --->

class Employee{
    name:string;
    salary:number

    constructor(name:string, salary:number){
        this.name = name ,
        this.salary = salary
    }
}

const employee1 = new Employee('ABC',300000)
const employee2 = new Employee('DEF',200000)

// console.log(employee1,employee2)