// Product data (You can later load this from a database)
const products = [
    { name: "Gaming Laptop", price: "$999", image: "laptop.jpg"  "https://raw.githubusercontent.com/ChandiniChikkam/Sash/main/Laptop.jpg.jpg"},
    { name: "Latest Smartphone", price: "$699", image: "phone.jpg" "https://raw.githubusercontent.com/ChandiniChikkam/Sash/main/Mobile.jpg.jpg" },
    { name: "Wireless Earbuds", price: "$199", image: "earbuds.jpg" },
    { name: "Smart Watch", price: "$299", image: "watch.jpg" }
];



// Function to display products dynamically
function displayProducts() {
    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Buy Now</button>
        `;

        productList.appendChild(productCard);
    });
}

// Load products when the page loads
window.onload = displayProducts;
