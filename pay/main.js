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


//=========================================showPaymentDisplay======================================
function showPaymentDisplay() {
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  console.log(users);

  let totalPrice = 0;
  let nodeQuantity = 0;

  users.forEach((user) => {
    user.cart.forEach((cart) => {
      totalPrice += cart.nodeCost * cart.nodeQuantity;
      nodeQuantity += cart.nodeQuantity;
    });
  });

  document.querySelector(
    "#totalPayment"
  ).innerHTML = `Tổng giá: ${totalPrice.toLocaleString()} đ`;

  document.querySelector("#PaymentAmount").innerHTML = `Số lượng <br /> </ngbr>${nodeQuantity}`;

  // Giả sử bạn có một phần tử với id "MyCart" trong HTML
  document.querySelector("#MyCart").innerHTML = renderCart(users[0].cart); // Nếu users chỉ có một phần tử.

  console.log("Đã vào");
}

showPaymentDisplay();