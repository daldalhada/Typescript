# Typescript
learn Typescript

* Environment

    - Node.js: 14.15.4(LTS)
    - OS: Window10
    - Express: 4.17.1
    - MySQL: 8.0.21
    - MongoDB: 4.4.3

***

<br>

### 1. Typescript
  - Javascript의 superset
  - 프로그래밍 언어인데 Javascript 처럼 생김
  - 컴파일하면 Javscript로 컴파일
  - 왜 사용할까? Javascript가 가지고 있지 않은 멋진 규칙들을 가지고 있음
  - Javascript는 엄격한 규칙이 없고 사용하기 쉽고 원하는 방향으로 수정이 가능함
  - 하지만, 이 특징은 큰 프로젝트를 한다거나 팀으로 일을 한다거나 버그를 최소화하고 싶을 때에는 단점이 됨
  - 즉, 언어가 예측 가능하고 읽기 쉬운 코드로 만들어주는 등 Javascript를 더 잘 사용할 수 있게 해줌


### 2. package.json
  - yarn init 명령어를 통해 package.json 생성
  - yarn-error.log 파일도 같이 생성됨


### 3. Typescript 세팅
  - yarn global add typescript 실행
  - tsconfig.json 파일 생성
  - 이 파일은 Typescript에게 어떻게 Javascript로 변환하는지 옵션을 줘서 알려줌

```JSON

{
    "compilerOptions": {
      "module": "commonjs",
      "target": "ES2015",
      "sourceMap": true,
      "outDir": "dist"
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
}

```

  - target: 어떤 버전의 Javascript로 컴파일 되고 싶은지 
  - sourceMap: sourceMap 처리를 하고싶은지 
  - include: 컴파일 과정에서 포함할 파일의 배열


### 4. 컴파일

```JSON

// package.json
"scripts": {
    "start": "node ./dist/index.js",
    "prestart": "tsc"
}

```

  - Node.js는 TypeScript를 이해하지 못하기 때문에 index.ts를 index.js로 컴파일하는 작업이 필요
  - tsc 혹은 npx tsc 명령어를 실행. 이는, 컴파일해서 index.js랑 index.js.map을 만들어 줌
  - package.json을 다음과 같이 수행 후 yarn start 명령어 실행 


### 5. 예제

```typescript

const nick = "daldahada",
    age = 24,
    gender = "male";

// const printing = (name , age, gender) => {
//     console.log(`nick: ${nick}, age: ${age}, gender: ${gender}`);
// };

const printing = (name , age, gender?) => {
    console.log(`nick: ${nick}, age: ${age}, gender: ${gender}`);
};

printing(nick, age)           // error
printing(nick, age, gender);

export {};

```

  - printing(nick, age)를 실행하면 javascript에서는 실행 되지만 typescript에서는 error가 남
  - 이는 코드량이 많아질수록 실수를 잡아주는 중요한 역할을 함
  - printing(nick, age)를 실행하고 싶으면 함수 선언시 gender?를 붙여 gender 파라미터를 선택적이게 선언