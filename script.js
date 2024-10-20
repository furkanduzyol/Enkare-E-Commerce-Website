// Script for navigation bar
const bar= document.getElementById('bar');
const nav = document.getElementById('navbar');

const close = document.getElementById('close');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

const products = [
    {
        "id": 1,
        "name": "Ürün1",
        "price": 8900.00,
        "image": "img/products/product1.1.webp"
    },
    {
        "id": 2,
        "name": "Ürün2",
        "price": 11900.00,
        "image": "img/products/product2.1.webp"
    },
    {
        "id": 3,
        "name": "Ürün3",
        "price": 7747.86,
        "image": "img/products/product3.1.webp"
    },
    {
        "id": 4,
        "name": "Ürün4",
        "price": 9373.94,
        "image": "img/products/product4.1.webp"
    },
    {
        "id": 5,
        "name": "Ürün5",
        "price": 9999.00,
        "image": "img/products/product5.1.webp"
    },
    {
        "id": 6,
        "name": "Ürün6",
        "price": 8900.00,
        "image": "img/products/product6.1.webp"
    },
    {
        "id": 7,
        "name": "Ürün7",
        "price": 8900.00,
        "image": "img/products/product7.1.webp"
    },
    {
        "id": 8,
        "name": "Ürün8",
        "price": 8900.00,
        "image": "img/products/product8.1.webp"
    },
    {
        "id": 9,
        "name": "Ürün9",
        "price": 5499.00,
        "image": "img/products/product9.1.webp"
    },
    {
        "id": 10,
        "name": "Ürün10",
        "price": 5499.00,
        "image": "img/products/product10.1.webp"
    },
    {
        "id": 11,
        "name": "Ürün11",
        "price": 5499.00,
        "image": "img/products/product11.1.webp"
    },
    {
        "id": 12,
        "name": "Ürün12",
        "price": 5499.00,
        "image": "img/products/product12.1.webp"
    },
    {
        "id": 13,
        "name": "Ürün13",
        "price": 8900.00,
        "image": "img/products/product13.1.webp"
    }
];

// Function to get cart from localStorage or initialize it
function getCart() {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
}

// Initialize cart from localStorage
let cart = getCart();

// Function to save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to render the cart
function renderCart() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; // Clear existing content

    let total = 0;

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="#" class="remove" data-id="${item.id}"><i class="far fa-times-circle"></i></a></td>
            <td><img src="${item.image}" alt=""></td>
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><input type="number" value="${item.quantity}" min="0" class="quantity" data-id="${item.id}"></td>
            <td>$${subtotal.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });

    // Update total
    const subtotalElement = document.querySelector('#subtotal table');
    subtotalElement.innerHTML = `
        <tr>
            <td>Cart Subtotal</td>
            <td>$ ${total.toFixed(2)}</td>
        </tr>
        <tr>
            <td>Shipping</td>
            <td>Free</td>
        </tr>
        <tr>
            <td><strong>Total</strong></td>
            <td><strong>$ ${total.toFixed(2)}</strong></td>
        </tr>
    `;
}

// Function to handle quantity change
function handleQuantityChange(event) {
    const input = event.target;
    const id = parseInt(input.dataset.id);
    const quantity = parseInt(input.value);

    if (quantity < 0) return; // Prevent negative quantities

    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        if (quantity === 0) {
            // Remove item if quantity is zero
            cart.splice(itemIndex, 1);
        } else {
            // Update quantity
            cart[itemIndex].quantity = quantity;
        }
        saveCart(); // Save cart to localStorage after changes
    }

    renderCart();
}

// Function to handle remove item
function handleRemoveItem(event) {
    event.preventDefault();
    const id = parseInt(event.currentTarget.dataset.id);
    cart = cart.filter(item => item.id !== id);
    saveCart(); // Save cart to localStorage after removing item
    renderCart();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    renderCart();

    document.querySelector('tbody').addEventListener('input', (event) => {
        if (event.target.classList.contains('quantity')) {
            handleQuantityChange(event);
        }
    });

    document.querySelector('tbody').addEventListener('click', (event) => {
        const removeLink = event.target.closest('a.remove');
        if (removeLink) {
            alert('1');
            handleRemoveItem(event);
        }
    });
});


//Kinda working but not sure
function addToCart(productId) {
    // Find the product based on its id
    const product = products.find(item => item.id === productId);

    // Check if product is already in the cart
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        // If product already exists in the cart, increase quantity
        existingProduct.quantity += 1;
    } else {
        // If product doesn't exist in the cart, add it with a quantity of 1
        cart.push({
            ...product,
            quantity: 1
        });
    }

    // Save updated cart to localStorage
    saveCart();
    renderCart(); // Update the UI
}

// Event listener for "Sepete Ekle" button
document.querySelectorAll('.addCart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productId = parseInt(event.target.dataset.id);
        addToCart(productId);
    });
});
