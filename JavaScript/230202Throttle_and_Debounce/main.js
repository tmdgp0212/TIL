import throttle from "lodash/throttle";
import debounce from "lodash/debounce";


/* 
  Throttle : 일정시간 간격으로 함수를 실행.(실행횟수를 조절)
*/


window.addEventListener('scroll',() => {
  // console.log('scroll'); //스크롤을 할 때마다 너무 많은 함수의 호출이 발생
})


//throwttle(콜백, 시간)
//시간간격에 한번씩만 실행 할 수 있도록 함
window.addEventListener('scroll', throttle(() => {
  console.log('scrolling..')
}, 500))
// 0.5초에 한번씩만 스크롤 이벤트 발생



/* 
  Debounce : 일정시간동안 함수를 호출하지 않으면 함수를 실행합니다
  (마지막에 한번만 실행)
*/

const inputEl = document.querySelector('input')

//debounce(콜백, 시간)
//시간간격동안 함수호출이 없어야 함수 실행
inputEl.addEventListener('input', debounce(() => {
  console.log(inputEl.value);
}, 300))
// 0.3초 동안 함수호출이 없으면 함수실행