//--   1. 타입 별칭   --//
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

//스코프 내에서는 동일 타입 별칭 선언 불가능!
//함수 내에 정의된 동일 이름의 타입 별칭 선언은 가능! 함수 내에서는 함수 내에서 선언된 타입 별칭을 사용하게 되는 것.
function func() {
  type User = {};
}

let user1: User = {
  id: 2,
  name: "chloe",
  nickname: "withoutsummer",
  birth: "2003.01.19",
  bio: "hi",
  location: "경기도 고양시 일산",
};

let user2: User = {
  id: 9,
  name: "jisoo",
  nickname: "winter",
  birth: "2002.10.19",
  bio: "hehe",
  location: "경기도 고양시 일산",
};

//--   2. 인덱스 시그니처   --//
//=> 키와 값의 공통된 규칙을 기준으로 객체의 타입을 정의할 수 있는 문법
type CountryCodes = {
  //키 : value의 타입
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumebrCodes = {
  [key: string]: number;
  //반드시 있어야 하는 프로퍼티를 추가할 수 있음!
  //-> 이때, 인덱스 시그니처에서의 값의 타입과 동일하지 않으면 오류 발생!
  Korea: number;
};

let countryNumberCodes: CountryNumebrCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
