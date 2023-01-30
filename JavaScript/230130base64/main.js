const fileEl = document.querySelector('input[type="file"]')

fileEl.addEventListener('change', (e) => {
  const file = e.target.files[0] // files = 받은 파일이 유사배열로 들어옴
  console.log(file) 
  
  //받은 파일정보를 문자화 하는것이 base64
  const reader = new FileReader()
  reader.readAsDataURL(file)

  //FileRead에 응답시간 지연이 있기때문에 load이벤트 함수로 비동기처리
  reader.addEventListener('load', (event) => {
    //문자형태의 이미지파일
    console.log(event.target.result)

    //이미지src속성으로 base64코드를 보내도 이미지출력이 가능
    //base64코드를 서버로 전송해 링크를 생성해 반환
    const imgEl = document.createElement('img')
    imgEl.src = event.target.result //base64
    document.body.append(imgEl)
  })
})