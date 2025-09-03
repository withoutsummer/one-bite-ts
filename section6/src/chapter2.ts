/**
 * 접근 제어자 => 필드나 메소드에 접근할 수 있는 범위를 제한할 수 있는 문법
 * access modifier
 */

class Employee {
  //필드
  private name: string;
  protected age: number;
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

const employee = new Employee("sieun", 23, "developer");
// employee.name -> 클래스 외부에서 name에 접근 및 읽기도 불가능!

console.log(employee);

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

  // func(){this.name} -> private은 파생 클래스에서도 접근이 불가능!
  func() {
    this.age; //protected는 접근 가능!
  }
}
