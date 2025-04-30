export default function objectSample() {
  const a: object = {
    name: 'JapanIT',
    age: 28,
  };

  console.log('Object object sample 1:', a);

  let country: {
    language: string;
    name: string;
  } = {
    language: 'Japanese',
    name: 'Japan',
  };

  console.log('Object object sample 2:', country);

  country = {
    language: 'English',
    name: 'United States of America',
  };

  console.log('Object object sample 3:', country);

  const jit: {
    age: number;
    lastName: string;
    readonly firstName: string;
    gender?: string;
  } = {
    age: 28,
    lastName: 'Lee',
    firstName: 'YoungJin',
  };

  jit.lastName = 'LIM';
  jit.gender = 'female';

  console.log('Object object sample 4:', jit);

  const capitals: {
    [countryName: string]: string;
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  };
  capitals.China = 'Beijing';
  capitals.Canada = 'Ottawa';

  console.log('Object object sample 5:', capitals);
}
