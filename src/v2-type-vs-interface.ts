// ============================================
// Type vs Interface
// ============================================

//? Note:
//* Interface is generally used to define object structures.
//* Type alias is more flexible and can represent objects,
//* primitive types, literals, unions, tuples, etc.


// ============================================
//todo Example 1: Primitive Types and Literals
// ============================================

//? Note:
//* Type can represent primitive types and literal types.
//* Interface cannot directly represent these types.

// Type Alias
type ID = number; // ✅

// Invalid
//! interface ID = number; // ❌


// ============================================
//todo Example 2: Union Types
// ============================================

//? Note:
//* Type supports union types using the | operator.
//* Interface cannot directly represent a union type.

type Role = "admin" | "user"; // ✅

// Invalid
//! interface Role = "admin" | "user"; // ❌

// but

interface UserRole {
    role: "admin" | "user";
}


// ============================================
//todo Example 3: Interface Extends
// ============================================

//? Note:
//* Interface can extend another interface using the
//* extends keyword.
//* Type alias cannot use extends like an interface,
//* but it can combine types using the & operator.

interface User {
    id: number;
}

interface User1 extends User {
    name: string;
}

const user: User1 = {
    id: 123,
    name: "User"
};

// console.log(user.name);


// ============================================
//todo Example 4: Type Intersection
// ============================================

//? Note:
//* Type alias can combine multiple types using the
//* intersection operator (&).

type Vehicle = {
    brand: string;
};

type Car = Vehicle & {
    model: string;
};

const car: Car = {
    brand: "Toyota",
    model: "Corolla"
};

// console.log(car.model);


// ============================================
//todo Example 5: Interface Declaration Merging
// ============================================

//? Note:
//* Interface supports declaration merging.
//*Multiple interfaces with the same name are
//* automatically merged into one interface.

interface Cat {
    id: number;
}

interface Cat {
    name: string;
}

interface Cat {
    age: number;
}

const cat: Cat = {
    id: 3,
    name: "Mew",
    age: 5
};

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