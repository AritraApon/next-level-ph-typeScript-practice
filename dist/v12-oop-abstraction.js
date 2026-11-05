//! OOP- Abstraction :
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error('Salary Can not be nagative value');
        }
        this._baseSalary = newSalary;
    }
}
class Developer extends Employee {
    calculatePay() {
        return this.baseSalary + 4000;
    }
    isRegisterEntry() {
        return true;
    }
}
const developer = new Developer('Apon', 30000);
console.log(developer.calculatePay(), developer.isRegisterEntry());
export {};
