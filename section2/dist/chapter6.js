//--   1. Any   --//
// 특정 변수의 타입을 모를떄 사용하는 변수
let anyVar = 10;
anyVar = "hello";
anyVar = {};
anyVar = false;
//오류 코드 검사시에는 통과하고, 런타임시에 에러가 발생!
// 타입 스크립트의 이점이 없어짐 -> 사용을 지양하자!
anyVar.toUpperCase();
let num = 10;
num = anyVar;
//--    2. Unknown   --//
let unKnownVar;
unKnownVar = "";
unKnownVar = 1;
unKnownVar = () => { };
export {};
