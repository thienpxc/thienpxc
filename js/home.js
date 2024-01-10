function renderHeader(userLogin = null) {
  return `
  
    <div class="header">
      <div class="header-logo-thienky">
        <img src="./logo/Warner & Spencer.png" alt="" />
      </div>
      <div class="header-search">
        <input   type="search" id="search" placeholder="      Search in ThienKy" />
        <button onclick="timkiemsanpham()">Tìm kiếm</button>
      </div>
      <div class="header-table">
        <table>
          <tr>
            <td class="header-orders">
              <ion-icon name="train-outline"></ion-icon>
              Hỗ Trợ
            </td>
            <td class="header-call">Call Us Now</td>
          </tr>
          <tr>
            <td class="header-delivery">
              <ion-icon name="logo-flickr"></ion-icon>
              Thông Báo
            </td>
            <td class="header-phone">
              <ion-icon name="call-outline"></ion-icon>
              +84559553859
            </td>
            
            <td class="header-icon">
              <ion-icon name="heart-outline"></ion-icon>
              
              <ion-icon name="cart-outline"><td>
              <span>
              
                ${
                  userLogin
                    ? ""
                    : '<a href="./signin/index.html" "><ion-icon name="person-circle-outline" style="font-size: 30px;color: black;margin-left: 10px;"></ion-icon></a>'
                }
                
              </span>
              
            </td></ion-icon>
            </td>
          </tr>
          <tr>
            <td class="header-return">
              <ion-icon name="refresh-outline"></ion-icon>
              Return
              
              <td>
            
              ${
                userLogin
                  ? `<button onclick='logout()' style='font-size: 18px;'>Log Out</button>
 <span style='font-size: 16px;'>${userLogin.email}</span> <img src="${userLogin.photoURL}" alt="">
`
                  : '<td><a class="signuphref" href="./signup/index.html" style="font-size: 18px;margin-left: 100px;" >Sign Up</a></td>'
              }
              
            </td>
              
            
            </td>
            
            
            
            
          </tr>
        </table>
      </div>
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="footer-section">
        <div class="container">
       
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"><img src="./logo/Warner & Spencer.png" class="img-fluid" alt="logo"></a>
                            </div>
                            
                            <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Đừng bỏ lỡ việc đăng ký các nguồn cấp dữ liệu mới của chúng tôi, vui lòng điền vào biểu mẫu bên dưới.</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address">
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2024, All Right Reserved <a href="#">Anup</a></p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;
}
function logout() {
  localStorage.removeItem("token");
  window.location.reload();
}
function truyxuatdoituongtheoid(nodeName) {
  let products = localStorage.getItem("products");
  let danhsachsanpham = JSON.parse(products);

  for (var i = 0; i < danhsachsanpham.length; i++) {
    let danhsachhientai = danhsachsanpham[i];
    if (danhsachhientai.nodeName.toLowerCase() === nodeName.toLowerCase()) {
      return danhsachhientai;
    }
  }

  return null  // Trả về null nếu không tìm thấy
}

function timkiemsanpham() {
  let nodeName = document.getElementById("search").value;
  console.log("name nhat vao:" + nodeName);
  let sanpham = truyxuatdoituongtheoid(nodeName);
  console.log(sanpham);
  let HTML = renderProducts();
 console.log(HTML);
  let nodeketquatimkiem = document.getElementById("ketquatimkiem");
  nodeketquatimkiem.innerHTML = HTML;

  document.getElementById("slider-wrapper").style.display = "none";
}

