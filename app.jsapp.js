const form = document.getElementById('product-search-form');

form.addEventListener('change', () => {
  const ancho = document.getElementById('ancho').value;
  const aro = document.getElementById('aro').value;
  const perfil = document.getElementById('perfil').value;
  const marca = document.getElementById('marca').value;

  // Filter the products based on the selected attributes
  const filteredProducts = products.filter(product => {
    return (
      (ancho === '' || product.ancho === ancho) &&
      (aro === '' || product.aro === aro) &&
      (perfil === '' || product.perfil === perfil) &&
      (marca === '' || product.marca === marca)
    );
  });

  // Display the filtered products
  displayProducts(filteredProducts);
});

// Sample data
const products = [
  {
    ancho: 'option-1',
    aro: 'option-1',
    perfil: 'option-1',
