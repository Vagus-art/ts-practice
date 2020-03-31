//type checks on function args

const add = (n1: number, n2: number, print: boolean, phrase: string) => {
  if (print) {
    console.log("phrase");
    return n1 + n2;
  }
};

//auto type declaration
const number1 = 1;
const number2 = 2;
const printresult = true;

//inline type declaration (usually bad practice)
const phrase: string = "hello";

//exec func
console.log(add(number1, number2, printresult, phrase));

//obj auto type
const obj = {
  num: 1,
  str: "h"
};

//obj props type declaration
const typeDeclarationInLine: {
  mynumber: number;
  mystring: string;
  arrayOfString: string[];
  arrayOfNumber: number[];
  boolean: boolean;
  tuple: [number, string];
} = {
  mynumber: 3,
  mystring: "helloworld",
  arrayOfNumber: [1, 2, 3],
  arrayOfString: ["hello", "world"],
  boolean: false,
  tuple: [1, "two"]
};

//enumeration (admin = 0, read only = 1, author = 2)
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

//union type
let flexibleVar: string | number;
flexibleVar = 1;
flexibleVar = "hello";

//literal type (only one of the strings listed)
let literalTypes: "mumbo" | "jumbo";
literalTypes = "mumbo";
literalTypes = "jumbo";

//make a type
type Combinable = string | number;
let flexibleVar2: Combinable;
flexibleVar2 = 1;
flexibleVar2 = "hello";

type Literal = "mumbo" | "jumbo";
let literalTypes1: Literal;
literalTypes1 = "mumbo";
literalTypes1 = "jumbo";

//return specific type
const addWithType = (
  n1: number,
  n2: number,
  print: boolean,
  phrase: string
): number => {
  if (print) {
    console.log("phrase");
  }
  return n1 + n2;
};

const returnVoid = (phrase: string): void => {
  console.log(phrase);
};

//function types
const sum = (a:number,b:number) =>{
    return a+b;
}

let varSum : (a:number,b:number) => number;
varSum = sum;
console.log(varSum(1,3));

//sums parameters and then uses a callback passed through arguments
const sumWithCallback = (a:number,b:number,callback:(n:number)=>void)=>{
    return callback(a+b);
}

//callback is num squared
console.log(sumWithCallback(1,3,(a)=>a*a));

//generics
const last = <T>(arr: T[]) => {
    return arr[arr.length - 1];
}

//generics let you define the type of args outside a function?
console.log(last([1,2,3,4]));
console.log(last(['a','b','c','d']));

//multiple generics, Y defaults to any if missing
const makeArr = <X, Y = any>(x:X, y:Y) : [X,Y] =>{
    return [x,y];
}

console.log(makeArr(1,2));
console.log(makeArr(1,"2"));
console.log(makeArr<string|null,number>(null,2));

//with <Y> as optional
console.log(makeArr<string|null>(null,2));


//make generic constraints (object at least has firstName and lastName, but can have more props)
const makeFullName = <T extends { firstName: string, lastName: string}>(obj:T) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    }
}

console.log(makeFullName({firstName:"agustin",lastName:"favoretti"}));

//types of types
interface Tab<T> {
    id: number,
    position: number,
    data: T
}

type numTab = Tab<number>;
type stringTab = Tab<string>;

let myTab : numTab;
myTab = {
    id: 1,
    position: 1,
    data: 3
}
console.log(myTab);