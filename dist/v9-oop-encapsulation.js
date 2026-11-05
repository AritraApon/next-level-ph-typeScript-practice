// ! OOP _ Encapsulation
// Protect a state and change it only through methods .
//? Access Modifier
//* -> Public
//* -> Private
//* -> Protected
//* -> Read Only
//? Methods
//* -> Get
//* -> Set
//todo example 1:
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
    get salaryWithBonus() {
        return this._baseSalary + 10000;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error('Salary Can not be nagative value');
        }
        this._baseSalary = newSalary;
    }
}
const employee1 = new Employee('mir', 10000);
export {};
// employee1._baseSalary = 'abc' //* protected
// employee1.baseSalary = -4000,
// console.log(employee1)
// console.log(employee1.name)
// console.log(employee1.baseSalary)
// console.log(employee1.salaryWithBonus)
