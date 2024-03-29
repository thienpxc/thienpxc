




//=========================================== bat event nguoi dang ky============================== 
function checkform(event) {
  event.preventDefault(); 
  var username = document.querySelector("#username").value;
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  var repassword = document.querySelector("#repassword").value;
  let users = JSON.parse(localStorage.getItem("users") || "[]");

  let isFlag = true;

  
  if (username !== "") {
    if (username.length < 5 || username.length > 30) {
      FuiToast.warning("Tài Khoản Ít Nhất Có 5 Kí Tự");
      isFlag = false;
    }
  } else {
    FuiToast.error("Vui Lòng Nhập Tên Đăng Nhập");
    isFlag = false;
  }

  
  if (email !== "") {
    
  } else {
    FuiToast.error("Vui Lòng Nhập Email");
    isFlag = false;
  }

  
  if (password !== "") {
    if (password.length < 6 || password.length > 20) {
      FuiToast.warning("Mật Khẩu Ít Nhất Có 6 Kí Tự");
      isFlag = false;
    }
  } else {
    FuiToast.error("Vui Lòng Nhập Mật Khẩu");
    isFlag = false;
  }

  
  if (repassword !== "") {
    if (repassword !== password) {
      FuiToast.error("Mật Khẩu Không Trùng Khớp");
      isFlag = false;
    }
  } else {
    FuiToast.info("Vui Lòng Nhập Lại Mật Khẩu");
    isFlag = false;
  }

  
  const isExistingUser = users.some(
    (user) => user.username === username || user.email === email
  );

  if (isExistingUser) {
    FuiToast.error("Tài Khoản hoặc Email đã tồn tại");
    isFlag = false;
  }

  if (isFlag) {
    let newUser = {
      id:Math.ceil(Math.random()*Date.now()).toString(),
      username,
      password,
      email,
      cart:[]
    };

    users = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(users));

    FuiToast.success("Đăng Ký Thành Công");
    setTimeout(() => {
      window.location.href = "../signin/";
    }, 1000);

    event.target.reset();
  }
};
