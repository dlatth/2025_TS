export default function primitiveSample() {
  console.log('YJU');
  const name: string = 'JIT'; // 형추론으로 인해 let name = 'JIT'으로도 가능
  // name = 123 // 타입 체크로 에러 발생
  console.log('primitive sample 1 : ', typeof name, name);

  const age: number = 20;
  console.log('primitive sample 2 : ', typeof age, age);

  const isSingle: boolean = true;
  // isSingle  = 'yes'
  console.log('primitive sample 3 : ', typeof isSingle, isSingle);

  const isOver20: boolean = age >= 20;
  console.log('primitive sample 4 : ', typeof isOver20, isOver20);
}
