let products = document.querySelectorAll(".product");
let brandCheckBoxes = document.querySelectorAll(".brand-filter");
let categoryCheckBoxes = document.querySelectorAll(".category-filter");


brandCheckBoxes.forEach(cb => cb.addEventListener("change", filterProducts));
categoryCheckBoxes.forEach(cb => cb.addEventListener("change", filterProducts));

// Check for query parameters on load
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const brandParam = urlParams.get('brand');
    const categoryParam = urlParams.get('category');

    if (brandParam) {
        brandCheckBoxes.forEach(cb => {
            if (cb.value.toLowerCase() === brandParam.toLowerCase()) {
                cb.checked = true;
            }
        });
    }

    if (categoryParam) {
        categoryCheckBoxes.forEach(cb => {
            if (cb.value.toLowerCase() === categoryParam.toLowerCase()) {
                cb.checked = true;
            }
        });
    }

    if (brandParam || categoryParam) {
        filterProducts();
    }
});

function filterProducts() {

    const selectedBrands = Array.from(brandCheckBoxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    const selectedCategories = Array.from(categoryCheckBoxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    products.forEach(product => {
        const productBrand = product.dataset.brand;
        const productCategory = product.dataset.category;

        const brandMatch =
            selectedBrands.length === 0 ||
            selectedBrands.includes(productBrand);

        const categoryMatch =
            selectedCategories.length === 0 ||
            selectedCategories.includes(productCategory);

        if (brandMatch && categoryMatch) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

let log = document.querySelector(".header-actions");
setTimeout(() => {
    log.classList.add("show");
}, 500);