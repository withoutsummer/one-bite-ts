//--   1. Any   --//
// 특정 변수의 타입을 모를떄 사용하는 변수

let anyVar: any = 10;
anyVar = "hello";
anyVar = {};
anyVar = false;

//오류 코드 검사시에는 통과하고, 런타임시에 에러가 발생!
// 타입 스크립트의 이점이 없어짐 -> 사용을 지양하자!
anyVar.toUpperCase();

let num: number = 10;
num = anyVar;

//--    2. Unknown   --//
//여러 타입의 값을 할당은 가능하지만, 반대로 변수에 unknown 타입의 변수를 넣을 수 없음!
let unKnownVar: unknown;

unKnownVar = "";
unKnownVar = 1;
unKnownVar = () => {};

//허용 불가! 연산도 불가능!
//unKnownVar.toUpperCase()
