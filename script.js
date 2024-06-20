
// login function?????????????????????????????????????????????????????//////////////////////

function redirectToLogin() {
    // Redirect to the login page
    window.location.href = "/login/login.html";
  }
  
  function password() {
    // Add your login logic here
    // Redirect to the desired page after successful login
    window.location.href = "/password/password.html";
  }
  
  function  cancel() {
    // Redirect to the original page
    window.location.href = "/index/index.html";
  }
  function srjfashion() {
    // Redirect to the original page
    window.location.href = "/index/index.html";
  }
  function signup() {
    // Redirect to the original page
    window.location.href = "/signup/signup.html";
  }
  function submit() {
    // Redirect to the original page
    window.location.href = "/index/index.html";
  }
  function notnow() {
    // Redirect to the original page
    window.location.href = "/index/index.html";
  }
  // login function?????????????????????????????????????????????????????//////////////////////

  //  *********************************************************************************************************
  //buy now button fuction???????????????????????
   
  const products = [
    { image: '/images/png1.png', price: '₹2000', color: 'Red' },
    { image: '/images/png2.png', price: '₹2000', color: 'Blue' },
    { image: '/images/png3.png', price: '₹2000', color: 'Green' },
    { image: '/images/png4.png', price: '₹2000', color: 'Yellow' },
    { image: '/images/png5.png', price: '₹99991.50', color: 'Black' },
    { image: '/images/png6.png', price: '₹20000.50', color: 'White' },
    { image: '/images/png7.png', price: '₹2000', color: 'Purple' },
    { image: '/images/png8.png', price: '₹2000', color: 'Orange' },
    { image: '/images/png9.png', price: '₹2000', color: 'Gray' },
    { image: '/images/png10.png', price: '₹200', color: 'Pink' },
    { image: '/images/png11.png', price: '₹2000', color: 'Brown' },
    { image: '/images/png12.png', price: '₹2000', color: 'Violet' },
    { image: '/images/png13.png', price: '₹20099.50', color: 'Magenta' },
    { image: '/images/png14.png', price: '₹2009', color: 'Cyan' },
    { image: '/images/png15.png', price: '₹2000+₹200', color: 'Teal' },
    { image: '/images/png16.png', price: '₹2000.50', color: 'Lime' }
];

function createProductBoxes() {
    const container = document.querySelector('.smallboxs');
    products.forEach((product, index) => {
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerbox');
        innerBox.innerHTML = `
            <span>
                <span class="rotate">${product.price}</span>
                <button type="button" onclick="redirectToDetails(${index})">Buy Now</button>
            </span>
            <img src="${product.image}" alt="image not found">
        `;
        container.appendChild(innerBox);
    });
}

function redirectToDetails(index) {
    const selectedProduct = products[index];
    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    window.location.href = '/index/Details.html'; // Ensure this path is correct
}

// Generate the product boxes on page load
window.onload = createProductBoxes;

// **********************************************************************************************************************




  
  


  //animation/////////////////////////////////////////////////////////////////////////////
  var manulist = document.getElementById("manulist");
  manulist.style.maxHeight = "0px";
  function togglemenu() {
      if (manulist.style.maxHeight == "0px") {
          manulist.style.maxHeight = "626px";
      }
      else {
          manulist.style.maxHeight = "0px"
      }
  }
  // slider //
  var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

function showSlide(index) {
slides[currentSlide].classList.remove('active');
currentSlide = (index + slides.length) % slides.length;
slides[currentSlide].classList.add('active');
}

setInterval(function() {
showSlide(currentSlide + 1);
}, 1000); // Adjust the interval duration (in milliseconds) as needed
 //animation/////////////////////////////////////////////////////////////////////////////