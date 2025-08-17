/**
 * 타입 추론: 변수의 초기값을 기준으로 변수의 타입을 추론
 *  */

// 1. 변수 타입 추론
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "chloe",
  profile: {
    nickname: "silver",
  },
};

// 2. 구조 분해 할당
let { id, name, profile } = c;

// 3. 함수에서는 반환 값을 기준으로 타입 추론
function func(message = "sieun") {
  return "hi";
}

// 4. Any 타입의 진화: 암묵적으로 any 타입에서 진화하게 됨

//any 타입
let d;

// 4-1) number 타입으로 진화
d = 10;
d.toFixed();
//d.toUpperCase();  --> x

// 4-2) string 타입으로 진화
d = "string?";
d.toLocaleLowerCase();

// 5. const로는 타입 리터럴 타입으로 추론 -> 변경될 일이 없기 때문!
const num = 10;
const stringg = "const!";

// 6. (string | number)[] -> 자동 유니온 타입으로 추론
let arr = [1, "string!"];
