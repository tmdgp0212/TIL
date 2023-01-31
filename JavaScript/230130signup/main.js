const idEl = document.querySelector('.id')
const passwordEl = document.querySelector('.password')
const nameEl = document.querySelector('.name')
const profileEl = document.querySelector('.profile')
const submitEl = document.querySelector('.signup')
const authorEl = document.querySelector('.author')

let id = ''
let password = ''
let dpName = ''
let profile = ''


idEl.addEventListener('input',event => {
  id = event.target.value
})

passwordEl.addEventListener('input',event => {
  password = event.target.value
})

nameEl.addEventListener('input',event => {
  dpName = event.target.value
})

profileEl.addEventListener('change', (e) => {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)

  //FileRead에 응답시간 지연이 있기때문에 load이벤트 함수로 비동기처리
  reader.addEventListener('load', (event) => {
    profile = event.target.result //base64
  })
})

submitEl.addEventListener('click',() => {
  request({
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup",
    method: 'POST',
    data: {
      email: id,
      password,
      displayName: dpName,
      profileImgBase64: profile
    }
  })
})


let accessToken = ''

authorEl.addEventListener('click', () => {
  request({
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/me",
    method: "POST",
    headers:{
      Authorizatoin: `Bearer ${accessToken}`
    }

  })
})

async function request(options) {
  const defaultOptions = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "apikey": "FcKdtJs202301",
      "username": "KDT0_Team0"
    },
  }
  const res = await fetch(options.url,{
    method: options.method || defaultOptions.method,
    headers: options.headers || defaultOptions.headers,
    body: JSON.stringify(options.data)
  })

  const json = res.json()
  console.log(json)
}