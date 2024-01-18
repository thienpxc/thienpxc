let checkform = (event) => {
  event.preventDefault();

  let email = document.querySelector("#exampleInputEmail1").value;
  let password = document.querySelector("#exampleInputPassword1").value;

  if (email !== "admin") {
    FuiToast.error("Sai UserName");
  } else {
    if (password !== "123@") {
      FuiToast.error("Sai password");
    } else {
      FuiToast.success("Xin Chào");

      // Hiển thị phần tử có id là "pro" và ẩn phần tử có id là "form-admin"
      document.querySelector("#pro").style.display = "block";
      document.querySelector("#form-admin").style.display = "none";
      document.querySelector("#Product").style.display = "block";
      document.getElementById("LogOut").style.display = "block";
    }
  }
  event.target.reset();
};

function logout() {
  localStorage.removeItem("loggedInUser");

  document.getElementById("pro").style.display = "none";
  document.getElementById("form-admin").style.display = "block";
  document.getElementById("LogOut").style.display = "none";
}
