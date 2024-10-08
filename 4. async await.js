// promise

const token = Math.floor(Math.random() * 12345678);

const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username) {
  console.log("processing user now..");
  return new Promise((success, failed) => { 
    setTimeout(() => {
      if(username != "zale") failed ("sorry wrong data!")
        success({token})
    }, 200); 
  })
}

function getUser(token) {
  console.log("processing api now..");
  return new Promise((success, failed)=> {
    if (!token) failed ("sorry, no token cannt acces")
    if (token)
      setTimeout(() => {
        success({ apiKey: "xkey123" }); 
      }, 300);

  })
}

function getPictures(apiKey) {
  console.log("processing pictures now..");
  return new Promise((success, failed) => {
    if (!apiKey) failed ("no apiket, cannot acces!")
      setTimeout(() => {
        success({pict : pictures});
      }, 1500);

  })
}

async function UserDisplay () {
  try {

    const {token} = await login("zale")
    const {apiKey} = await getUser(token) 
    const {pict} = await getPictures(apiKey)
    
    console.log(`
      token anda adalah : ${token}
      apikey anda adalah : ${apiKey}
      hasil request gambar anda adalah : ${pict}
      `)
    } catch(err) {
      console.log(err)
    }
  }

// async function UserDisplay () {
//   const {token} = await login("zale")
//   const {apiKey} = await getUser(token)
//   const {pict} = await getPictures(apiKey)

//   console.log(`
//     token anda adalah : ${token}
//     apikey anda adalah : ${apiKey}
//     hasil request gambar anda adalah : ${pict}
//     `)
// }


UserDisplay()