# 인터페이스 Interface

- 타입스크립트에서 객체를 정의하는 일종의 규칙

```ts
interface User {
  name: string
  age: number
  isValid: boolean
}

const heropy: User = {
  name: 'heropy',
  age: 16,
  isValid: false
}

//Error - isValid 속성이 User에 선언되어있으나 사용되지 않음
const Neo: User = { 
  name: 'Neo',
  age: 22,
}
```

- 선택적(옵셔널) 속성 `?` 

```ts
interface User {
  name: string
  age: number
  isValid?: boolean
}

const heropy: User = { // 옵셔널타입으로 지정한 isValid는 사용되지 않아도 에러가 나지 않음
  name: 'heropy',
  age: 16,
}
``` 

## 읽기전용 속성

```ts
interface User {
  readonly name: string
  age: number 
}

const heropy:User = {
  name: 'heropy'
  age: 85
}

heropy.name = 'HEROPY' //Error! 읽기전용 속성에 값을 할당할 수 없다
```

- 모든 속성이 읽기전용일 때

```ts
interface User {
  readonly name: string
  age: number 
}

const heropy: Readonly<User> = {
  name: 'heropy'
  age: 85
}

heropy.name = 'HEROPY' //Error!
```

혹은

```ts
const user = {
  name: 'heropy',
  age: 85
} as const

heropy.name = 'HEROPY' //Error!
```

## 꿀팁 !✔️

- 아래와같이 데이터의 구조가 복잡해지는 경우 일일히 작성하기 어려움

- 콘솔상의 데이터에 우클릭하여 object 복사 =>
- https://transform.tools/json-to-typescript
- 혹은 https://app.quicktype.io/?l=ts
- 에 붙여넣으면 interface를 자동으로 생성해줌 !

- 인터페이스는 파일을 분리하여 모듈화해서 사용 할 수 있음

> JS파일을 TS에 import하는 경우 JS파일에는 타입이 지정되어있지 않기 때문에 JS파일.d.ts 파일을 추가로 생성하여 import해야함                  

```ts
interface Movie {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

interface Res {
  Response: string
  Search: Movie[]
  totalResults: string
}

async function() {
  const res = await fetch('https://www.omdbapi.com/?s=frozen&apikey=7035c60c')
  const json = await res.json()
  console.log(json)
}
```

## 함수타입

- 함수 타입을 인터페이스로 정의하는 경우, 호출 시그니처(Call signature)를 사용

```ts
interface User {
  (매개변수: 변수타입): 반환타입 // call signature
}
```
```ts
interface AddFn {
  (a: number, b: number): number
}

const a:AddFn = (a, b) => a + b
```


## 클래스타입

- 클래스에 interface로 타입을 지정하는 경우 `implements`라는 키워드가 사용된다

```ts
interface UserInterface {
  name: string
  getName(): string
}

class User implements UserInterface {
  public name

  constructor(n: string) {
    this.name = n
  }

  getName() {
    return this.name
  }
}
```

## 인덱싱 가능 타입

- 수많은 속성을 가지거나 단언할 수 없는 임의의 속성이 포함되는 구조에서는 인덱스 시그니처(Index signature)를 사용할 수 있다

