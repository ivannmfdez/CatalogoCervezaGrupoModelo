const products = [
    { id: 1, name: "3005860", description: "BDUNKELWEIZEN<br>6 PK 24/355 ML CT", image: "images/3010758.png" },
    { id: 2, name: "Producto B", description: "Descripción del Producto B", image: "images/3010758.png" },
    { id: 3, name: "Producto C", description: "Descripción del Producto C", image: "images/3010758.png" }
];

const searchInput = document.getElementById('search-bar');
const productList = document.getElementById('product-list');

// Mostrar todos los productos al cargar la página
displayProducts(products);

function displayProducts(products) {
    productList.innerHTML = ''; // Limpiar la lista de productos
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item'; // Asegúrate de usar la clase correcta aquí

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name; // Añade un texto alternativo

        const title = document.createElement('h2');
        title.textContent = product.name;

        const desc = document.createElement('p');
        desc.innerHTML = product.description.replace(/\n/g, "<br>");

        productDiv.appendChild(img);
        productDiv.appendChild(title);
        productDiv.appendChild(desc);

        productList.appendChild(productDiv);
    });
}
function filterProducts(category) {
    // Obtener todos los productos
    const products = document.querySelectorAll('.product');
    
    // Iterar sobre cada producto
    products.forEach(product => {
        // Obtener la categoría del producto
        const productCategory = product.getAttribute('data-category');
        
        // Mostrar u ocultar el producto según la categoría
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block'; // Mostrar
        } else {
            product.style.display = 'none';  // Ocultar
        }
    });
}

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach((item, index) => {
        const productName = products[index].name.toLowerCase();
        const productDesc = products[index].description.toLowerCase();

        if (productName.includes(searchTerm) || productDesc.includes(searchTerm)) {
            item.style.display = 'block'; // Mostrar producto si coincide
        } else {
            item.style.display = 'none'; // Ocultar producto si no coincide
        }
    });
});
