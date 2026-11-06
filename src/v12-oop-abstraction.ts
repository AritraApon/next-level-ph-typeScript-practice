//! OOP- Abstraction :

abstract class Employee {
    constructor(
        public name:string,
        protected _baseSalary:number

    ){
    }
     get baseSalary() : number {
        return this._baseSalary
    }


    set baseSalary( newSalary : number){
        if(newSalary < 0 ){
            throw new Error('Salary Can not be nagative value')
        }
        this._baseSalary = newSalary
    }

    abstract calculatePay():number;
    abstract isRegisterEntry():boolean

}

class Developer extends Employee{
    calculatePay(){
        return this.baseSalary + 4000
    }

    isRegisterEntry(){
        return true
    }
}

const developer = new Developer('Apon', 30000)
// console.log(developer.calculatePay() , developer.isRegisterEntry())