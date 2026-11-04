// ============================================
// Type vs Interface
// ============================================
const user = {
    id: 123,
    name: "User"
};
const car = {
    brand: "Toyota",
    model: "Corolla"
};
const cat = {
    id: 3,
    name: "Mew",
    age: 5
};
export {};
// console.log(cat.name);
// ============================================
//todo Example 6: Type Alias Cannot Be Redeclared
// ============================================
//? Note:
//* Type alias cannot be declared multiple times
//* with the same name in the same scope.
//* It causes a duplicate identifier error.
// type Cow = {
//     id: number;
// };
//! Invalid: Duplicate identifier
// type Cow = {
//     name: string;
// };
// ============================================
//? Final Notes
// ============================================
//* 1. Use type for primitive types, literals, unions,
//*    tuples, and intersection types.
//* 2. Use interface for defining object structures.
// *3. Interface supports extends and declaration merging.
// *4. Type alias supports intersection using &.
// *5. Both type and interface can define object structures.
