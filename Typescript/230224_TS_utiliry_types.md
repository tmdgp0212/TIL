# TS유틸리티타입

## Partial

- `TYPE`의 모든 속성을 선택적속성(옵셔널 => `?`)으로 변경한 새로운 타입을 반환

- Partial\<TYPE>

```ts
interface IUser {
  name: string,
  age: number
}

const userA: IUser = { //Error
  name: 'A'
}

// Partial<인터페이스> : 해당 인터페이스의 모든 속성값이 옵셔널한 값이 된다
const userB: Partial<IUser> = {
  name: 'B'
}
```

## Required

- `TYPE`의 모든 속성을 필수속성으로 변경한 새로운 타입을 반환

- Requierd\<TYPE>

```ts
interface IUser {
  name?: string,
  age?: number
}

const userA: IUser = {
  name: 'A'
}

const userB: Required<IUser> = { // Error!
  name: 'B'
}
```

## Readonly

- `TYPE`의 모든 속성을 읽기전용속성으로 변경한 새로운 타입을 반환 (수정불가)

```ts
interface IUser {
  name: string,
  age: number
}

const userA: IUser = {
  name: 'A',
  age: 12
}
userA.name = 'AA'

const userB: Readonly<IUser> = {
  name: 'B',
  age: 13
}
userB.name = 'BB' // Error
```

## ReturnType

- 함수 `TYPE`의 반환(Return) 타입을 새로운 타입으로 반환

```ts
function fn(str: string) {
  return str
}

// typeof fn === <x: string>: string
const a:ReturnType<typeof fn> = 'Only string';

const b:ReturnType<typeof fn> = 1234 //Error
```
