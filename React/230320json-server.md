# Json Server

## RDB

rdb란 relational database. 관계형 데이터베이스

db내부에서 데이터를 저장하는 공간은 `테이블`이라고 함

> 비유하자면 db는 엑셀파일 테이블은 엑셀 시트
> 시트를 여러개 만들 수 있듯이 테이블은 여러개일 수 있다 

테이블이 아래와 같이 생겼다고 생각해본다면, 각각의 열은 attribute 혹은 field라고 한다

`post테이블`
id | title | body | userId
--| --| --| --
1 | 제목1 | 내용1 | 1
2 | 제목2 | 내용2 | 2

`user테이블`
id | name | password
--| --| --
1 | 김아무개 | 1234
2 | 박아무개 | abcd

두 테이블을 함께 본다면 id가 1인 글의 작성자 ID는 1이므로, 유저아이디가 1인 김아무개가 쓴 글임을 확인 할 수 있다.

이렇게 테이블을 서로 연결짓는 필드를 `foreign key`

그리고 이렇게 id로 특정한 유저를 구분짓기 위해서는 , 해당 id 가 unique 해야 함.
그래서 이렇게 각 테이블마다 존재하는 unique 한 id 를 `primary key`

## JWT

- `jwt`는 json web token

- 특정한 json데이터에 대해 암호화를 하여 유저의 인증정보로 사용하는 것

- 아래와 같은 모양
`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pbHNvbkBlbWFpbC5jb20iLCJwYXNzd29yZCI6Im5pbHNvbiIsImlhdCI6MTY2MDExMDg0NSwiZXhwIjoxNjYwMTE0NDQ1fQ.SHB0bs4GOxZwyTDMzjJGw0BVLYWr8Q4UsdibJtj54d0`

> 암호화 된 jwt 판독 사이트 https://jwt.io/

- 토큰에는 유저정보와 함께 토큰의 만료기간이 담겨있음
=> 유저 로그인정보가 담긴 토큰의 경우 해당 토큰이 만료되기 전까지 로그인을 유지하도록 할 수 있음

1. **이 사람이 이 페이지를 방문할 수 있는 사람인지, 혹은 이 기능을 실행해도 되는 사람인지 확인**

2. **token 의 기간이 만료되면 재발급되기 전까지는 해당 기능을 사용할 수 없음**


### **Access Token 과 Refresh Token**

jwt 인증 방식의 경우 보안을 위해서 두 가지 토큰을 함께 사용

- **Access Token : 말그대로 요청을 보낼 때 (접근할 때) 사용하는 토큰**
  - 프론트엔드에서 접근 할 수 있도록 설정
  - access토큰이 탈취(해킹)당해도 문제가 없도록 만료시간을 짧게 설정
  - 해당토큰이 만료되면 refresh token을 활용하여 재발급 되도록 함

- **Refresh Token : access token 을 재발급받을 때 사용하는 토큰**
  - 프론트에서 접근이 불가능하도록 httpOnly쿠키로 설정
  - 만료시간을 길게 설정하여 access token이 만료 될 경우 재발급을 도움