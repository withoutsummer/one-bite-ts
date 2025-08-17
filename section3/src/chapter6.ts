/*
 * 타입 단언 : as (타입)
 */

type Person = {
  name: string;
  age: number;
};

//빈 객체로 초기화 하고 이후에 나중에 프로퍼티에 값을 초기화 시키고 싶은 경우,
let person = {} as Person;
person.name = "chole";
person.age = 23;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "dubu",
  color: "white",
  breed: "pomeranian",
} as Dog; //타입 단언으로 breed 프로퍼티를 추가해도 에러가 x

/*
 * 타입 단언의 규칙 :
 * 단언식 -> 값 as 단언
 * ex) A as B
 * A가 B의 슈퍼타입이거나 서브타입이어야 한다.
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// x -> number와 string은 교집합이 없음. 즉, 슈퍼 타입이나 서브 타입이 될 수 없다
//let num3 = 10 as string ;

//다중 단언 -> 지양할 것!
let num4 = 10 as unknown as string;

/**
 * const 단언
 */

let num5 = 10 as const;

//객체의 모든 프로퍼티를 읽기 전용으로 변경
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

/**
 * Non Null 단언 : !. 프로퍼티
 */

type Post = {
  title: string;
  author?: string;
};

let post1: Post = {
  title: "게시글1",
  author: "chole",
};

//이 값이 null이나 indefined가 아닐 것임을 명시해줌! -> 확실할 떄만 사용할 것
const len: number = post1.author!.length;
