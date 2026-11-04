// ============================================================
// TypeScript Type Hierarchy
// ============================================================

// TypeScript-এর Type Hierarchy মূলত ৩টি ধারণা দিয়ে বোঝা যায়:
// 1. Top Type
// 2. Core Type এবং Sub-type
// 3. Bottom Type
//
// Top Type    : any, unknown
// Core Type   : string, number, boolean ইত্যাদি
// Bottom Type : never
//
// Top থেকে Bottom-এর দিকে গেলে type আরও নির্দিষ্ট হয়।

// ------------------------------------------------------------
// 1. TOP TYPES
// ------------------------------------------------------------

// any:
// যেকোনো ধরনের value রাখা যায়।
// TypeScript-এর type checking অনেকটাই এড়িয়ে যায়।

let value1: any = "Hello";
value1 = 100;
value1 = true;


// unknown:
// যেকোনো ধরনের value রাখা যায়।
// কিন্তু ব্যবহার করার আগে type check করতে হয়।

let value2: unknown = "Hello";

// Type check করার পর ব্যবহার করা নিরাপদ।
if (typeof value2 === "string") {
  console.log(value2.toUpperCase());
}


// ------------------------------------------------------------
// 2. CORE TYPES
// ------------------------------------------------------------

// Core Types-এর মধ্যে রয়েছে:
// string, number, boolean, bigint, symbol,
// object, null, undefined, void ইত্যাদি।

let username: string = "Apon";
let age: number = 22;
let isAdmin: boolean = true;


// ------------------------------------------------------------
// 3. LITERAL TYPES
// ------------------------------------------------------------

// Literal Type হলো কোনো নির্দিষ্ট value-কে type হিসেবে ব্যবহার করা।
//
// Literal Type তার মূল Core Type-এর আরও নির্দিষ্ট রূপ।

let userRole: "admin" | "user" = "admin";

let status: 200 | 404 = 200;

// "admin" হলো string-এর Literal Type।
// 200 হলো number-এর Literal Type।


// ------------------------------------------------------------
// 4. UNIT TYPES
// ------------------------------------------------------------

// Unit Type হলো এমন type, যার নির্দিষ্ট একটি value থাকে।
//
// void:
// সাধারণত কোনো function যখন meaningful value return করে না,
// তখন void ব্যবহার করা হয়।

function sayHello(): void {
  console.log("Hello TypeScript!");
}

// undefined:
// undefined একটি নির্দিষ্ট value।

let result: undefined = undefined;

// void এবং undefined এক জিনিস নয়।
// void function-এর return type বোঝাতে ব্যবহৃত হয়।


// ------------------------------------------------------------
// 5. NULLISH TYPES
// ------------------------------------------------------------

// null:
// ইচ্ছাকৃতভাবে কোনো value না থাকা বোঝায়।

let selectedUser: null = null;

// undefined:
// কোনো value নির্ধারণ করা হয়নি বা অনুপস্থিত।

let selectedValue: undefined = undefined;

// strictNullChecks চালু থাকলে
// null এবং undefined আলাদা type হিসেবে বিবেচিত হয়।


// ------------------------------------------------------------
// 6. BOTTOM TYPE
// ------------------------------------------------------------

// never:
// এমন value বোঝায়, যা কখনো ঘটতে পারে না।
// এটি TypeScript-এর Bottom Type।
//
// never কোনো value-ই গ্রহণ করতে পারে না।

function throwError(): never {
  throw new Error("Something went wrong!");
}

// কখনো শেষ হয় না এমন function-ও never return করে।

function infiniteLoop(): never {
  while (true) {
    // এই loop কখনো শেষ হবে না।
  }
}


// ------------------------------------------------------------
// 7. TYPE HIERARCHY SUMMARY
// ------------------------------------------------------------

//                    TOP TYPES
//                  any, unknown
//                       |
//          +------------+------------+
//          |            |            |
//       CORE TYPES    UNIT TYPES   NULLISH TYPES
//          |            |            |
//       string         void          null
//       number       undefined      undefined
//       boolean
//          |
//     LITERAL TYPES
//          |
//       "admin"
//       200
//          |
//          v
//      BOTTOM TYPE
//         never
//
// মনে রাখবি:
// Literal Type হলো Core Type-এর আরও নির্দিষ্ট রূপ।
// never হলো Bottom Type।
// any এবং unknown হলো Top Types।
//
// এটি TypeScript-এর Type Hierarchy-এর একটি simplified overview।
// সব type-এর মধ্যে সরাসরি inheritance relationship নেই।