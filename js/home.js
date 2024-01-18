function renderHeader(userLogin = null) {
  return `
  
    <div class="header">
      <div class="header-logo-thienky">
        <a href="/"></a> <img src="./logo/Warner & Spencer.png" alt="" />
      </div>
      <div class="header-search">
        <input  oninput="searchName()"  type="search" id="search" placeholder="Search" />
       
        
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
function searchName() {
  let product = JSON.parse(localStorage.getItem("products") || "[]");
  let valueSearch = document.getElementById("search").value;

  let productSearch = product.filter((value) => {
    return (
      value &&
      value.nodeName &&
      value.nodeName.toUpperCase().includes(valueSearch.toUpperCase())
    );
  });
  

   displayResults(productSearch);
}
function displayResults(results) {
  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = ""; // Clear previous results

  let valueSearch = document.getElementById("search").value.trim();

  if (valueSearch === "") {
    resultContainer.innerHTML = "";
    return; // Kết thúc hàm nếu ô tìm kiếm trống
  }

  if (results.length === 0) {
    resultContainer.innerHTML =
      "<p>Không có sản phẩm nào khớp với tìm kiếm.</p>";
  } else {
    results.forEach((product) => {
      let productHTML = `
        <div class="itemss">  
          <div class="items-img">
            <img src="${product.nodeImage}">
          </div>
          <h6 style="font-size: 15px;" class="items-title">${
            product.nodeName
          }</h6>
          <div class="items-price">
            <span style="color: red;" class="items-price-sale">${product.nodeCost.toLocaleString()}đ</span>
            <span class="items-price-origin">${product.nodeDiscount.toLocaleString()}đ</span>
          </div>
          <div>
            <button onclick="addToCart('${
              product.id
            }')" class="btn btn-outline-danger">Add</button>
            <span class="btn-area">${product.nodeArea}</span>
          </div>
        </div>
      `;

      // Tạo một phần tử div để chứa sản phẩm và thêm vào resultContainer
      let productDiv = document.createElement("div");
      productDiv.innerHTML = productHTML;
      resultContainer.appendChild(productDiv);
    });
  }
}

searchName();






