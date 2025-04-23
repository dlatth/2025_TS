const path = require('path');
module.exports = {
  // entry
  // 모듈 핸들러를 실행하는 시작점이 되는 파일 지정
  // 지정가능한 타입: 문자열(파일명), 배열 또는 객체(파일명 리스트)
  // 아래는 객체를 지정한 예시
  entry: {
    bundle: './src/index.ts',
  },
  // output
  // 모듈 핸들러를 실행한 결과를 출력하는 폴더나 파일명 지정
  output: {
    path: path.join(__dirname, 'dist'), // __dirname: js 파일이 저장되어 있는 디렉토리(폴더)
    filename: '[name].js', // [name]: entry에서 지정한 key값(이 설정에서는 bundle）
  },
  // resolve
  // import문에서 파일 확장자를 입력하지 않아도 가능하게 설정
  // 예) import World from './world'와 같이 작성해도 "world.ts"라는 파일명의 모듈을 탐색
  resolve: {
    extensions: ['.ts', '.js'], // React에서.tsx나.jsx의 확장자를 사용하고자 하면 배열에 추가하면 됨
  },
  devServer: {
    // contentBase: path.join(__dirname, "dist"), // webpack-dev-server에서 사용하는 공개 폴더명 지정
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    open: true, // 서버 시작시 브라우저를 열기 지정
  },
  // module
  // 모듈에 적용할 규칙을 설정(로더 설정이 대부분)
  module: {
    rules: [
      {
        // 확장자가 .ts인 파일에 대해 TypeScript 컴파일을 적용
        // React의 .tsx 파일도 적용시키려면 test:/\.(ts|tsx)$/, 으로 지정
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
};
