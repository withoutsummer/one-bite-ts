/**
 * 사용자 정의 타입 가드
 * : 사용자 정의 타입 가드는 TypeScript에서 유니언 타입(Union Type)의 실제 타입을 런타임에서 식별할 수 있도록 도와주는 함수
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

//Dog 또는 Cat 중 하나를 의미하는 유니온 타입
type Animal = Dog | Cat;

// 타입 가드 함수
// animal is Dog : "이 조건을 만족하면, TypeScript는 animal을 Dog 타입으로 간주하라"는 타입 판별 문법
function isDog(animal: Animal): animal is Dog {
  //as Dog로 강제 타입 단언을 하고 isBark 속성이 있는지 확인
  return (animal as Dog).isBark !== undefined;
}

//타입 가드 함수
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  //animal 타입이 dog 타입으로 간주
  if (isDog(animal)) {
    console.log(`${animal.name} is barking: ${animal.isBark}`);
  }
  //animal 타입이 cat 타입으로 간주
  else if (isCat(animal)) {
    console.log(`${animal.name} is scratching: ${animal.isScratch}`);
  }
}
