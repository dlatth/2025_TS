import World from './world'; // webpack.config.js파일의 resolve 설정에 따라 ts 생략 가능
const root: HTMLElement | null = document.getElementById('root');
const world = new World('Hello World!!!');
world.sayHello(root);
