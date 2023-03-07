// Select elements
const header = document.querySelector("header");
const buySection = document.querySelector("#buy");
const sellSection = document.querySelector("#sell");
const cartSection = document.querySelector("#cart");
const cartItems = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");
const clearCartBtn = document.querySelector("#clear-cart");

// Set up event listeners
header.addEventListener("click", showCart);
buySection.addEventListener("click", addToCart);
sellSection.addEventListener("submit", sellItem);
clearCartBtn.addEventListener("click", clearCart);

// Define data
const items = [
  {
    id: 1,
    name: "Item 1",
    description: "Description of item 1.",
    price: 50,
    image: "item1.jpg"
  },
  {
    id: 2,
    name: "Item 2",
    description: "Description of item 2.",
    price: 75,
    image: "item2.jpg"
  },
  {
    id: 3,
    name: "Item 3",
    description: "Description of item 3.",
    price: 15,
    image: "item3.jpg"
  }
];

let cart = [];

// // Functions
function showCart() {
  cartSection.style.display = "block";
}

function addToCart(event) {
  const button = event.target;
  if (button.tagName === "BUTTON") {
    const itemId = parseInt(button.dataset.id);
    const item = items.find(item => item.id === itemId);
    cart.push(item);
    displayCart();
  }
}

function sellItem(event) {
  event.preventDefault();
  const nameInput = document.querySelector("#item-name");
  const descriptionInput = document.querySelector("#item-description");
  const priceInput = document.querySelector("#item-price");
  const name = nameInput.value;
  const description = descriptionInput.value;
  const price = parseInt(priceInput.value);
  const id = items.length + 1;
  const item = {
    id: id,
    name: name,
    description: description,
    price: price,
    image: "placeholder.jpg"
  };
  items.push(item);
  nameInput.value = "";
  descriptionInput.value = "";
  priceInput.value = "";
  displayCart();
  }


function clearCart() {
cart = [];
displayCart();
}

function displayItems() {
buySection.innerHTML = "";
items.forEach(item => {
const itemDiv = document.createElement("div");
itemDiv.classList.add("item");
const img = document.createElement("img");
img.src = item.image;
const name = document.createElement("h3");
name.textContent = $$;{item.name};
const description = document.createElement("p");
description.textContent = item.description;
const price = document.createElement("p");
price.textContent = $$;{item.price};
const button = document.createElement("button");
button.textContent = "Add to cart";
button.dataset.id = item.id;
itemDiv.appendChild(img);
itemDiv.appendChild(name);
itemDiv.appendChild(description);
itemDiv.appendChild(price);
itemDiv.appendChild(button);
buySection.appendChild(itemDiv);
});
}

function displayCart() {
cartItems.innerHTML = "";
cart.forEach(item => {
const li = document.createElement("li");
li.textContent = item;
cartItems.appendChild(li);
});
const total = cart.reduce((acc, item) => acc + item.price, 0);
cartTotal.textContent = total;
}

// Initial display
// displayItems();