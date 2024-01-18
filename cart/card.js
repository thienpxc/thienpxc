let totalPrice = 0;
let nodeQuantity = 0;

// ======================================OPEN POPUP CART==========================================

let openShopping = document.querySelector("#cart");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".product");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector("#totalPrice");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

// ======================================RENDERCART==========================================
function renderCart(products) {
  return products
    .map((product) => {
      return `<ul class="cart-row">
      <li><img src="${product.nodeImage}"> </li>
      <li>${product.nodeName} </li>
      <li class="nodeCost">${product.nodeCost.toLocaleString()} </li>
      <li >
        <button onclick=decrease(${product.id})>-</button>
        <span class="quantity">${product.nodeQuantity}</span>
        <button onclick="increase(${product.id})">+</button>
      </li>
      <li>
        <button onclick="removeItems(${product.id})">
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </li>
      </ul>
    `;
    })
    .join("");
}
//=========================================================showProduct=================================================

function showProduct() {
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let tokenData = decodeToken(localStorage.getItem("token"));

  totalPrice = 0;
  nodeQuantity = 0;

  users.forEach((user) => {
    if (user.email == tokenData.userLogin.email) {
      user.cart.forEach((cart) => {
        totalPrice += cart.nodeCost;
        nodeQuantity += cart.nodeQuantity;
      });

      document.querySelector(
        "#totalPrice"
      ).innerHTML = `Total Price: ${totalPrice.toLocaleString()} đ`;
      document.querySelector("#quantity").innerHTML = `${nodeQuantity}`;

      document.querySelector("#listCard").innerHTML = renderCart(user.cart);
    }
  });
  updatecart();
}

showProduct();

// ======================================ADDTOCART==========================================

function addToCart(id) {
 if (!checkLogin()) {
   FuiToast.info("Bạn đã đăng nhập chưa?");
 }
  let jsonlistofproducts = JSON.parse(localStorage.getItem("products") || "[]");
  let users = JSON.parse(localStorage.getItem("users"));
  let tokenData = decodeToken(localStorage.getItem("token"));
  let product = jsonlistofproducts.find((item) => item.id === id);

  users.forEach((user) => {
    if (user.email === tokenData.userLogin.email) {
      const existingProductIndex = user.cart.findIndex(
        (cartItem) => cartItem.id === id
      );

      if (existingProductIndex !== -1) {
       
        user.cart[existingProductIndex].nodeQuantity += 1;
      } else {
        
        user.cart.push({
          id: product.id,
          nodeImage: product.nodeImage,
          nodeName: product.nodeName,
          nodeCost: product.nodeCost,
          nodeDiscount: product.nodeDiscount,
          nodeQuantity: 1,
        });
      }

      document.querySelector("#listCard").innerHTML = renderCart(user.cart);
    }
  });

  localStorage.setItem("users", JSON.stringify(users));

  FuiToast.success("Thêm thành công");
  showProduct();
  updatecart();
}

//======================================REMOVEITEMSFROMCART==========================================

function removeItems(productId) {
  if (!confirm("Chắc Chưa?")) return;
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let tokenData = decodeToken(localStorage.getItem("token"));

  users.forEach((user) => {
    if (user.email == tokenData.userLogin.email) {
      user.cart = user.cart.filter((cart) => cart.id != productId);
      console.log(user.cart);

      document.querySelector("#listCard").innerHTML = renderCart(user.cart);
    }
  });
  localStorage.setItem("users", JSON.stringify(users));
  showProduct();
  updatecart();
  FuiToast.success("Xoa thanh cong");
}
//=====================================decrease================================================

function decrease(id) {
  let users = JSON.parse(localStorage.getItem("users")|| "[]");
  let tokenData = decodeToken(localStorage.getItem("token"));

  users.forEach((user) => {
    if (user.email == tokenData.userLogin.email) {
      user.cart.forEach((cart, index) => {
        if (cart.id == id) {
          cart.nodeQuantity -= 1;
          if (cart.nodeQuantity < 0) {
            {
              cart.nodeQuantity = 0; 
            }
            user.cart = user.cart.filter((item) => item.id !== id);
          }
        }
      });

      
      let totalPrice = user.cart.reduce((total, cart) => {
        return total + cart.nodeCost * cart.nodeQuantity;
      }, 0);

      let nodeQuantity = user.cart.reduce(
        (total, cart) => total + cart.nodeQuantity,
        0
      );
     
      document.querySelector(
        "#totalPrice"
      ).innerHTML = `Total Price: ${totalPrice.toLocaleString()} đ`;
      document.querySelector(
        ".quantity"
      ).innerHTML = `Quantity: ${nodeQuantity} Unit`;

      document.querySelector("#listCard").innerHTML = renderCart(user.cart);
    }
  });

  localStorage.setItem("users", JSON.stringify(users));
  updatecart();
  showProduct();
}


//========================================increase========================================================

function increase(id) {
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let tokenData = decodeToken(localStorage.getItem("token"));

  users.forEach((user) => {
    if (user.email == tokenData.userLogin.email) {
      user.cart.forEach((cart, index) => {
        if (cart.id == id) {
          cart.nodeQuantity += 1;
          if (cart.nodeQuantity >= 1) {
            user.cart = user.cart.filter((item) => item.id !== id);
          }
        }
      });

      let totalPrice = user.cart.reduce((total, cart) => {
        return total + cart.nodeCost * cart.nodeQuantity;
      }, 0);

      let nodeQuantity = user.cart.reduce(
        (total, cart) => total + cart.nodeQuantity,
        0
      );
      
      document.querySelector(
        "#totalPrice"
      ).innerHTML = `Total Price: ${totalPrice.toLocaleString()} đ`;
      document.querySelector(
        ".quantity"
      ).innerHTML = `Quantity: ${nodeQuantity} Unit`;

      document.querySelector("#listCard").innerHTML = renderCart(user.cart);
    }
  });

  localStorage.setItem("users", JSON.stringify(users));
  updatecart();
  showProduct();
}


//==================================updatecart========================================
function updatecart() {
  let cart_item = document.getElementsByClassName("listCard")[0];
  let cart_rows = cart_item.getElementsByClassName("cart-row");
  let total = 0;
  for (let i = 0; i < cart_rows.length; i++) {
    let cart_row = cart_rows[i];
    let price_item = cart_row.getElementsByClassName("nodeCost ")[0];
    let quantity_item = cart_row.getElementsByClassName("quantity")[0];
    let price = parseFloat(price_item.innerText); // chuyển một chuổi string sang number để tính tổng tiền.
    let quantity = quantity_item.value; // lấy giá trị trong thẻ input
    total = total + price * quantity;
  }
  document.querySelector("#totalPrice")[0].innerText = total + "đ";
  // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
} 

