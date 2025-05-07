export default function tupleSample() {
  const response: [number, string] = [200, 'OK'];
  console.log('tupleSample 1:', response);

  const band: [string, ...string[]] = ['Mrs.Green Apple', '緑黄色社会', 'NovelBright'];
  band.push('SPYAIR');
  console.log('tupleSample 2:', band);
}
