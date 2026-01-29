const products = {
    'canon_r10': {
        name: 'Canon EOS R10',
        price: '₹ 79,999',
        image: 'assets2/canonCam.png',
        desc: 'A mirrorless EOS R system that is compact and lightweight. Ideal for content creators and those looking to upgrade from a smartphone.',
        specs: ['24.2 MP APS-C Sensor', '4K 60p Video', 'Dual Pixel CMOS AF II', 'High-Speed Continuous Shooting']
    },
    'sony_a7iv': {
        name: 'Sony Alpha-7 IV',
        price: '₹ 2,29,999',
        image: 'assets2/sonyCam.png',
        desc: 'The benchmark for full-frame imagery. Exceptional image quality and speed for both photography and filmmaking.',
        specs: ['33 MP Full-Frame Sensor', '4K 60p 10-bit 4:2:2', 'Real-time Eye AF', '5-axis In-body Stabilization']
    },
    'nikon_z6ii': {
        name: 'Nikon Z6 II',
        price: '₹ 1,64,999',
        image: 'assets2/nikonCam.png',
        desc: 'More speed, higher resolution, and fluid autofocus. The Z6 II is an update to the all-rounder Z6.',
        specs: ['24.5 MP BSI Sensor', 'Dual Expeed 6 Processors', '14 fps Shooting', 'Eye-Detection AF']
    },
    'fujifilm_xt5': {
        name: 'Fujifilm X-T5',
        price: '₹ 1,39,999',
        image: 'assets2/fujifilmCam.png',
        desc: 'Photography first. The classic dial-based operation meets modern technology in this compact mirrorless camera.',
        specs: ['40.2 MP X-Trans CMOS 5 HR', 'In-Body Image Stabilization', '1/180,000s Shutter Speed', '3-Way Tilting LCD']
    },
    'canon_r5': {
        name: 'Canon EOS R5',
        price: '₹ 1,91,999',
        image: 'assets2/canonCam2.png',
        desc: 'Professional grade full-frame mirrorless. 8K video recording and 45 Megapixel stills.',
        specs: ['45 MP Full-Frame Sensor', '8K Raw Video', 'Up to 20 fps', 'Deep Learning AF']
    },
    'nikon_z50': {
        name: 'Nikon Z50',
        price: '₹ 89,999',
        image: 'assets2/nikonCam.png',
        desc: 'Small, lightweight, and powerful. The Z50 is a DX-format mirrorless camera designed for creativity.',
        specs: ['20.9 MP DX-Format Sensor', '11 fps Continuous Shooting', '4K UHD Video', 'Tilting Touchscreen']
    },
    'sony_a6700': {
        name: 'Sony Alpha 6700',
        price: '₹ 1,91,999',
        image: 'assets2/sonyCam.png',
        desc: 'The new generation of creativity on the go. High-tech AI processing unit for wider subject recognition.',
        specs: ['26 MP APS-C BSI Sensor', 'AI Auto-Focus', '4K 120p Recording', 'Compact Body']
    },
    'canon_r6m2': {
        name: 'Canon EOS R6 Mark II',
        price: '₹ 2,19,999',
        image: 'assets2/canonCam2.png',
        desc: 'Master of stills and motion. The hybrid camera that offers high-speed performance and high-quality imaging.',
        specs: ['24.2 MP Full-Frame Sensor', '40 fps Electronic Shutter', '6K Oversampled 4K 60p', 'Subject Detection AF']
    }
};

function loadProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = products[productId];

    if (product) {
        document.getElementById('p-image').src = product.image;
        document.getElementById('p-name').innerText = product.name;
        document.getElementById('p-price').innerText = product.price;
        document.getElementById('p-desc').innerText = product.desc;

        const specsList = document.getElementById('p-specs');
        specsList.innerHTML = '';
        product.specs.forEach(spec => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fa-solid fa-check"></i> ${spec}`;
            specsList.appendChild(li);
        });

        document.title = `${product.name} - CamMart`;

        // Add to Cart Button Logic
        const addToCartBtn = document.getElementById('add-to-cart-btn');
        addToCartBtn.onclick = () => addToCart(productId);

    } else {
        document.querySelector('.product-container').innerHTML = '<h2>Product not found. <a href="index2.html" style="color:#fff">Go back to Store</a></h2>';
    }
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('camMartCart')) || {};

    if (cart[productId]) {
        cart[productId]++;
    } else {
        cart[productId] = 1;
    }

    localStorage.setItem('camMartCart', JSON.stringify(cart));
    showNotification();
}

function showNotification() {
    const notification = document.getElementById('cart-notification');
    notification.classList.remove('hidden');

    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

window.onload = loadProduct;
