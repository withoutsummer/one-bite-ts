/**
 * 타입 스크립트의 클래스
 */

const employee = {
  name: "sieun",
  age: 23,
  posotion: "developer",
  work() {
    console.log("working..");
  },
};

class Employee {
  name: string;
  age: number;
  position: string;

  //생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log("working..");
  }
}

const employeeA = new Employee("chloe", 33, "Director");
console.log(employeeA);

//클래스를 타입으로 사용 가능!
const employeeB: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};

class ExecutiveOfficer extends Employee {
  //필드 추가
  officeNumber: number;

  //생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
