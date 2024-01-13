//=======================================printData========================================

function printData(products) {
  let productTableBodyE1 = document.getElementById("productTableBody");

  if (!productTableBodyE1) return;

  try {
    let tableDataProduct = ``;

    for (let i = 0; i < products.length; i++) {
      tableDataProduct += `
        <tr>
          <th scope="row">${products[i].id}</th>
          <td><img src="${
            products[i].nodeImage
          }" alt="${"products[i].nodeName"}" style="width: 50px; height: 50px;"></td>
          <td>${products[i].nodeName}</td>
          <td>${products[i].nodeCost.toLocaleString()}</td>
          
          <td>${products[i].nodeDiscount.toLocaleString()}</td>
          <td>${products[i].nodeQuantity}</td>
          <td>${products[i].nodeArea}</td>
          <td><button onclick= "deleteProduct('${
            products[i].id
          }')"class="btn btn-outline-danger">Delete</button></td>
          <td><button onclick= "updateProduct('${
            products[i].id
          }')"class="btn btn-outline-danger">update </button></td>
        </tr>
      `;
    }

    productTableBodyE1.innerHTML = tableDataProduct;
  } catch (err) {}
  printData(products);
}

// Lấy danh sách sản phẩm từ localStorage và gọi hàm printData
let listofproducts = JSON.parse(localStorage.getItem("products") || "[]");
printData(listofproducts);
//=========================================+tao san pham============================================
function createproducts() {
  let listofproducts = JSON.parse(localStorage.getItem("products") || "[]");

  let nodeImage = document.getElementById("image").value;

  let nodeName = document.getElementById("name").value;

  let nodeCost = parseInt(document.getElementById("cost").value);

  let nodeDiscount = parseInt(document.getElementById("discount").value);
  let nodeQuantity = parseInt(document.getElementById("quantity").value);
  let nodeArea = document.getElementById("area").value;

  let product = {
    id: Math.ceil(Date.now() * Math.random()).toString(),
    nodeImage,
    nodeName,
    nodeCost,
    nodeQuantity,
    nodeDiscount,
    nodeArea,
  };

  listofproducts = [...listofproducts, product];
  FuiToast.success("Thêm sản phẩm thành công");
  window.location.reload();
  localStorage.setItem("products", JSON.stringify(listofproducts));
  document.getElementById("discount").value = "";
  document.getElementById("cost").value = "";
  document.getElementById("name").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("area").value = "";
  document.getElementById("image").value = "";
  renderProducts();
}
//==================================================xoa san pham========================================
function deleteProduct(productid) {
  console.log("da vao");
  if (!confirm("Xác nhận muốn xóa")) return;
  let listofproducts = JSON.parse(localStorage.getItem("products") || "[]");
  listofproducts = listofproducts.filter((product) => product.id != productid);
  localStorage.setItem("products", JSON.stringify(listofproducts));
  FuiToast.success("Đã xóa thành công");
  printData(listofproducts);
}

//=====================================================updateProduct==========================================
function updateProduct() {
  let listofproducts = JSON.parse(localStorage.getItem("products") || "[]");
  let updateId = prompt("Nhập ID muốn chỉnh sửa");

  let productId = listofproducts.find((product) => product.id == updateId);

  if (!productId) {
    FuiToast.error("ID chưa chính xác");
    return;
  }

  document.getElementById("productId").innerHTML = "productId: " + productId.id;
  document.getElementById("image").placeholder = productId.nodeImage;
  document.getElementById("name").placeholder = productId.nodeName;
  document.getElementById("cost").placeholder = productId.nodeCost;
  document.getElementById("discount").placeholder = productId.nodeDiscount;
  document.getElementById("quantity").placeholder = productId.nodeQuantity;
  document.getElementById("area").placeholder = productId.nodeArea;

  document.getElementById("productId").style.display = "block";
  document.getElementById("Createproducts").style.display = "none";
  document.getElementById("save").style.display = "block";
}

//=================================================luu san pham da dc chinh sua=======================================================================
function saveProduct() {
  let listofproducts = JSON.parse(localStorage.getItem("products") || "[]");
  let id =  document.getElementById("productId").innerHTML.replace("productId: ", "")
  

  let product = listofproducts.find((product) => product.id == id);

  let nodeImage = document.getElementById("image").value;
  nodeImage = nodeImage ? nodeImage : product.nodeImage;

  let nodeName = document.getElementById("name").value;
  nodeName = nodeName ? nodeName : product.nodeName;

  let nodeCost = parseInt(document.getElementById("cost").value);
  nodeCost = isNaN(nodeCost) ? product.nodeCost : nodeCost;

  let nodeDiscount = parseFloat(document.getElementById("discount").value);
  nodeDiscount = isNaN(nodeDiscount) ? product.nodeDiscount : nodeDiscount;

  let nodeQuantity = parseInt(document.getElementById("quantity").value);
  nodeQuantity = isNaN(nodeQuantity) ? product.nodeQuantity : nodeQuantity;

  let nodeArea = document.getElementById("area").value;
  nodeArea = nodeArea ? nodeArea : product.nodeArea;

  let updateUser = {
    id,
    nodeImage,
    nodeName,
    nodeCost,
    nodeDiscount,
    nodeQuantity,
    nodeArea,
  };

  listofproducts = listofproducts.map((product) => {
    if (product.id == id) {
      return updateUser;
    } 
    else {
      return product;
    }
  });


  localStorage.setItem("products", JSON.stringify(listofproducts));
  FuiToast.success("Đã được lưu");
setTimeout(() => {
  window.location.reload();
}, 2000);
  document.getElementById("productId").style.display = "none";
  document.getElementById("save").style.display = "none";
  document.getElementById("Createproducts").style.display = "block";



  document.getElementById("discount").value = "";
  document.getElementById("cost").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("name").value = "";
  document.getElementById("area").value = "";
  document.getElementById("image").value = "";
window.location.reload();
  document.getElementById("image").placeholder = "";
  document.getElementById("name").placeholder = "";
  document.getElementById("cost").placeholder = "";
  document.getElementById("quantity").placeholder = "";
  document.getElementById("discount").placeholder = "";
  document.getElementById("area").placeholder = "";
  
}

