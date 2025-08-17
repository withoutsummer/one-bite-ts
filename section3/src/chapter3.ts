// 기본 타입간의 호환성

let num1: number = 10;
let num2: 10 = 10;

//업캐스팅
num1 = num2;

//객체 타입 간의 호환성
// -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?

interface Animal {
  name: string;
  color: string;
}

//조건이 더 적은 타입이 슈퍼 타입이 됨!
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "두부",
  color: "white",
  breed: "pomeranian",
};

//업 캐스팅 -> O
animal = dog;

//다운 캐스팅 -> x
//dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로",
  price: 33000,
  skill: "react js",
};

book = programmingBook;

//초과 프로퍼티 검사로 업 캐스팅이 안되는 것!
//변수를 초기화할때 초기화하는 값으로 객체 리터럴을 사용하면 발동하하는 검사
let book2: Book = {
  name: "한 입 크기로",
  price: 32000,
  //skill : "reactTs"
};

let book3: Book = programmingBook;
