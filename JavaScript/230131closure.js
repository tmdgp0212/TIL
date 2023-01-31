//closure : 함수가 선언 될 때의 유효범위를 기억하고 있다가, 함수가 외부에서 호출 될 때 그 유효범위의 특정 변수를 참조 할 수 있음

function createCount() {
  let a = 0

  return function add () {
    return a += 1
  }
}

const count = createCount()

console.log(count()) //1
console.log(count()) //2
console.log(count()) //3

/*

  count()는 add()를 반환
  결국 count()는 add()
  add()는 선언당시의 유효범위를 기억하기에 let a 를 참조 할 수 있음

  함수내부 변수( let a ) 의 값은 초기와 되지 않고 누적 됨. 

 */

function createBoolean() {
  let boolean = false;

  return function toggle() {
    return boolean = !boolean
  }
}

const toggleBoolean = createBoolean()

console.log(toggleBoolean()) //true
console.log(toggleBoolean()) //false
console.log(toggleBoolean()) //true
console.log(toggleBoolean()) //false