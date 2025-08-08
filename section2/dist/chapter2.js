//--   1. 배열   --//
//1-1. 첫번째 방식
let numArr = [1, 2, 3];
let strArr = ["hello", "i'm", "chloe"];
//1-2. 두번째 방식
let boolArr = [true, true, false];
//배열에 들어가는 요소가 다양할 경우,
let mutiArr = [1, "he", true];
//다차원 배열
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
let doubleMutiArr = [
    [1, 2, 3],
    [false, true],
];
//--   2. 튜플   --//
//=> 길이와 타입이 고정된 배열
let tup1 = [1, 2];
let tup2 = ["1", 2, false];
//길이가 정해진 배열임에도 불구하고 요소를 더하고 뺴는 함수에 오류가 안남..!
//이럴땐 튜플을 사용하지 않는게 좋을 듯
tup1.push(1);
tup1.pop();
//튜블 사용 예시
//인덱스의 위치에 따가 값을 넣는게 중요할 때 유용함!
const users = [
    ["고시은", 1],
    ["이지수", 2],
    ["이예소", 3],
    ["아무개", 4],
];
export {};
