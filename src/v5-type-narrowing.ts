//*1 typeof
//*2 type Guard
//*3 Truthiness
//*4 Equality
//*5 'in' oprator
//*6 'instanceof' operator
//*7 Discriminated Union
//* some cavert fo Type Guird

//! --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* type of and type guird

type Print = string | number ;

const printValue = (value:Print)=>{

    if(typeof value === 'string') //? type Gurid
        {
    const name = value.toUpperCase()
    return name
    }else{
        return value
    }
}

printValue(123)


//*truthiness

type User = {
    name:string,
    address ?: {
        road:number,
    }
} | null

const logedUser : User = {
    name:'abc',
    address:{
        road:123
    }
}

const showAddress = (user:User ) =>{
    if(user && user.address) //? turhiness check
        {
       console.log(user.address.road)
    }
}




