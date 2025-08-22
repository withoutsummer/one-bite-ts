/**
 * 함수 타입 정의
 */

function func(a: number, b: number): number {
  return a + b; //return문으로 자동 추론
}

// function func(a: number, b: number) {
//     return a + b; //return문으로 자동 추론
//   }

/**
 * 화살표 함수
 */

const add = (a: number, b: number): number => a + b;
//const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 */

// name은 필수 매개변수
// tall은 선택적 매개 변수
// -> 이떄 필수 매개 변수는 선택적 매개변수보다 앞에만 정의할 수 있음!
function introduce(name = "chloe", tall?: number) {
  console.log(`name: ${name}, tall: ${tall}`);
  //tall은 undefined가 될 수 있기 때문에 정수를 더할려고 할 경우 에러 발생
  //console.log(`name: ${name}, tall: ${tall + 10}`);

  if (typeof tall === "number") {
    console.log(`name: ${name}, tall: ${tall + 10}`);
  }
}

introduce("silver", 23);

//tall은 선택적 매개변수로 생략 가능!
introduce("silver");

function getSum(...rest: number[]) {
  let sum = 0;

  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
