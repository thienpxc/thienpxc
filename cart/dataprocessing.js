

function renderProducts() {
  let jsonlistofproducts = JSON.parse(localStorage.getItem("products") || "[]");
console.log(jsonlistofproducts);
  let productContainer = document.getElementById("product");
  productContainer.innerHTML = ""; // Xóa nội dung cũ

  for (let i = 0; i < jsonlistofproducts.length; i++) {
    let product = jsonlistofproducts[i];
    // Tạo phần tử sản phẩm và thêm vào phần tử container
    let productHTML = `
      
        <div class="item">  
          <div class="item-img">
            <img src="${product.nodeImage}">
          </div>
          <h2 style="font-size: 25px;" class="item-title">${product.nodeName}</h2>
          <div class="item-price">
            <span style="color: red;" class="item-price-sale">${product.nodeCost}VND</span>
            <span class="item-price-origin">${product.nodeDiscount}VND</span>
          </div>
          <div ><button onclick="addtocart('${product.id}')" class="btn btn-primary">Đưa vào giỏ hàng</button>
<span class="btn-area">${product.nodeArea}</span>
          </div>
          
        </div>
      
    `;
    productContainer.innerHTML += productHTML;
  }
}

// Gọi hàm để render danh sách sản phẩm
renderProducts();

function addtocart(id) {
  alert("Không nên mua coi sản phẩm có id là " + id);
  // Thêm logic xử lý đưa sản phẩm vào giỏ hàng ở đây
}