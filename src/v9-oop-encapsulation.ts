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

class Employee{
    constructor(
       public name: string,
       protected _baseSalary:number
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


}

const employee1 = new Employee('mir',10000)

// employee1._baseSalary = 'abc' //* protected
// employee1.baseSalary = -4000, 

console.log(employee1)

console.log(employee1.name)

console.log(employee1.baseSalary)

console.log(employee1.salaryWithBonus)