document.getElementById('searchBar').addEventListener('input', function(e) {
    let filter = e.target.value.toLowerCase();
    let products = document.querySelectorAll('.product');

    products.forEach(product => {
        let text = product.textContent.toLowerCase();
        if (text.includes(filter)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
});