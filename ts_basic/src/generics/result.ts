type Print = <T, M>(arr: T[], b: M) => T;
const arrFunc: Print = (arr) => arr[0];

function arrFunc3<V>(arr: V[]) {
  return arr[0];
}

const arrFunc2 = <V>(arr: V[]) => arr[0];

const a = arrFunc2([1, 2, 3, 4]);
const b = arrFunc3(['1', '2', '3', '4']);
const c = arrFunc([true, false, true], true);
const d = arrFunc([1, 2, '3', false], {});

type Player<E> = {
  name: string;
  extraInfo: E;
};

const jit: Player<{ favFood: string }> = {
  name: 'jit',
  extraInfo: {
    favFood: 'pasta',
  },
};

type JitPlayer2 = Player<{ favFood: string }>;
const jit2: JitPlayer2 = {
  name: 'jit2',
  extraInfo: {
    favFood: 'pasta',
  },
};

type JitExtra = { favFood: string };
type JitPlayer3 = Player<JitExtra>;
const jit3: JitPlayer3 = {
  name: 'jit3',
  extraInfo: {
    favFood: 'pasta',
  },
};

type JitExtra4 = { favFood: string };
type JitPlayer4 = Player<JitExtra4>;
const jit4: JitPlayer4 = {
  name: 'jit4',
  extraInfo: {
    favFood: 'pasta',
  },
};

const lynn: Player<null> = {
  name: 'lynn',
  extraInfo: null,
};

/* type A = Array<number>;
let a: A = [1, 2, 3]; */
/* function printAllNumbers(arr: Array<number>) {}

const [state, setState] = useState<number>(); */

export default function resultSample() {
  console.log('Result sample:', {
    a,
    b,
    c,
    d,
    jit,
    jit2,
    jit3,
    jit4,
    lynn,
  });
}
