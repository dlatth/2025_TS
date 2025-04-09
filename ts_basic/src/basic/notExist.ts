export default function notExistSample() {
  const name = null;
  console.log('notExistSample 1: ', typeof name, name);

  if (name) {
    console.log('notExistSample 2: ', typeof name, 'my name is ' + name);
  } else {
    console.log('notExistSample 3: ', 'my name is ' + name);
  }

  const age = undefined;
  console.log('notExist sample 4: ', typeof age, age);

  if (age) {
    console.log('notExist sample 5: ', 'my age is ' + age + ' years old.');
  } else {
    console.log('notExist sample 6: ', 'my age is not defined');
  }
}
