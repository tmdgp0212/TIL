# React


## React 시작하기

> 기존 리액트 프로젝트 생성법
> `npm create react-app (앱이름)`
> 
> 개선된 프로젝트 생성법
> `npm create vite (앱이름) --template react`
>
> vite는 esbuild 라는 번들러를 사용해서, 기존의 리액트 번들러보다 100배 빠른 빌드속도를 제공
>
> <img width="770" alt="Screenshot_2023-02-06_at_9 23 44_PM" src="https://user-images.githubusercontent.com/112364408/221477477-5eca8935-86d9-439c-b32e-d95a4ae47a39.png">


1. `$npm i -g yarn`

2. `$yarn create vite (앱이름) --template react`
- 리액트 기본구조생성

3. `yarn`
- yarn.lock , node_modules 생성

4. `yarn dev`
- 프로젝트 실행

> vscode의 확장팩인 `ES7+ React/Redux/React-Native snippets`를 설치하면
> 리액트의 골격생성에 도움이 됨  
> => 파일생성 후 rfce + 엔터    
=> 파일명과 일치하는 이름의 기본 함수형 골격생성