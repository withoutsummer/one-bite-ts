/**
 * 타입 좁히기
 * -> 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

// 조건 :
// value -> number : toFixed
// value -> string : toUpperCase
// value -> Date : getTime
function func(value: number | string | Date | null | Person) {
  //유니온 타입
  value;
  //value.toUpperCase();  -> 불가능
  //value.toFixed();  -> 불가능

  if (typeof value === "number") {
    //더 좁은 타입으로 자동 추론(number 타입 보장)
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    //더 좁은 타입으로 자동 추론(string 타입 보장)
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    //instanceof는 (Date)클래스의 인스턴스인지를 확인하는 연산자
    console.log(value.getTime());
  } else if (value && "age" in value) {
    //in은 null이 허용이 안됨 -> and 연산자로 value 값이 존재할 때에만 가능하도록
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
  //   else if (typeof value === "object") {
  //     console.log(value.getTime());
  //   }  -> null도 조건문에 충족될 수 있기 때문에 getTime 오류 발생
}

/**
 * instanceof 연산자 :  프로토타입 체인을 확인해서 객체가 특정 생성자 함수의 인스턴스인지 판별
 * -> 주로 사용자 정의 클래스나 내장 객체(Date, Array, Error 등) 판별에 사용
 */

/**
 * in 연산자: 객체에 특정 프로퍼티가 존재하는지 확인
 * -> in을 사용할 때 null, undefined는 허용되지 않음 → 반드시 값이 존재하는지 먼저 확인해야 함 (value && "prop" in value)
 */
