//--   1. void   --//
// 아무것도 없음을 의미하는 타입

//함수 반환값에도 타입을 지정할 수 있음!
function func1(): string {
  return "hello";
}

//함수의 반환값이 없을 경우 void로 지정
function func2(): void {
  console.log("hello");
}

let a: void;
// a = 1;
// a = NaN;
// a= null;
// void 타입의 변수에는 undefined만 할당할 수 있음!
a = undefined;

//함수의 반환값이 없을 경우 void로 지정
//A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
function func3(): null {
  console.log("hello");

  //반드시 반환을 해야하는 불편함이 있음!
  //-> 리턴값이 불필요한 함수의 타입을 지정할 떄에는 avoid는 사용해야하는 이유
  return null;
}

//--   2. never   --//
//  애초에 정상적으로 종료가 안되고 반환을 할 수 없는 함수에서는 void가 아닌 never을 사용
//이 함수가 반환값이 있는 것 자체가 모순일때!

function fun4(): never {
  while (true) {}
}
function fun5(): never {
  throw Error();
}

let b: never;
// b = undefined
// never 타입은 undefined도 담을 수 없음 !
