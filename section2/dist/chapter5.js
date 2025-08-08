//--   enum 타입   --//
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입 -> 컴파일해도 사라지지 않음!
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["QUEST"] = 3] = "QUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "chloe",
    role: Role.ADMIN, // 0 <- 관리자
    language: Language.korean,
};
const user2 = {
    name: "jisoo",
    role: Role.QUEST, // 1 <- 일반 유저
};
const user3 = {
    name: "sieun",
    role: Role.USER, // 3 <- 게스트
};
export {};
