import { Player2 } from './abstract';

export default function storageSample() {
  interface StorageInterface<T> {
    [key: string]: T;
  }

  // LocalStorage 클래스 구현
  class LocalStorage<T> {
    private storage: StorageInterface<T> = {};

    // 데이터 저장
    set(key: string, value: T): void {
      if (this.storage[key]) {
        console.log(`경고: ${key}는 이미 존재합니다. update() 메서드를 사용하세요.`);
        return;
      }
      this.storage[key] = value;
      console.log(`저장 완료: ${key} = ${value}`);
    }

    // 데이터 조회
    get(key: string): T | undefined {
      if (!this.storage[key]) {
        console.log(`경고: ${key}를 찾을 수 없습니다.`);
        return undefined;
      }
      return this.storage[key];
    }

    // 데이터 수정
    update(key: string, value: T): void {
      if (!this.storage[key]) {
        console.log(`경고: ${key}가 존재하지 않아 새로 생성합니다.`);
      }
      this.storage[key] = value;
      console.log(`수정 완료: ${key} = ${value}`);
    }

    // 데이터 삭제
    remove(key: string): void {
      if (!this.storage[key]) {
        console.log(`경고: ${key}가 존재하지 않습니다.`);
        return;
      }
      delete this.storage[key];
      console.log(`삭제 완료: ${key}`);
    }

    // 전체 데이터 삭제
    clear(): void {
      this.storage = {};
      console.log('모든 데이터가 삭제되었습니다.');
    }
  }

  // 사용 예시
  const stringStorage = new LocalStorage<string>();
  const numberStorage = new LocalStorage<number>();

  // 문자열 저장소 테스트
  console.log('=== 문자열 저장소 테스트 ===');
  stringStorage.set('name', 'Soyeon');
  stringStorage.set('city', 'Daegu');
  console.log(stringStorage.get('name'));
  stringStorage.update('name', 'Lim');
  console.log(stringStorage.get('name'));
  stringStorage.remove('city');
  stringStorage.clear();

  // 숫자 저장소 테스트
  console.log('\n=== 숫자 저장소 테스트 ===');
  numberStorage.set('age', 23);
  numberStorage.set('score', 95);
  console.log(numberStorage.get('age'));
  numberStorage.update('score', 100);
  console.log(numberStorage.get('score'));
  numberStorage.remove('age');
  numberStorage.clear();

  const playerStorage = new LocalStorage<Player2>();
  // Player2 객체 저장소 테스트
  console.log('\n=== Player2 객체 저장소 테스트 ===');

  const player1 = new Player2('Soyeon', 'Lim');
  const player2 = new Player2('Kim', 'Min');

  playerStorage.set('player1', player1);
  playerStorage.set('player2', player2);

  const retrievedPlayer1 = playerStorage.get('player1');
  console.log(retrievedPlayer1);
  if (retrievedPlayer1) {
    console.log(retrievedPlayer1.sayHi('안녕하세요'));
  }

  playerStorage.update('player1', new Player2('Soyeon', 'Lim'));
  console.log(playerStorage.get('player1'));
  const updatedPlayer1 = playerStorage.get('player1');
  if (updatedPlayer1) {
    console.log(updatedPlayer1.sayHi('반갑습니다'));
  }

  playerStorage.remove('player2');
  playerStorage.clear();
}
