//--   객체   --//
//1-1.object
let user1 = {
    id: 1,
    name: "sieun",
};
//오류 발생 -> 객체 타입은 타입만 정의할 뿐 id 프로퍼티가 없기 때문..!
//user1.id
//1-2.객체 리터럴 타입
// ts는 구조적 타입 시스템. 즉 프로퍼티를 기준으로 타입을 결정하는 시스템 <-> 명목적 타입 시스템
let user2 = {
    id: 1,
    name: "sieun",
};
console.log(user2.id);
//ex 1
user1 = {
    name: "chloe",
};
//ex 2
let config = {
    apiKey: "MY API KEY",
};
export {};
// config.apiKey = "hack" -> 수정 불가능!
