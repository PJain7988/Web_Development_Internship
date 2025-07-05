const productsContainer = document.getElementById("product-container");
const searchInput = document.getElementById("search");
let products = [];

// ✅ Fetch products from the correct API
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    products = data; // store all products
    displayProducts(products); // show all initially
  })
  .catch(error => console.error("Error fetching products:", error));

// ✅ Display products
function displayProducts(productsToDisplay) {
  productsContainer.innerHTML = ""; // <-- CORRECTED!

  productsToDisplay.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>$${product.price}</p>
    `;
    productsContainer.appendChild(card);
  });
}

// ✅ Search functionality
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm)
  );
  displayProducts(filtered);
});
