// =================== realita pasti ada delay nya kan............ ===================
// CALLBACK

const token = Math.floor(Math.random() * 12345678);

const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username, callback) {
  console.log("memvalidasi data...");
  setTimeout(() => {
    callback({ token, username }); //ini nanti jadi response
  }, 200); //ini delaynya
}

function getUser(token, callback) {
  console.log("mendapatkan kode api..");
  if (token)
    setTimeout(() => {
      callback({ apiKey: "xkey123" }); //response
    }, 300);
  // if (token) return { apiKey: "xkey123" };
}

function getPictures(apiKey, callback) {
  if (apiKey)
    setTimeout(() => {
      callback(pictures);
    }, 1500);
}

login("zale", function (response) {
  // console.log("getting yeahh", response);
  const { token } = response;
  const { username } = response;
  // console.log('token => ', token)
  // console.log('username => ', username)
  getUser(token, function (response) {
    const { apiKey } = response;
    console.log(apiKey);
    getPictures(apiKey, function (response) {
      const pict = response;
      console.log(pict);
    });
  });
});

// diatas nested callback function di dalam function seterusnya
