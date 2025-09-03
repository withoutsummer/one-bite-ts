/**
 * 인터페이스: 타입에 이름을 지어주는 또 다른 문법 + 객체의 구조를 정의하는데 특화된 문법(상속, 합침 등의 특수한 기능을 제공)
 * -> 유니온이나 인터섹션은 타입 별칭으로 사용 가능
 */

interface Person {
  readonly name: string;
  age?: number;

  // 1. 함수 타입 표현식
  intro1?: () => void;

  // 2. 호출 시그니처
  intro(): void;
  // 함수 오버로딩(두개의 인수를 받고자 할 때) -> 반드시 호출 시그니처로 사용해야함!
  intro(a: number, b: number): void;
}

//유니온 타입 -> 인터페이스를 타입 별칭으로 사용 가능!

type Type1 = number | string;

//인터섹션 타입
type Type2 = number & string;

const person: Person = {
  name: "chloe",
  age: 23,
  intro: function () {
    console.log(`my name is ${name}`);
  },
};

//person.name = "do not change";
person.intro();
person.intro(1, 2);
