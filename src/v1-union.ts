//* leteral. type

type Stauts = 'active'

let userStatus: Stauts = 'active'

// console.log(userStatus)

//* Basic union
type identity = string | number
let userId: identity = '1'
// console.log(userId)

//*Literal union

type Role = 'user' | 'admin' | 'super-admin'

const userRole: Role ='super-admin'
// console.log(userRole)


//* Object Union

type Admin = {
    id:number,
    name:string,
    role: 'admin'
    privileges: string[]
}

type member = {
    id:number,
    name:string,
    role: 'member'
    posts: string[]
}

type User = Admin | member ;

const user: User = {
    id: 1,
    name: 'Max',
    role: 'member',
  posts :['abc', 'def' ]


}
// console.log(user)