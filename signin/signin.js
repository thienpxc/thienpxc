 //===================================khong cho nguoi dung quay lai khi da dang nhap======================================
 if(checkLogin()){
  window.location.href = "/"
}
//========================================bat event nguoi dang nhap================================================
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


  localStorage.setItem("token", token);

  FuiToast.success("Đăng Nhập Thành Công");
  setTimeout(() => {
    window.location.href = "/";
  }, 1000);
};


