function inputFocus(element) {
  element.style.borderColor = "#3498db";
}

function inputBlur(element) {
  element.style.borderColor = "#ddd";
}

function buttonClick() {
  // Thêm logic JavaScript của bạn khi nút được nhấp vào
  alert("Nút đã được nhấp vào!");
}

function loginWithFacebook() {
  FB.login(
    function (response) {
      if (response.authResponse) {
        console.log("Successful login:", response);
      } else {
        console.log("Login failed:", response);
      }
    },
    { scope: "public_profile,email" }
  );
}

function statusChangeCallback(response) {
  console.log("statusChangeCallback");
  console.log(response);

  if (response.status === "connected") {
    // Đã đăng nhập vào trang web của bạn và Facebook.
    testAPI();
  } else {
    // Chưa đăng nhập vào trang web của bạn hoặc không thể xác định.
    document.getElementById("status").innerHTML =
      "Vui lòng đăng nhập vào trang web này.";
  }
}

function testAPI() {
  console.log("Welcome! Fetching your information.... ");
  FB.api("/me", function (response) {
    console.log("Successful login for: " + response.name);
    document.getElementById("status").innerHTML =
      "Cảm ơn bạn đã đăng nhập, " + response.name + "!";
  });
}


window.fbAsyncInit = function () {
  FB.init({
    appId: "1071773140759797",
    autoLogAppEvents: true,
    xfbml: true,
    version: "v18.0",
  });
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
