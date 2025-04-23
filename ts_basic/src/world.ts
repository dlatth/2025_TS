export default class World {
  message: string;

  constructor(message: string) {
    // 생성자(초기화)
    this.message = message;
  }

  // 외부에서 호출할 수 있는 메소드 정의
  public sayHello(elem: HTMLElement | null) {
    if (elem) {
      elem.innerText = this.message;
    }
  }
}
