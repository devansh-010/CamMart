// Product Database (Duplicated from script4.js to map IDs to visuals)
const productsDB = {
    'canon_r10': {
        name: 'Canon EOS R10',
        price: '₹ 79,999',
        priceVal: 79999,
        image: 'assets2/canonCam.png'
    },
    'sony_a7iv': {
        name: 'Sony Alpha-7 IV',
        price: '₹ 2,29,999',
        priceVal: 229999,
        image: 'assets2/sonyCam.png'
    },
    'nikon_z6ii': {
        name: 'Nikon Z6 II',
        price: '₹ 1,64,999',
        priceVal: 164999,
        image: 'assets2/nikonCam.png'
    },
    'fujifilm_xt5': {
        name: 'Fujifilm X-T5',
        price: '₹ 1,39,999',
        priceVal: 139999,
        image: 'assets2/fujifilmCam.png'
    },
    'canon_r5': {
        name: 'Canon EOS R5',
        price: '₹ 1,91,999',
        priceVal: 191999,
        image: 'assets2/canonCam2.png'
    },
    'nikon_z50': {
        name: 'Nikon Z50',
        price: '₹ 89,999',
        priceVal: 89999,
        image: 'assets2/nikonCam.png'
    },
    'sony_a6700': {
        name: 'Sony Alpha 6700',
        price: '₹ 1,91,999',
        priceVal: 191999,
        image: 'assets2/sonyCam.png'
    },
    'canon_r6m2': {
        name: 'Canon EOS R6 Mark II',
        price: '₹ 2,19,999',
        priceVal: 219999,
        image: 'assets2/canonCam2.png'
    }
};

// Utils: Format Currency
function formatCurrency(amount) {
    return '₹ ' + amount.toLocaleString('en-IN');
}

// State
let cart = JSON.parse(localStorage.getItem('camMartCart')) || {};

// Function to render cart
function renderCart() {
    const container = document.getElementById('cart-items-container');
    container.innerHTML = ''; // Clear current

    const productIds = Object.keys(cart);

    if (productIds.length === 0) {
        container.innerHTML = '<p class="empty-cart-msg">Your cart is empty. <a href="index2.html" style="color:#fff">Go Shop</a></p>';
        updateSummary(0);
        return;
    }

    let subtotal = 0;

    productIds.forEach(id => {
        const itemQty = cart[id];
        const product = productsDB[id];

        if (product) {
            const itemTotal = product.priceVal * itemQty;
            subtotal += itemTotal;

            const card = document.createElement('div');
            card.className = 'cart-item';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="item-details">
                    <h3>${product.name}</h3>
                    <p class="item-price">${product.price}</p>
                    
                    <div class="item-controls">
                        <div class="qty-selector">
                            <button class="qty-btn" onclick="updateQuantity('${id}', -1)"><i class="fa-solid fa-minus"></i></button>
                            <span class="qty-val">${itemQty}</span>
                            <button class="qty-btn" onclick="updateQuantity('${id}', 1)"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <button class="remove-btn" onclick="removeItem('${id}')">Remove</button>
                    </div>
                </div>
                <div class="total-price-display">
                    ${formatCurrency(itemTotal)}
                </div>
            `;
            container.appendChild(card);
        }
    });

    updateSummary(subtotal);
}

// Function to update quantity
window.updateQuantity = function (id, change) {
    if (cart[id]) {
        cart[id] += change;
        if (cart[id] < 1) cart[id] = 1; // Min 1
        saveCart();
        renderCart();
    }
}

// Function to remove item
window.removeItem = function (id) {
    delete cart[id];
    saveCart();
    renderCart();
}

// Function to save cart
function saveCart() {
    localStorage.setItem('camMartCart', JSON.stringify(cart));
}

// Update Summary
function updateSummary(subtotal) {
    document.getElementById('subtotal').innerText = formatCurrency(subtotal);
    // Shipping is calculated at checkout per design, currently just showing total
    document.getElementById('total').innerText = formatCurrency(subtotal);
}

// Init
window.onload = renderCart;
