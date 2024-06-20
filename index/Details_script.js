
function srjfashion() {
    // Redirect to the original page
    window.location.href = "/index/index.html";
}

function redirectToLogin() {
    // Redirect to the login page
    window.location.href = "/login/login.html";
  }
//go back to home when click on back button
function B() {
    window.location.href = "index.html";
}
// Function to update the image and price based on data from localStorage
function updateProductDetails() {
    const productImage = document.getElementById('productImage');
    const productPrice = document.getElementById('productPrice');
    const productColor = document.getElementById('productColor');
    const productTitle = document.getElementById('productTitle');

    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    if (selectedProduct) {
        productImage.src = selectedProduct.image;
        productPrice.textContent = "Price: " + selectedProduct.price;
        productColor.textContent = "Color: " + selectedProduct.color;
        productTitle.textContent = "Details for " + selectedProduct.color + " T-shirt";
    } else {
        console.error("No product data found in localStorage");
    }
}

// Call the function to update the product details on page load
window.onload = updateProductDetails;


