export default function primitiveSample() {
  console.log('YJU');
  const name: string = 'JIT'; // 형추론으로 인해 let name = 'JIT'으로도 가능
  console.log('primitive sample 1 : ', typeof name, name);
}
