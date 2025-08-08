//스코프 내에서는 동일 타입 별칭 선언 불가능!
//함수 내에 정의된 동일 이름의 타입 별칭 선언은 가능! 함수 내에서는 함수 내에서 선언된 타입 별칭을 사용하게 되는 것.
function func() {
}
let user1 = {
    id: 2,
    name: "chloe",
    nickname: "withoutsummer",
    birth: "2003.01.19",
    bio: "hi",
    location: "경기도 고양시 일산",
};
let user2 = {
    id: 9,
    name: "jisoo",
    nickname: "winter",
    birth: "2002.10.19",
    bio: "hehe",
    location: "경기도 고양시 일산",
};
let countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
let countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};
export {};
