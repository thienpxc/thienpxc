import { signInWithGoogle } from "../js/google.js";

document.getElementById("icon-google").addEventListener("click", async () => {
  try {
    let signin = await signInWithGoogle();
   

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    let user = users.find((user) => {
      return user.email === signin.user.email;
    });
    
    if (!user) {
      let newUser = {
        email: signin.user.email,
        photo: signin.user.photoURL,
      };
      
      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));
      let tokenEmail = createToken(newUser);

      localStorage.setItem("token", tokenEmail);
      window.location.href = "/";
    } else {
      let tokenEmail = createToken(user);

      localStorage.setItem("token", tokenEmail);
      FuiToast.success("Đăng Nhập Thành Công");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
  } catch (error) {
    alert("dang nhap that bai ");
  }
  return;
});
