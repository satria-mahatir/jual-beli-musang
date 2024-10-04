// Daftar produk
const products = [
    {
        id: 1,
        name: "dika racing",
        price: 10000,
        image: "images/aib1.jpeg" // Ganti dengan nama file gambar yang sesuai
    },
    {
        id: 2,
        name: "regy tapa",
        price: 20000,
        image: "images/aib2.jpeg" // Ganti dengan nama file gambar yang sesuai
    },
    {
        id: 3,
        name: "riziq musang king",
        price: 15000,
        image: "images/aib3.jpg" // Ganti dengan nama file gambar yang sesuai
    },
    {
        id: 4,
        name: "dirly naruto",
        price: 12000,
        image: "images/aib4.jpg" // Ganti dengan nama file gambar yang sesuai
    },
    {
        id: 5,
        name: "brenda music",
        price: 18000,
        image: "images/aib5.jpg" // Ganti dengan nama file gambar yang sesuai
    },
    {
        id: 6,
        name: "musang headset",
        price: 22000,
        image: "images/aib6.jpg" // Ganti dengan nama file gambar yang sesuai
    },
    {
        id: 7,
        name: "kakashi musang",
        price: 16000,
        image: "images/aib7.jpg" // Ganti dengan nama file gambar yang sesuai
    },
    {
        id: 8,
        name: "musang lord minum",
        price: 25000,
        image: "images/aib8.jpg" // Ganti dengan nama file gambar yang sesuai
    }
];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const checkoutButton = document.getElementById("checkout-button");

let cart = [];

// produk di halaman
function displayProducts() {
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Rp ${product.price}</p>
            <button onclick="addToCart(${product.id})">Tambahkan ke Keranjang</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Menambahkan produk ke keranjang
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
}

// tampilan keranjang
function updateCart() {
    cartItems.innerHTML = "";
    let totalPrice = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        const li = document.createElement("li");
        li.innerText = `${item.name} (x${item.quantity}) - Rp ${itemTotal}`;
        cartItems.appendChild(li);
    });

    if (cart.length === 0) {
        cartItems.innerHTML = "<li>Keranjang Anda Kosong</li>";
        checkoutButton.disabled = true;
    } else {
        checkoutButton.disabled = false;
    }

    totalPriceElement.innerText = `Total: Rp ${totalPrice}`;
}

displayProducts();
