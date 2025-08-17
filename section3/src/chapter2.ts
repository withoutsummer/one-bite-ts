// Unknown 타입

function unknownExam() {
  //업캐스팅으로 가능함
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  //다운캐스팅으로 불가능
  let unknownVar: unknown;
  //let num: number = unknownVar;
}

//Never 타입 -> 모든 집합의 부분 집합(공집합)
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업캐스팅으로 가능
  let num: number = neverFunc();
}

//Void 타입
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}

//Any 타입
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let neverVar: never;

  anyVar = unknownVar;

  // any도 never 타입으로는 다운 캐스팅이 불가능
  // neverVar = anyVar;
}
