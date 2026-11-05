//? Polymorphism :
// * override
class Employee {
    name;
    _baseSalary;
    constructor(name, 
    //    private _baseSalary:number ❌
    _baseSalary //✅
    ) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    // get salaryWithBonus() : number {
    //     return this._baseSalary + 10000
    // }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error('Salary Can not be nagative value');
        }
        this._baseSalary = newSalary;
    }
    // discribe() : string {
    //     return `${this.name} get ${this.baseSalary} tk per month`
    // }
    calculatePay(taxrate) {
        return this.baseSalary - this.baseSalary * taxrate;
    }
}
class Manager extends Employee {
    calculatePay(taxRate) {
        return this.baseSalary + 8000 - taxRate;
    }
}
const empolyee = new Employee('abc', 30000);
const manager = new Manager('apon', 90000);
export {};
// console.log(empolyee.calculatePay(0.2))
// console.log(manager.calculatePay(0.1))
