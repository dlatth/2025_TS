export default function genericsSample() {
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      result += item;
    }
    return result;
  };
  console.log('Generics sample 1:', stringReduce(['January ', 'February ', 'March '], 'Months:'));

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      result += item;
    }
    return result;
  };
  console.log('Generics sample 2:', numberReduce([1, 2, 3, 4, 5], 0));
}

/* type Reduce = {
  (array: string[], initialValue: string): string;
  (array: number[], initialValue: number): number;
}; */

type GenericReduce<T> = {
  (array: T[], initialValue: T): T;
};

const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
  let result = initialValue;
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    result += item;
  }
  return result;
};
console.log('Generics sample 3:', genericStringReduce(['Pasta ', 'Pizza ', 'Risotto '], 'Menu:'));

const genericNumberReduce: GenericReduce<number> = (array, initialValue) => {
  let result = initialValue;
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    result += item;
  }
  return result;
};
console.log('Generics sample 4:', genericNumberReduce([-1, -2, -3, -4, -5], 0));

const genericTestNumber = (array: number[], initialValue: number): number => {
  let result = initialValue;
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    result += item;
  }
  return result;
};
console.log('Generics sample 5:', genericTestNumber([-45, 37, 11, -6, 56], 0));

/* type GenericReduce2 = {
  <T>(array: T[], initialValue: T): T;
  <U>(array: U[], initialValue: U): U;
};

type GenericReduce3<T> = (array: T[], initialValue: T) => T;

type GenericReduce4 = (<T>(array: T[], initialValue: T) => T) | (<U>(array: U[], initialValue: U) => U);
 */
