//? Inheritance:

//* extends , super() , protected .

class Employee{
    constructor(
       public name: string,
    //    private _baseSalary:number ❌
    protected _baseSalary: number //✅
    ){}

    get baseSalary() : number {
        return this._baseSalary
    }

    get salaryWithBonus() : number {
        return this._baseSalary + 10000
    }

    set baseSalary( newSalary : number){
        if(newSalary < 0 ){
            throw new Error('Salary Can not be nagative value')
        }
        this._baseSalary = newSalary
    }


    discribe() : string {
        return `${this.name} get ${this.baseSalary} tk per month`
    }

}

const employee1 = new Employee('mir',10000)

// console.log(employee1.discribe())

// new class make for inheritance

class Manager  extends Employee{

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
    constructor(
        name: string,
        _baseSalary: number,
        public teamMemberCount: number
    ){
        super(name, _baseSalary)
    }

    discribeWork():string {
        return `${this.name} has ${this.teamMemberCount} team member `
    }

    discribeManager():string {
        return `${this.name} earn ${this._baseSalary}  tk per month`
    }

}

const manager1 = new Manager('Mir', 90000, 10)

// console.log(manager1)
// console.log(manager1.discribe())
// console.log(manager1.discribeWork())