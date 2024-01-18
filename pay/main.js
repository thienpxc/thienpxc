//=============================renderCart=========================
function renderCart(cart) {
  return cart
    .map((product) => {
      return `<tr class="cart-row">
      <td class="img"><img src="${product.nodeImage}"></td>
      <td>${product.nodeName}</td>
      <td class="nodeCost">${product.nodeCost.toLocaleString()}</td>
      <td><span class="quantity">${product.nodeQuantity.toLocaleString()}</span></td>
    </tr>`;
    })
    .join("");
    
}
showPaymentDisplay();

//=========================================showPaymentDisplay======================================
function showPaymentDisplay() {
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  console.log(users);

  let totalPrice = 0;
  let nodeQuantity = 0;

  users.forEach((cart) => {
    user.cart.forEach((cart) => {
        
        
      totalPrice += cart.nodeCost * cart.nodeQuantity;
      nodeQuantity += cart.nodeQuantity;
    });
  });

  document.querySelector(
    "#totalPayment"
  ).innerHTML = `Tổng giá: ${totalPrice.toLocaleString()} đ`;

  document.querySelector("#PaymentAmount").innerHTML = `${nodeQuantity}`;

  // Giả sử bạn có một phần tử với id "MyCart" trong HTML
  document.querySelector("#MyCart").innerHTML = renderCart(users[0].cart);

  
}
function showPaymentDisplay() {
  let users = JSON.parse(localStorage.getItem("users") || "[]");
    console.log(users);
  let totalPrice = 0;
  let nodeQuantity = 0;

  users.forEach((user) => {
    if (user.cart && Array.isArray(user.cart)) {
      user.cart.forEach((cart) => {
        totalPrice += cart.nodeCost * cart.nodeQuantity;
        nodeQuantity += cart.nodeQuantity;
      });
    }
  });
console.log(nodeQuantity);   
console.log(totalPrice);
  document.querySelector(
    "#totalPayment"
  ).innerHTML = `Tổng giá: ${totalPrice.toLocaleString()} đ`;
  document.querySelector("#PaymentAmount").innerHTML = `${nodeQuantity}`;
  document.querySelector("#MyCart").innerHTML = renderCart(users[0].cart);
}


showPaymentDisplay();


function btnprimary(){
  alert("ggggggggg")
}