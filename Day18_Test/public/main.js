const API_URL = "http://localhost:3000/products";

async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch products");
    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    alert("Error fetching products: " + error.message);
  }
}

async function searchProducts() {
  const queryInput = document.getElementById("searchInput");
  const query = queryInput.value.trim();
  if (!query) {
    alert("Please enter a search query.");
    return;
  }
  try {
    const response = await fetch(`${API_URL}/search?query=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error("Failed to search products");
    const products = await response.json();
    renderProducts(products);
    queryInput.value = "";
  } catch (error) {
    alert("Error searching products: " + error.message);
  }
}

function showAllProducts() {
  document.getElementById("searchInput").value = "";
  fetchProducts();
}

function renderProducts(products) {
  const tbody = document.getElementById("productList");
  tbody.innerHTML = "";
  if (products.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;">No products found.</td></tr>`;
    return;
  }
  products.forEach(product => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input id="name-${product._id}" value="${product.name}" /></td>
      <td><input id="price-${product._id}" type="number" value="${product.price}" /></td>
      <td><input id="quantity-${product._id}" type="number" value="${product.quantity}" /></td>
      <td><input id="description-${product._id}" value="${product.description}" /></td>
      <td><input id="category-${product._id}" value="${product.category}" /></td>
      <td>
        <button onclick="updateProduct('${product._id}')">Update</button>
        <button onclick="deleteProduct('${product._id}')">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function clearInputFields() {
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("description").value = "";
  document.getElementById("category").value = "";
}

async function createProduct() {
  const name = document.getElementById("name").value.trim();
  const price = document.getElementById("price").value.trim();
  const quantity = document.getElementById("quantity").value.trim();
  const description = document.getElementById("description").value.trim();
  const category = document.getElementById("category").value.trim();

  if (!name || !price || !quantity || !description || !category) {
    alert("Please fill in all fields before adding a product.");
    return;
  }

  try {
    const response = await fetch(API_URL, {  // Correct URL here
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price, quantity, description, category }),
    });
    if (!response.ok) throw new Error("Failed to add product");
    alert("Product added successfully!");
    clearInputFields();
    fetchProducts();
  } catch (error) {
    alert("Error adding product: " + error.message);
  }
}

async function updateProduct(id) {
  const name = document.getElementById(`name-${id}`).value.trim();
  const price = document.getElementById(`price-${id}`).value.trim();
  const quantity = document.getElementById(`quantity-${id}`).value.trim();
  const description = document.getElementById(`description-${id}`).value.trim();
  const category = document.getElementById(`category-${id}`).value.trim();

  if (!name || !price || !quantity || !description || !category) {
    alert("Please fill in all fields before updating the product.");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price, quantity, description, category }),
    });
    if (!response.ok) throw new Error("Failed to update product");
    alert("Product updated successfully!");
    fetchProducts();
  } catch (error) {
    alert("Error updating product: " + error.message);
  }
}

async function deleteProduct(id) {
  if (!confirm("Are you sure you want to delete this product?")) return;

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete product");
    alert("Product deleted successfully!");
    fetchProducts();
  } catch (error) {
    alert("Error deleting product: " + error.message);
  }
}

fetchProducts();
