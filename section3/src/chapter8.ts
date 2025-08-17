/**
 * 서로소 유니온 타입 : 교집합이 없는 타입들로만 만든 유니온 타입
 * ex) string과 number로 되어 있는 유니온 타입
 */

type Admin = {
  //string 리터럴 타입인 tag를 추가함으로써 서로소를 만들어줌!
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      break;
    }
  }

  // 기존 코드(tag 파라미터 추가 전)는 비직관적
  // -> 타입을 확인해야하지만 다른 사람이 코드를 이해할 수 있슴!
  //   if (user.tag === "ADMIN") {
  //     //admin
  //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  //   } else if ("point" in user) {
  //     //mem
  //     console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  //   } else {
  //     //guest
  //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  //   }
}

/**
 * 사례 2 : 비동기 작업의 결과를 처리하는 객체
 */

// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   success?: {
//     data: string;
//   };
// };

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      console.log(`에러 발생 : ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
}

const loading = {
  state: "LOADING",
};

const failed = {
  state: "FAILED",
  error: {
    message: "데이터 요청 실패",
  },
};

const success = {
  state: "SUCCESS",
  response: {
    data: "공공 데이터",
  },
};
