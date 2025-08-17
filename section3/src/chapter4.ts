//대수 타입

// 1. 합집합 - union 타입
let a: string | number;
a = 4;
a = "hi";

// 객체 union 타입 예제
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "dubu",
  color: "",
};

let union2: Union1 = {
  name: "dubu",
  language: "",
};

let union3: Union1 = {
  name: "dubu",
  color: "",
  language: "",
};

//
// let union4: Union1 = {
//   name: "dubu",
// };

// 2. 교집합 타입 - intersection 타입
let variable: number & string;
//-> never 타입

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
