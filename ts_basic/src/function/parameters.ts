export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 1: User is signed in! Username is', username);
    return true;
  } else {
    console.log('Function parameters sample 2: User is not signed in');
    return false;
  }
};

export const isUserSignedIn2 = (userId: string, username: 'NO NAME' | string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 3: User is signed in! Username is', username);
    return true;
  } else {
    console.log('Function parameters sample 4: User is not signed in');
    return false;
  }
};

export const sumProductsPrice = (...products: number[]): number => {
  return products.reduce((prevTotal, productPrice) => {
    return prevTotal + productPrice;
  }, 0);
};
