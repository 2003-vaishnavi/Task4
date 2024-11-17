const products = [
    { name: 'Dark Chocolate Bar', category: 'dark', price: 5.99, rating: 4.8 },
    { name: 'Milk Chocolate Bar',image: "https://vaya.in/recipes/wp-content/uploads/2018/02/Milk-Chocolate-1.jpg", category: 'milk', price: 4.49, rating: 4.5 },
    { name: 'White Chocolate Bar', category: 'white', price: 6.99, rating: 4.2 },
    { name: 'Chocolate Truffles', category: 'dark', price: 12.99, rating: 5.0 },
    { name: 'Milk Chocolate Pralines', category: 'milk', price: 8.49, rating: 4.7 },
];

const productList = document.getElementById('product-list');
const categorySelect = document.getElementById('category');
const priceSelect = document.getElementById('price');
const sortSelect = document.getElementById('sort');

const displayProducts = (filteredProducts) => {
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
            <p>Rating: ${product.rating} ★</p>
        `;
        productList.appendChild(productDiv);
    });
}

// Filter by category and price
const filterProducts = () => {
    let filteredProducts = products;
    const selectedCategory = categorySelect.value;
    const selectedPrice = priceSelect.value;

    if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    if (selectedPrice === 'low') {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (selectedPrice === 'high') {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    displayProducts(filteredProducts);
}

// Sort by rating
const sortProducts = () => {
    const selectedSort = sortSelect.value;
    const sortedProducts = [...products].sort((a, b) => {
        if (selectedSort === 'asc') return a.rating - b.rating;
        return b.rating - a.rating;
    });
    displayProducts(sortedProducts);
}

// Initial load
displayProducts(products);
