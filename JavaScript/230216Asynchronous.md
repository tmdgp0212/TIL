# 동기와 비동기

- 동기 : 순차적으로 코드실행
- 비동기 : 비순차적으로 코드실행

  - 비동기 예시 : 
  `setTimeout()`, `addEventListener()` 등.. 코드의 작성순서를 무시하는 코드


## Promise
  ```js
    function numPlusOne(num){
      // Promise앞 return키워드 필수
      return new Promise((resolve, reject) => {

        // reject는 에러, 거부
        if(typeof num !== 'number') {
          reject(new Error('매개변수로 숫자를 입력해주세요'))
          return;
        }

        // resolve는 로직 종료, 매개변수 값은 결과값 반환
        resolve(num + 1)
      })
    }
  ```
  - 비동기 대표 `new Promise()`앞에는 `return` 키워드 필수
  - `Promise`의 결과값은 `resolve()`에 인자로 할당
  - `Promise`의 함수중단(거부,에러)는 `reject()` 
  - `reject(new Error('에러메세지'))`로 에러메세지 전달가능
  - `reject`시 아래 로직으로 접근하지않도록 `return` 필수


## try catch finally

- 에러발생시 런타임이 다운되지 않도록 에러를 캐치하여 로직 수행

```js
  try {
    // 일반로직
  } catch (err) {
    //에러발생 시 실행로직
    console.log(err)
  } finally {
    // 에러가 있거나, 없거나 상관없이 실행 될 로직
  }
```

- 위 `Promise()` 예제의 `umPlusOne(num)` 실행 시 아래와 같이 try, catch 시도
```js
  async function wrap() {
    try {
      const num = await numPlusOne(1)
      console.log(num) // 2
    } catch (err) {
      console.log(err) // 에러 시 에러코드 반환
    } finally {
      console.log('실행완료') // 무조건 실행
    }
  }

  wrap();
```

## 반복문에서의 비동기 처리

```js
function getMovies() {
  fetch('https://~~~~')
  .then(res => json())
  .then(res => resolve(res))
}

const titles = ['frozen', 'avengers', 'avatar']

//잘못된방법
//forEach는 호출의 순서는 보장해주지만 응답을 기다려주진 않는다
titles.forEach( async(title) => {
  const movies = await getMovies(title)
  console.log(title, movies)
})

//올바른방법
//일반포문은 promise객체의 응답을 기다렸다가 다음 반복문을 호출
const wrap = async () => {
  for (const title of titles) {
    const movies = await getMovies(title)
    console.log(title, movies)
  }
}
```


## promise.all()

- 여러개의 프로미스객체를 배열로 넣어 모든 요청에 응답이 온 다음에 결과값을 반환하도록 함   
`@returns {Array}`

```js
  const a = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(1)
      }, 1000)
    })
  }
  const b = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2)
      }, 2000)
    })
  }

  const wrap = async () => {
    const [resA, resB] = await Promise.all([a(), b()])
    console.log(resA, resB)
  }
  wrap()
```

## Promise.race()

- 여러개의 프로미스객체 중 더 먼저 완료되는 결과만 이행/거부 합니다.

```js
  const a = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(1)
      }, 1000)
    })
  }
  const b = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2)
      }, 2000)
    })
  }

  const wrap = async () => {
    const res = await Promise.race([a(), b()])
    console.log(res) // 1
  }
  wrap()
```