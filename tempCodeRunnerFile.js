function login(username, callback) {
  console.log("memvalidasi data...");
  setTimeout(() => {
    callback({ token, username }); //ini nanti jadi response
  }, 200); //ini delaynya
}