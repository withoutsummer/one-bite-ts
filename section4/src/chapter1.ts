/**
 * 함수 타입 표현식
 */

// (매개변수) => 반환값
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const addA: (a: number, b: number) => number = (a, b) => a + b;

const sub: Operation = (a, b) => a - b;

const multiply: Operation = (a, b) => a * b;

const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니처
 */

type Operation2 = {
  //(매개변수): 반환값 타입
  (a: number, b: number): number;
  name: string;
};

const add2: Operation2 = (a, b) => a + b;

const sub2: Operation2 = (a, b) => a - b;

const multiply2: Operation2 = (a, b) => a * b;

const divide2: Operation2 = (a, b) => a / b;
