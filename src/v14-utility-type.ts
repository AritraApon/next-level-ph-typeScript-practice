//!----------------------------Utility Types-----------------------------
//?note; https://www.typescriptlang.org/docs/handbook/utility-types.html

//1: Partial
//2: Required
//3: Record
//4: Pick
//5: Omit
//6: Readonly

//*Topic 1 : Partial
interface User {
    id: number;
    name: string;
    age: number;
    role: string;
}

const user: Partial<User> = {
    id: 1,
    name: 'Max',
    // age: 27, //? Optional
    // role: 'member' //? Optional
}

// console.log(user)

//*Topic 2: Required

interface Props {
    a?: number;
    b?: string;
    c?: boolean;
}

const obj1 : Props = {  // kono error throw korbe na karon
    a: 1,
    b: 'abc',
}


// const obj2 Required<Props> = {  // error throw korbe jodi kono ekta missing thake
//     a: 1,
//     b: 'abc',
// }

const obj2 : Required<Props> = {
    a: 1,
    b: 'abc',
    c: false
}


//*Topic 3 : Record<keys and types= value>

type CatName = "miffy" | "boris" | "mordred"; //kyes

interface CatInfo {
  age: number; // type = value
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;


//*Topic 4 : Pick choice kora
interface Todo {
  title: string;
  description: string;
  label: string;
  priority: number;
}

type TodoPriview = Pick<Todo, 'title' | 'description'>

const todo1 : TodoPriview = {
    title:'abc',
    description:'abc',
}


//Topic 5 : Omit  bad dea
type TodoPriview1 = Omit<Todo, 'description' | 'title'>

const todo2: TodoPriview1 = {
    label:'abc',
    priority:123,
    // description:'abc',
    // title:'abc',
}