/**
 * 클래스 -> 객체를 만들어주는 틀
 */

//필드 = 클래스가 만들어 낼 객체의 프로퍼티
class Student {
  //필드 설정
  name;
  grade;
  age;

  //생성자 -> 클래스를 호출하면 실제로 객체를 생성해주는 메서드
  constructor(name, grade, age) {
    //this는 이 클래스가 지금 만들고 있는 객체를 의미 -> 해당 객체의 프로퍼티를 설정
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  //메서드 생성
  study() {
    console.log("study hard!");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name}입니다.`);
  }
}

//인스턴스 = 클래스를 이용해서 만든 객체
//새로운 객체 생성 -> 인수도 함께 전달
//studentC 인스턴스라고도 부름!
let studentC = new Student("chloe", "A", 23);
console.log(studentC);
studentC.introduce();

class StudentDeveloper extends Student {
  //필드는 Student 그대로
  //   name;
  //   grade;
  //   age;

  favoriteSkill;

  //생성자
  constructor(name, grade, age, favoriteSkill) {
    // this.name = name;
    // this.grade = grade;
    // this.age = age;
    super(name, grade, age); //super()호출 시, 부모(슈퍼) 클래스의 생성자가 호출되게 됨!
    this.favoriteSkill = favoriteSkill;
  }

  //메서드
  study() {
    console.log("study hard!");
  }
  introduce() {
    console.log(`안녕하세요 ${this.name}입니다.`);
  }
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍을 하고 있습니다!`);
  }
}

let studentD = new StudentDeveloper("sieun", "B+", 25, "TypeScript");
studentD.programming();

//-----------------------------------------------//
let studentA = {
  name: "chloe",
  grade: "A+",
  age: 23,
  study() {
    console.log("study hard!");
  },
  introduce() {
    console.log("helloo!!");
  },
};

let studentB = {
  name: "suji",
  grade: "B+",
  age: 33,
  study() {
    console.log("study hard!");
  },
  introduce() {
    console.log("helloo!!");
  },
};
