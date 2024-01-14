function renderHeader(userLogin = null) {
  return `
  
    <div class="header">
      <div class="header-logo-thienky">
        <a href="/"></a> <img src="./logo/Warner & Spencer.png" alt="" />
      </div>
      <div class="header-search">
        <input    type="search" id="search" placeholder="Search" />
        <button id="search-icon" onclick="timkiemsanpham()">
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>
      <table class="header-table" style="text-decoration: none;">
    <td class="header-icon">
      <ion-icon name="heart-outline"></ion-icon>
      
      <button id="cart"><ion-icon name="cart-outline"></ion-icon></button><span id="quantity">0</span>
      
      
    </td>
  
  


      
      <div class="user-actions">
  ${
    userLogin
      ? `<button onclick='logout()' class='btnlogout'>
            <ion-icon name="log-out-outline"></ion-icon>
            <span>${userLogin.email}</span>
          </button>`
      : '<a class="signuphref" href="./signup/index.html">Sign Up</a>'
  }
  ${
    userLogin
      ? ""
      : '<a href="./signin/index.html" class="btn-signin">Sign In</a>'
  }
</div>
    </table>
    </div>
  `;
}
// ======================================FOOTER==========================================

function renderFooter() {

  return `  <footer class="text-center bg-body-tertiary">
  <!-- Grid container -->
  <div class="container pt-4">
    <!-- Section: Social media -->
    <section class="mb-4">
      <!-- Facebook -->
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <!-- Twitter -->
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Instagram -->
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-instagram"></i
      ></a>

      <!-- Linkedin -->
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>
      <!-- Github -->
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    <!-- Section: Social media -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2024 :
    <a class="text-body" href="https://thienky.io.vn/">TK</a>
  </div>
  <!-- Copyright -->
</footer>
    `;
 }
//xoa token luc dang xuat

// ======================================LOGOUT==========================================

function logout() {
  localStorage.removeItem("token");
  window.location.reload();
}
// tim kiem doi tuong name
function timkiemsanpham() {
  let nodeName = document.getElementById("search").value;
  console.log("name nhat vao:" + nodeName);
  let product = truyxuatdoituongtheoid(nodeName);

  let nodeketquatimkiem = document.getElementById("ketquatimkiem");

  if (product) {
    // Nếu tìm thấy sản phẩm, hiển thị thông tin sản phẩm trong HTML
    let HTML = `
      <div>
        <h2>${product.nodeName}</h2>
        <p>Price: ${product.nodeCost}</p>
        <p>Description: ${product.nodeDiscount}</p>
        <!-- Thêm các trường thông tin khác của sản phẩm nếu cần -->
      </div>
    `;
    nodeketquatimkiem.innerHTML = HTML;
  } else {
    // Nếu không tìm thấy sản phẩm, hiển thị thông báo không tìm thấy
    nodeketquatimkiem.innerHTML = "<p>Không tìm thấy sản phẩm.</p>";
  }

  // Các dòng mã khác bạn có thể giữ nguyên tùy thuộc vào yêu cầu cụ thể của bạn.
  let HTML = renderProducts();
  console.log(HTML);
  document.getElementById("slider-wrapper").style.display = "none";
}



