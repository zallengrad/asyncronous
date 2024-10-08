// promise

const token = Math.floor(Math.random() * 12345678);

const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username) {
  console.log("memvalidasi data...");
  return new Promise((success, failed) => { //--->> promisee ada 2 param
    setTimeout(() => {
      if(username != "zale") failed ("sorry wrong data!")
        success({token})
    }, 200); 
  })
}

function getUser(token) {
  console.log("mendapatkan kode api..");
  return new Promise((success, failed)=> {
    if (!token) failed ("sorry, no token cannt acces")
    if (token)
      setTimeout(() => {
        success({ apiKey: "xkey123" }); 
      }, 300);

  })
}

function getPictures(apiKey) {
  if (apiKey)
    setTimeout(() => {
      return(pictures);
    }, 1500);
}

// const user = login("zale")
// console.log(user)               -----> menghasilkan promise {pending}

const user = login("zale")
user.then(function(response){   //kalau promise menggunakan then dan itu terpisah dari variabel
  // console.log(response)
  const {token} = response;
  getUser(token).then(function(response){
    console.log({response})
    const {apiKey} = response
  }).catch(err => console.log(err))
}).catch(err => console.log(err))
