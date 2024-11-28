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
        "name": "Elisa Masa Sandalye Takımı, 4 Kişilik Mutfak Masası",
        "price": 8900.00,
        "image": "img/4kişilik fotolar/4.1.1.jpg"
    },
    {
        "id": 2,
        "name": "Beyaz Küçük Mdf Masa, Elisa Sandalye Takımı",
        "price": 11900.00,
        "image": "img/4kişilik fotolar/4.2.1.jpg"
    },
    {
        "id": 3,
        "name": "Küçük Mdf Masa Takımı Vegas Düğün Sandalyesi",
        "price": 7747.86,
        "image": "img/4kişilik fotolar/4.3.1.jpg"
    },
    {
        "id": 4,
        "name": "Papatya Masa Sandalye Takımı, Mutfak Masası,",
        "price": 9373.94,
        "image": "img/4kişilik fotolar/4.4.1.jpg"
    },
    {
        "id": 5,
        "name": "Badem Masa Sandalye Takımı,4 Kişilik Mutfak Masası",
        "price": 9999.00,
        "image": "img/4kişilik fotolar/4.5.1.jpg"
    },
    {
        "id": 6,
        "name": "Gri Elisa Masa Sandalye Takımı, Mutfak Masası",
        "price": 8900.00,
        "image": "img/4kişilik fotolar/4.6.1.jpg"
    },
    {
        "id": 7,
        "name": "Antrasit Elisa Masa Sandalye Takımı,yuvarlak ",
        "price": 8900.00,
        "image": "img/4kişilik fotolar/4.7.1.jpg"
    },
    {
        "id": 8,
        "name": "Elisa Masa Sandalye Takımı, 4 Kişilik Mutfak Masası",
        "price": 8900.00,
        "image": "img/4kişilik fotolar/4.8.1.jpg"
    },
    {
        "id": 9,
        "name": "Beyaz Ayaklı Çam Desen Küçük Mdf Masa, Açılabilir",
        "price": 5499.00,
        "image": "img/4kişilik fotolar/4.9.1.jpg"
    },
    {
        "id": 10,
        "name": "Siyah Ayaklı Çam Desen Küçük Mdf Masa, Açılabilir Mutfak",
        "price": 5499.00,
        "image": "img/4kişilik fotolar/4.10.1.jpg"
    },
    {
        "id": 11,
        "name": "Beyaz Ayaklı Küçük Mdf Masa, Açılabilir Mutfak Masası",
        "price": 5499.00,
        "image": "img/4kişilik fotolar/4.11.1.jpg"
    },
    {
        "id": 12,
        "name": "Siyah Ayaklı Küçük Mdf Masa, Açılabilir Mutfak Masası",
        "price": 5499.00,
        "image": "img/4kişilik fotolar/4.12.1.jpg"
    },
    {
        "id": 13,
        "name": "Karamel Elisa Masa Sandalye Takımı, 4 Kişilik ",
        "price": 8900.00,
        "image": "img/4kişilik fotolar/4.13.1.jpg"
    },
    {
        "id": 14,
        "name": "Elisa Masa Sandalye Takımı, 4 Kişilik Mutfak Masası",
        "price": 8900.00,
        "image": "img/4kişilik fotolar/4.14.1.jpg"
    },
    {
        "id": 15,
        "name": "Beyaz Küçük Mdf Masa, Elisa Sandalye Takımı",
        "price": 11900.00,
        "image": "img/4kişilik fotolar/4.15.1.jpg"
    },
    {
        "id": 16,
        "name": "Küçük Mdf Masa Takımı Vegas Düğün Sandalyesi",
        "price": 7747.86,
        "image": "img/4kişilik fotolar/4.16.1.jpg"
    },
    {
        "id": 17,
        "name": "Papatya Masa Sandalye Takımı, Mutfak Masası, ",
        "price": 9373.94,
        "image": "img/4kişilik fotolar/4.17.1.jpg"
    },
    {
        "id": 18,
        "name": "Badem Masa Sandalye Takımı,4 Kişilik Mutfak Masası",
        "price": 9999.00,
        "image": "img/4kişilik fotolar/4.18.1.jpg"
    },
    {
        "id": 19,
        "name": "Gri Elisa Masa Sandalye Takımı, Mutfak Masası",
        "price": 8900.00,
        "image": "img/4kişilik fotolar/4.19.1.jpg"
    },
    {
        "id": 20,
        "name": "Antrasit Elisa Masa Sandalye Takımı,yuvarlak",
        "price": 8900.00,
        "image": "img/4kişilik fotolar/4.20.1.jpg"
    },
    {
        "id": 21,
        "name": "Elisa Masa Sandalye Takımı, 4 Kişilik Mutfak Masası",
        "price": 8900.00,
        "image": "img/4kişilik fotolar/4.21.1.jpg"
    },
    {
        "id": 22,
        "name": "Beyaz Ayaklı Çam Desen Küçük Mdf Masa, Açılabilir",
        "price": 5499.00,
        "image": "img/4kişilik fotolar/4.22.1.jpg"
    },
    {
        "id": 23,
        "name": "Siyah Ayaklı Çam Desen Küçük Mdf Masa, Açılabilir",
        "price": 5499.00,
        "image": "img/4kişilik fotolar/4.23.1.jpg"
    },
    {
        "id": 24,
        "name": "Elisa Masa Sandalye Takımı, 4 Kişilik Mutfak Masası",
        "price": 8900.00,
        "image": "img/4kişilik fotolar/4.24.1.jpg"
    },
    {
        "id": 25,
        "name": "Beyaz Küçük Mdf Masa, Elisa Sandalye Takımı",
        "price": 11900.00,
        "image": "img/4kişilik fotolar/4.25.1.jpg"
    },
    {
        "id": 26,
        "name": "Küçük Mdf Masa Takımı Vegas Düğün Sandalyesi",
        "price": 7747.86,
        "image": "img/6kişilik fotolar/6.1.1.jpg"
    },
    {
        "id": 27,
        "name": "Papatya Masa Sandalye Takımı, Mutfak Masası, ",
        "price": 9373.94,
        "image": "img/6kişilik fotolar/6.2.1.jpg"
    },
    {
        "id": 28,
        "name": "Badem Masa Sandalye Takımı,4 Kişilik Mutfak Masası",
        "price": 9999.00,
        "image": "img/6kişilik fotolar/6.3.1.jpg"
    },
    {
        "id": 29,
        "name": "Gri Elisa Masa Sandalye Takımı, Mutfak Masası",
        "price": 8900.00,
        "image": "img/6kişilik fotolar/6.4.1.jpg"
    },
    {
        "id": 30,
        "name": "Antrasit Elisa Masa Sandalye Takımı,yuvarlak ",
        "price": 8900.00,
        "image": "img/6kişilik fotolar/6.5.1.jpg"
    },
    {
        "id": 31,
        "name": "Elisa Masa Sandalye Takımı, 4 Kişilik Mutfak Masası",
        "price": 8900.00,
        "image": "img/6kişilik fotolar/6.6.1.jpg"
    },
    {
        "id": 32,
        "name": "Beyaz Ayaklı Çam Desen Küçük Mdf Masa, Açılabilir ",
        "price": 5499.00,
        "image": "img/6kişilik fotolar/6.7.1.jpg"
    },
    {
        "id": 33,
        "name": "Siyah Ayaklı Çam Desen Küçük Mdf Masa, Açılabilir Mutfak",
        "price": 5499.00,
        "image": "img/6kişilik fotolar/6.8.1.jpg"
    },
    {
        "id": 34,
        "name": "Beyaz Küçük Mdf Masa, Elisa Sandalye Takımı",
        "price": 11900.00,
        "image": "img/6kişilik fotolar/6.9.1.jpg"
    },
    {
        "id": 35,
        "name": "Küçük Mdf Masa Takımı Vegas Düğün Sandalyesi",
        "price": 7747.86,
        "image": "img/6kişilik fotolar/6.10.1.jpg"
    },
    {
        "id": 36,
        "name": "Papatya Masa Sandalye Takımı, Mutfak Masası,",
        "price": 9373.94,
        "image": "img/6kişilik fotolar/6.11.1.jpg"
    },
    {
        "id": 37,
        "name": "Badem Masa Sandalye Takımı,4 Kişilik Mutfak Masası",
        "price": 9999.00,
        "image": "img/6kişilik fotolar/6.12.1.jpg"
    },
    {
        "id": 38,
        "name": "Gri Elisa Masa Sandalye Takımı, Mutfak Masası",
        "price": 8900.00,
        "image": "img/6kişilik fotolar/6.13.1.jpg"
    },
    {
        "id": 39,
        "name": "Antrasit Elisa Masa Sandalye Takımı,yuvarlak ",
        "price": 8900.00,
        "image": "img/6kişilik fotolar/6.14.1.jpg"
    },
    {
        "id": 40,
        "name": "Elisa Masa Sandalye Takımı, 4 Kişilik Mutfak Masası",
        "price": 8900.00,
        "image": "iimg/6kişilik fotolar/6.15.1.jpg"
    },
    {
        "id": 41,
        "name": "Beyaz Ayaklı Çam Desen Küçük Mdf Masa, Açılabilir",
        "price": 5499.00,
        "image": "img/6kişilik fotolar/6.16.1.jpg"
    },
    {
        "id": 42,
        "name": "Siyah Ayaklı Çam Desen Küçük Mdf Masa, Açılabilir",
        "price": 5499.00,
        "image": "iimg/6kişilik fotolar/6.17.1.jpg"
    },
    {
        "id": 43,
        "name": "Elisa Masa Sandalye Takımı, 4 Kişilik Mutfak Masası",
        "price": 8900.00,
        "image": "img/6kişilik fotolar/6.18.1.jpg"
    },
    {
        "id": 44,
        "name": "Beyaz Küçük Mdf Masa, Elisa Sandalye Takımı",
        "price": 11900.00,
        "image": "img/6kişilik fotolar/6.19.1.jpg"
    },
    {
        "id": 45,
        "name": "Küçük Mdf Masa Takımı Vegas Düğün Sandalyesi",
        "price": 7747.86,
        "image": "img/6kişilik fotolar/6.20.1.jpg"
    },
    {
        "id": 46,
        "name": "Papatya Masa Sandalye Takımı, Mutfak Masası, ",
        "price": 9373.94,
        "image": "img/6kişilik fotolar/6.21.1.jpg"
    },
    {
        "id": 47,
        "name": "Badem Masa Sandalye Takımı,4 Kişilik Mutfak Masası",
        "price": 9999.00,
        "image": "img/6kişilik fotolar/6.22.1.jpg"
    },
    {
        "id": 48,
        "name": "Gri Elisa Masa Sandalye Takımı, Mutfak Masası",
        "price": 8900.00,
        "image": "img/6kişilik fotolar/6.23.1.jpg"
    },
    {
        "id": 49,
        "name": "Antrasit Elisa Masa Sandalye Takımı,yuvarlak ",
        "price": 8900.00,
        "image": "iimg/6kişilik fotolar/6.24.1.jpg"
    },
    {
        "id": 50,
        "name": "Elisa Masa Sandalye Takımı, 4 Kişilik Mutfak Masası",
        "price": 8900.00,
        "image": "img/6kişilik fotolar/6.25.1.jpg"
    },
    {
        "id": 51,
        "name": "Beyaz Ayaklı Çam Desen Küçük Mdf Masa, Açılabilir ",
        "price": 5499.00,
        "image": "img/6kişilik fotolar/6.26.1.jpg"
    },
    {
        "id": 52,
        "name": "Siyah Ayaklı Çam Desen Küçük Mdf Masa, Açılabilir Mutfak",
        "price": 5499.00,
        "image": "img/6kişilik fotolar/6.27.1.jpg"
    },
    {
        "id": 53,
        "name": "Elisa Masa Sandalye Takımı, 4 Kişilik Mutfak Masası",
        "price": 8900.00,
        "image": "img/6kişilik fotolar/6.28.1.jpg"
    },
    {
        "id": 54,
        "name": "Beyaz Küçük Mdf Masa, Elisa Sandalye Takımı",
        "price": 11900.00,
        "image": "iimg/6kişilik fotolar/6.29.1.jpg"
    },
    {
        "id": 55,
        "name": "Küçük Mdf Masa Takımı Vegas Düğün Sandalyesi",
        "price": 7747.86,
        "image": "img/6kişilik fotolar/6.30.1.jpg"
    },
    {
        "id": 56,
        "name": "Papatya Masa Sandalye Takımı, Mutfak Masası,",
        "price": 9373.94,
        "image": "img/6kişilik fotolar/6.31.1.jpg"
    },
    {
        "id": 57,
        "name": "Badem Masa Sandalye Takımı,4 Kişilik Mutfak Masası",
        "price": 9999.00,
        "image": "img/6kişilik fotolar/6.32.1.jpg"
    },
    {
        "id": 58,
        "name": "Gri Elisa Masa Sandalye Takımı, Mutfak Masası",
        "price": 8900.00,
        "image": "img/6kişilik fotolar/6.33.1.jpg"
    },
    {
        "id": 59,
        "name": "Antrasit Elisa Masa Sandalye Takımı,yuvarlak",
        "price": 8900.00,
        "image": "img/6kişilik fotolar/6.34.1.jpg"
    },
    {
        "id": 60,
        "name": "Elisa Masa Sandalye Takımı, 4 Kişilik Mutfak Masası",
        "price": 8900.00,
        "image": "img/6kişilik fotolar/6.35.1.jpg"
    },
    {
        "id": 61,
        "name": "Beyaz Ayaklı Çam Desen Küçük Mdf Masa, Açılabilir",
        "price": 5499.00,
        "image": "img/6kişilik fotolar/6.36.1.jpg"
    },
    {
        "id": 62,
        "name": "Siyah Ayaklı Çam Desen Küçük Mdf Masa, Açılabilir Mutfak",
        "price": 5499.00,
        "image": "img/balkonbahce/8.1.1.jpg"
    },
    {
        "id": 63,
        "name": "Elisa Masa Sandalye Takımı, 4 Kişilik Mutfak Masası",
        "price": 8900.00,
        "image": "img/balkonbahce/8.2.1.jpg"
    },
    {
        "id": 64,
        "name": "Beyaz Küçük Mdf Masa, Elisa Sandalye Takımı",
        "price": 11900.00,
        "image": "img/balkonbahce/8.3.1.jpg"
    },
    {
        "id": 65,
        "name": "Küçük Mdf Masa Takımı Vegas Düğün Sandalyesi",
        "price": 7747.86,
        "image": "img/balkonbahce/8.4.1.jpg"
    },
    {
        "id": 66,
        "name": "Papatya Masa Sandalye Takımı, Mutfak Masası, Deri Sandalye",
        "price": 9373.94,
        "image": "img/balkonbahce/8.5.1.jpg"
    },
    {
        "id": 67,
        "name": "Badem Masa Sandalye Takımı,4 Kişilik Mutfak Masası",
        "price": 9999.00,
        "image": "img/balkonbahce/8.6.1.jpg"
    },
    {
        "id": 68,
        "name": "Gri Elisa Masa Sandalye Takımı, Mutfak Masası",
        "price": 8900.00,
        "image": "img/balkonbahce/8.7.1.jpg"
    },
    {
        "id": 69,
        "name": "Antrasit Elisa Masa Sandalye Takımı,yuvarlak Mutfak Masası",
        "price": 8900.00,
        "image": "img/balkonbahce/8.8.1.jpg"
    },
    {
        "id": 70,
        "name": "Elisa Masa Sandalye Takımı, 4 Kişilik Mutfak Masası",
        "price": 8900.00,
        "image": "img/balkonbahce/8.9.1.jpg"
    },
    {
        "id": 71,
        "name": "Beyaz Ayaklı Çam Desen Küçük Mdf Masa, Açılabilir ",
        "price": 5499.00,
        "image": "img/balkonbahce/8.10.1.jpg"
    },
    {
        "id": 72,
        "name": "Siyah Ayaklı Çam Desen Küçük Mdf Masa, Açılabilir Mutfak",
        "price": 5499.00,
        "image": "img/balkonbahce/8.11.1.jpg"
    },
    {
        "id": 73,
        "name": "Elisa Masa Sandalye Takımı, 4 Kişilik Mutfak Masası",
        "price": 8900.00,
        "image": "img/balkonbahce/8.12.1.jpg"
    },
    {
        "id": 74,
        "name": "Beyaz Ayaklı Çam Desen Küçük Mdf Masa, Açılabilir",
        "price": 5499.00,
        "image": "img/balkonbahce/8.13.1.jpg"
    },
    {
        "id": 75,
        "name": "Siyah Ayaklı Çam Desen Küçük Mdf Masa, Açılabilir Mutfak",
        "price": 5499.00,
        "image": "img/balkonbahce/8.14.1.jpg"
    },
    {
        "id": 76,
        "name": "Elisa Masa Sandalye Takımı, 4 Kişilik Mutfak Masası",
        "price": 8900.00,
        "image": "img/balkonbahce/8.15.1.jpg"
    },
    {
        "id": 77,
        "name": "Elisa Masa Sandalye Takımı, 4 Kişilik Mutfak Masası",
        "price": 8900.00,
        "image": "img/balkonbahce/8.16.1.jpg"
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
/*
function handleRemoveItem(event) {
    event.preventDefault();
    const id = parseInt(event.currentTarget.dataset.id);
    const itemIndex = cart.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1); // Remove the item at the specified index
        saveCart(); // Save cart to localStorage after removing the item
        renderCart(); // Re-render the cart
    }
}*/

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
        //const itemIndex1 = cart.findIndex(item => item.id === id);
        if (removeLink) {
            //cart.splice(itemIndex, 1);
            alert('1');   
            handleRemoveItem(event);
        }
    });
});



function handleAddToCart(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const quantity = quantityInput ? quantityInput.value : 1; // Default to 1 if input is not found
    addToCart(productId, quantity);
}



//Kinda working but not sure
function addToCart(productId, quantity) {
    // Find the product based on its id
    const product = products.find(item => item.id === productId);

    if (!product) {
        console.error("Product not found");
        return;
    }

    // Check if product is already in the cart
    const existingProduct = cart.find(item => item.id === productId);

    const quantityToAdd = parseInt(quantity, 10); // Ensure quantity is a number

    if (existingProduct) {
        // If product already exists in the cart, increase quantity
        existingProduct.quantity += quantityToAdd;
    } else {
        // If product doesn't exist in the cart, add it with the specified quantity
        cart.push({
            ...product,
            quantity: quantityToAdd
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
