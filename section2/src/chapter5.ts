//--   enum 타입   --//
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입 -> 컴파일해도 사라지지 않음!
enum Role {
  ADMIN = 0, //숫자 할당을 제거해도 알아서 숫자를 지정해줌!
  USER = 1,
  QUEST = 3,
}

enum Language {
  korean = "ko",
  english = "en",
}

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
