
document
  .querySelector(".container")
  .insertAdjacentHTML("afterbegin", renderHeader(checkLogin()));
document
  .querySelector(".container")
  .insertAdjacentHTML("beforeend", renderFooter());

function createToken(userLogin) {
  let dataJsonStr = JSON.stringify({
    userLogin,
    privateKey: "Thien",
  });

  let hashStr = ``;
  for (let i in dataJsonStr) {
    hashStr += dataJsonStr[i].charCodeAt(0) * 2 + "|";
  }
  return hashStr;
}

function decodeToken(token) {
  let baseStr = ``;

  for (let i in token.split("|")) {
    if (token.split("|")[i] == "") break;
    baseStr += String.fromCharCode(token.split("|")[i] / 2);
  }
  try {
    return JSON.parse(baseStr);
  } catch (err) {
    return false;
  }
}





function checkLogin() {
  
  
  if (localStorage.getItem("token")) {
    let tokenData = decodeToken(localStorage.getItem("token"));
    

    if (tokenData.privateKey != "Thien") {
      localStorage.removeItem("token");
      return null;
    }
    return tokenData.userLogin;
  } else {
    return null;
  }
}


