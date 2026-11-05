//? Inheritance:
//* extends , super() , protected .
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
    get salaryWithBonus() {
        return this._baseSalary + 10000;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error('Salary Can not be nagative value');
        }
        this._baseSalary = newSalary;
    }
    discribe() {
        return `${this.name} get ${this.baseSalary} tk per month`;
    }
}
const employee1 = new Employee('mir', 10000);
console.log(employee1.discribe());
// new class make for inheritance
class Manager extends Employee {
    teamMemberCount;
    //! ------------------------------------------------
    //* old methords
    //! ------------------------------------------------
    // teamMemberCount: number
    // constructor(
    //   name: string,
    //   _baseSalary: number,
    //   teamMemberCount: number
    // ){
    //     super(name, _baseSalary)
    //  this.teamMemberCount = teamMemberCount
    // }
    //! ------------------------------------------------
    // * mordern methords
    // !----------------------------------------------
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
    discribeWork() {
        return `${this.name} has ${this.teamMemberCount} team member `;
    }
    discribeManager() {
        return `${this.name} earn ${this._baseSalary}  tk per month`;
    }
}
const manager1 = new Manager('Mir', 90000, 10);
export {};
// console.log(manager1)
// console.log(manager1.discribe())
// console.log(manager1.discribeWork())
