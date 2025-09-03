/**
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  //   name: number;  -> 충돌!! 반드시 동일한 타입만 합침이 가능
  age: number;
}

const person: Person = {
  name: "sieun",
  age: 23,
};

/**
 * 모듈 보강
 */

//기존 제공되는 인터페이스 라이브러리
interface Lib {
  a: number;
  b: number;
}

//모듈 합침으로 모듈 보강
interface Lib {
  c: string;
}

//기존 인터페이스에서 객체를 추가를 하고자 할 때
const lib: Lib = { a: 1, b: 2, c: "hello" };
