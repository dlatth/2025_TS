export default function arraySample() {
  const colors: string[] = ['red', 'blue', 'green'];
  colors.push('yellow');
  console.log('Array array sample 1:', colors);

  const even: Array<number> = [2, 4, 6];
  even.push(8);
  console.log('Array array sample 2:', even);

  const ids: (string | number)[] = ['ABC', 123];
  ids.push('DEF');
  console.log('Array array sample 3:', ids);

  const generateArray = () => {
    const _someArray = [];
    _someArray.push(123);
    _someArray.push('Chicken');

    return _someArray;
  };

  const _someArray = generateArray();
  console.log('Array array sample 4:', _someArray);

  const commands: readonly string[] = ['git add', 'git commit', 'git push'];
  console.log('Array array sample 5:', commands);

  const immutableNumbers: ReadonlyArray<number> = [1, 2, 3];
  console.log('Array array sample 6:', immutableNumbers);

  // const immutableNames: Readonly<string[]> = ['Lim', 'Kim', 'Park'];
  // immutableNames.push('Choi');
}
