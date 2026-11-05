//? Polymorphism :

// * override

class Employee{
    constructor(
       public name: string,
    //    private _baseSalary:number ❌
    protected _baseSalary: number //✅
    ){}

    get baseSalary() : number {
        return this._baseSalary
    }

    // get salaryWithBonus() : number {
    //     return this._baseSalary + 10000
    // }

    set baseSalary( newSalary : number){
        if(newSalary < 0 ){
            throw new Error('Salary Can not be nagative value')
        }
        this._baseSalary = newSalary
    }


    // discribe() : string {
    //     return `${this.name} get ${this.baseSalary} tk per month`
    // }

    calculatePay(taxrate : number){
        return this.baseSalary - this.baseSalary * taxrate
    }

}

class Manager extends Employee {
 override calculatePay(taxRate:number){
    return this.baseSalary + 8000 - taxRate
 }
}

const empolyee = new Employee('abc' , 30000)

const manager = new Manager('apon', 90000)

// console.log(empolyee.calculatePay(0.2))
// console.log(manager.calculatePay(0.1))