
//hien thi home
function renderProducts() {
  
  let jsonlistofproducts = JSON.parse(localStorage.getItem("products") || "[]");

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
          <h6 style="font-size: 15px;" class="item-title">${
            product.nodeName
          }</h6>
          <div class="item-price">
            <span style="color: red;" class="item-price-sale">${product.nodeCost.toLocaleString()}đ</span>
            <span class="item-price-origin">${product.nodeDiscount.toLocaleString()}đ</span>
          </div>
          <div ><button onclick="addToCart('${
            product.id
          }')" class="btn btn-outline-danger">Add</button>
<span class="btn-area">${product.nodeArea}</span>
          </div>
          
        </div>
      
    `;
    productContainer.innerHTML += productHTML;
    
  }
  
}

renderProducts();


///











// function reloadCard() {
//   let count = 0;
//   let totalPrice = 0;

//   listCard.forEach((product) => {
//     totalPrice += product.quantity * product.nodeCost;
//     count += product.quantity;
//   });

//   // Đảm bảo bạn đã có các phần tử HTML với id tương ứng trong trang HTML của bạn
//   let totalElement = document.getElementById("total");
//   let quantityElement = document.getElementById("quantity");

//   if (totalElement && quantityElement) {
//     totalElement.innerText = totalPrice.toLocaleString();
//     quantityElement.innerText = count;
//   }
//   reloadCard();

// }


