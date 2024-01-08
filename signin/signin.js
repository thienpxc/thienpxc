if(checkLogin()){
  window.location.href = "/"
}

const handleSubmit = (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  if (!email || !password) {
    FuiToast.error("Vui lòng nhập đầy đủ thông tin đăng nhập");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users") || "[]");

  let user = users.find((user) => user.email == email);

  if (!user) {
    FuiToast.error("Thông tin tài khoản không đúng");
  }
  if (user.password !== password) {
    FuiToast.error("Mật khẩu không đúng");
    return;
  }

  let userLogin = {
    email,
    password,
  };

  let token = createToken(userLogin);

  // if (!token) {
  //   FuiToast.error("Đã xảy ra lỗi khi tạo token");
  //   return;
  // }
  localStorage.setItem("token", token);

  FuiToast.success("Đăng Nhập Thành Công");
  setTimeout(() => {
    window.location.href = "../index.html";
  }, 1000);
};

// if (username === users.username && password === users.password) {
//   alert("Đăng nhập thành công");
//   setTimeout(() => {
//     window.location.href = "../index.html";
//   }, 2000);
// } else if (username !== users.username) {
//   FuiToast.warning("Sai tài khoản");
// } else if (password !== users.password) {
//   FuiToast.warning("Sai mật khẩu");
// } else {
//   FuiToast.error("Đăng nhập không thành công");
// }
