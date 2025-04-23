export default function primitiveSample() {
  console.log('YJU');
  const name: string = 'JIT';
  console.log('primitive sample 1 : ', typeof name, name);

  const age: number = 20;
  console.log('primitive sample 2 : ', typeof age, age);

  const isSingle: boolean = true;
  // isSingle  = 'yes'
  console.log('primitive sample 3 : ', typeof isSingle, isSingle);

  const isOver20: boolean = age >= 20;
  console.log('primitive sample 4 : ', typeof isOver20, isOver20);
}
