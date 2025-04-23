/* import { primitiveSample, notExist, anySample, unknownSample } from './basic';

primitiveSample();
notExist();
anySample();
unknownSample(); */

import {
  /* logMessage, logMessage2, logMessage3, logMessage4, alwaysThrowError */ logMessage5,
} from './function/basic';

/* logMessage('Hello');
logMessage2('Hello');
logMessage3('Hello');
logMessage4('Hello');
alwaysThrowError('Hello TypeScript!'); */

logMessage5('Hello Type Signature!');
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters';

// logMessage('Hello TypeScript!');
isUserSignedIn('ABC', 'Bob');
isUserSignedIn('DEF');
isUserSignedIn2('ABC', 'Bob');

const sum = sumProductsPrice(1000, 2000, 500, 3000, 250);
console.log('Function parameters sample 5: Total price is', sum);
