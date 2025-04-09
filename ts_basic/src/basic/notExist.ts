export default function notExistSample() {
  const name = null;
  console.log('notExistSample 1: ', typeof name, name);

  // name = 'JIT'; // 주석을 빼고도 테스트 실행
  if (name) {
    console.log('notExistSample 2: ', typeof name, 'my name is ' + name);
  } else {
    console.log('notExistSample 3: ', 'my name is ' + name);
  }
}
