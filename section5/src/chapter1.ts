/**
 * 인터페이스의 확장
 */

interface Animal {
  name: string;
  age: number;
}

// -- Dog는 Animal을 확장한 인터페이스 --//
interface Dog extends Animal {
  //   name: "huchu"; -> 동일 프로퍼티를 다시 스트링 리터럴 타입으로 정의 가능! 단, 서브 타입으로만 재정의 가능하다.
  //   age: string;  -> 서브 타입이 아니기 때문에 불가능
  isBark: boolean;
}

const dog: Dog = {
  name: "dubu",
  age: 1,
  isBark: false,
};

//동일한 프로퍼티를 계속 추가하는건 비효율적!
interface Cat {
  name: string;
  age: number;
  isScratch: boolean;
}

/**
 * 인터페이스 다중 확장
 *  */
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  age: 2,
  isBark: false,
  isScratch: true,
};
