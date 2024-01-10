function createproducts() {
  let listofproducts = JSON.parse(localStorage.getItem("products") || "[]");

  let nodeImage = document.getElementById("image").value;

  let nodeName = document.getElementById("name").value;

  let nodeCost = parseInt(document.getElementById("cost").value);

  let nodeDiscount = parseFloat(document.getElementById("discount").value);

  let nodeArea = document.getElementById("area").value;

  let product = {
    id: Math.ceil(Date.now() * Math.random()),
    nodeImage,
    nodeName,
    nodeCost,
    nodeDiscount,
    nodeArea,
  };

  listofproducts = [...listofproducts, product];

  localStorage.setItem("products", JSON.stringify(listofproducts));
  document.getElementById("discount").value = "";
  document.getElementById("cost").value = "";
  document.getElementById("name").value = "";
  document.getElementById("area").value = "";
  document.getElementById("image").value = "";
  renderProducts();
}

function deleteProduct() {
  let listofproducts = JSON.parse(localStorage.getItem("products") || "[]");
  let id = prompt("xin moi nhap ID muon xoa: ");
  let productId = listofproducts.find((product) => product.id == id);

  if (!productId) {
    alert("id ko ton tai");
    return;
  }
  console.log("id", id);

  listofproducts = listofproducts.filter((product) => product.id != id);
  localStorage.setItem("products", JSON.stringify(listofproducts));
}

function updateProduct() {
  let listofproducts = JSON.parse(localStorage.getItem("products") || "[]");
  let updateId = prompt("Nhập ID muốn chỉnh sửa");

  let productId = listofproducts.find((product) => product.id == updateId);

  if (!productId) {
    alert("id ko ton tai");
    return;
  }

  document.getElementById("productId").innerHTML = "productId: " + productId.id;
  document.getElementById("image").placeholder = productId.nodeImage;
  document.getElementById("name").placeholder = productId.nodeName;
  document.getElementById("cost").placeholder = productId.nodeCost;
  document.getElementById("discount").placeholder = productId.nodeDiscount;
  document.getElementById("area").placeholder = productId.nodeArea;

  document.getElementById("productId").style.display = "block";
  document.getElementById("update").style.display = "none";
  document.getElementById("save").style.display = "block";
}
function saveProduct() {
  let listofproducts = JSON.parse(localStorage.getItem("products") || "[]");
  let id = parseInt(
    document.getElementById("productId").innerHTML.replace("productId: ", "")
  );

  let product = listofproducts.find((product) => product.id == id);

  let nodeImage = document.getElementById("image").value;
  nodeImage ? nodeImage : (nodeImage = product.nodeImage);

  let nodeName = document.getElementById("name").value;
  nodeName ? nodeName : (nodeName = product.nodeName);

  let nodeCost = parseInt(document.getElementById("cost").value);
  nodeCost ? nodeCost : (nodeName = product.nodeCost);

  let nodeDiscount = parseFloat(document.getElementById("discount").value);
  nodeDiscount ? nodeDiscount : (nodeDiscount = product.nodeDiscount);

  let nodeArea = document.getElementById("area").value;
  nodeArea ? nodeArea : (nodeArea = product.nodeArea);

  let updateUser = {
    id,
    nodeImage,
    nodeName,
    nodeCost,
    nodeDiscount,
    nodeArea,
  };

  listofproducts = listofproducts.map((product) => {
    if (product.id === id) {
      return updateUser;
    } else {
      return product;
    }
  });

  localStorage.setItem("products", JSON.stringify(listofproducts));
  document.getElementById("productId").style.display = "none";
  document.getElementById("update").style.display = "block";
  document.getElementById("save").style.display = "none";

  document.getElementById("discount").value = "";
  document.getElementById("cost").value = "";
  document.getElementById("name").value = "";
  document.getElementById("area").value = "";
  document.getElementById("image").value = "";

  document.getElementById("image").placeholder = "";
  document.getElementById("name").placeholder = "";
  document.getElementById("cost").placeholder = "";
  document.getElementById("discount").placeholder = "";
  document.getElementById("area").placeholder = "";
}
