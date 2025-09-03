/**
 * 인터페이스와 클래스
 */

interface CharactoerInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// Character클래스는 CharactoerInterface를 구현한다!
// -> 즉, CharactoerInterface는 클래스의 설계도 역할
class Character implements CharactoerInterface {
  //   name: string;
  //   moveSpeed: number;

  // 인터페이스로 정의하는 필드는 무조건 public임! 그 이외는 불가능
  constructor(public name: string, public moveSpeed: number) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동 중!`);
  }
}
