// 1. 제네릭을 사용한 수퍼프린트 타입 (void 반환)
type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);

// 2. 제네릭을 사용하여 리턴 값의 타입 지정
type SuperPrint2 = {
  <TypePlaceholder>(arr: TypePlaceholder[]): void;
};

const superPrint2: SuperPrint2 = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint2([1, 2, 3, 4]);
superPrint2([true, false, true]);
superPrint2(['1', '2', '3', '4']);
superPrint2([1, 2, true, false, 'hello']);

// 3. 제네릭을 사용한 수퍼프린트, 수퍼리턴 타입
type SuperPrint3 = { <T>(arr: T[]): void };
type SuperReturn = { <T>(arr: T[]): T };

const superPrint3: SuperPrint3 = (arr) => {
  arr.forEach((i) => console.log(i));
};
const superReturn3: SuperReturn = (arr) => arr[0];

superPrint3([1, 2, false, true]);
console.log(superReturn3([1, 2, 3, 4]));

export default function polymorphismSample() {
  console.log('Polymorphism sample:', {
    superPrint,
    superPrint2,
    superPrint3,
    superReturn3,
  });
}
