// Sample food data
const foodItems = [
    { id: 1, name: 'Burger', price: 10.99, image: 'IMAGES/istockphoto-burger.jpg' },
    { id: 2, name: 'Pizza', price: 12.99, image: 'IMAGES/istockphoto-pizza.jpg' },
    { id: 3, name: 'Pasta', price: 9.99, image: 'IMAGES/penne-pasta-tomato-.avif' },
    { id: 4, name: 'Testy chicken corma', price: 7.99, image: 'IMAGES/Testy chicken corma.jpeg' },
    { id: 5, name: 'Sushi', price: 15.99, image: 'IMAGES/California-rolls-sushi.webp' },
    { id: 6, name: 'Sandwich', price: 8.99, image: 'IMAGES/sandwich.avif' },
    { id: 7, name: 'Noodles', price: 11.99, image: 'IMAGES/noodles.jpeg' },
    { id: 8, name: 'Ice Cream', price: 6.99, image: 'IMAGES/icecrem.jpeg' },
    { id: 9, name: 'Tikka boti', price: 19.99, image: 'IMAGES/Tikka boty.jpg' },
    { id: 10, name: 'Tacos', price: 9.99, image: 'IMAGES/tacos.jpg' },
    { id: 11, name: 'Biryani', price: 13.99, image: 'IMAGES/360_F_912102578_biryani.jpg' },
    { id: 12, name: 'Dessert', price: 8.99, image: 'IMAGES/dessert.jpg' }
];

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count
function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

// Display food items
function displayFoodItems(items) {
    const foodGrid = document.getElementById('foodGrid');
    foodGrid.innerHTML = '';

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'food-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="food-card-content">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                <button onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        `;
        foodGrid.appendChild(card);
    });
}

// Add to cart function
function addToCart(id) {
    const item = foodItems.find(item => item.id === id);
    if (item) {
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert('Item added to cart!');
    }
}

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredItems = foodItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm)
    );
    displayFoodItems(filteredItems);
});

// Initial display
displayFoodItems(foodItems);
updateCartCount();