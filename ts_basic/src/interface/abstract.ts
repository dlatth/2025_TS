export default function abstractSample() {
  abstract class User {
    constructor(protected firstName: string, protected lastName: string) {}

    abstract sayHi(name: string): string;
    abstract fullName(): string;
  }

  class Player extends User {
    sayHi(name: string) {
      return `Hello ${name} ${this.fullName()}`;
    }

    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  console.log(Player);

  interface User2 {
    firstName: string;
    lastName: string;
    sayHi(name: string): string;
  }

  class Player2 implements User2 {
    constructor(public firstName: string, public lastName: string) {}

    sayHi(name: string) {
      return `Hello ${name}`;
    }
  }

  const player2 = new Player2('Soyeon', 'Lim');
  console.log(player2.sayHi('dlatth'));
}
