/**
 * 함수 타입 호환성
 * : 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값의 타입 호환 여부
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; //number <- number 리터럴 타입
//b = a;  // 다운캐스팅이므로 불가능!

// 기준2. 매개변수 타입 호환 여부
//2-1. 매개변수의 개수가 동일할 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

//c = d; // 업캐스팅일때 허용이 안됨!
d = c; //다운 캐스팅인데 오히려 허용됨

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(`name : ${dog.name}, color: ${dog.color}`);
};

//animalFunc = dogFunc; //업캐스팅되는 상황인데 호환이 불가능!

//예시로 이해해보자!
//animal 타입에 dog 타입을 할당한다는게 안되는 이유
let testFunc = (animal: Animal) => {
  //console.log(`name : ${animal.name}, color: ${animal.color}`);
};

//반대로는 가능함.
let testFunc2 = (dog: Dog) => {
  console.log(`name : ${dog.name}`);
};

//2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; //매변수 타입이 가능하고, 매개변수가 더 적은 함수에 대해서는 할당이 가능
//func2 = func1;
