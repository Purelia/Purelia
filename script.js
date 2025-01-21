// script.js
let products = [];
let characteristics = [
  'Prix', 'Composants', 'Poids', 'Dimensions', 'Durabilité', 'Sain'
];

function addProduct() {
  let url = document.getElementById('product-url').value;
  if (url) {
    fetchProductData(url).then(product => {
      products.push(product);
      updateComparisonTable();
    });
  }
}

function fetchProductData(url) {
  // Exemple fictif de récupération de données depuis une URL de produit
  // Remplacez ce code par l'intégration réelle de l'API ou des données du produit
  return new Promise((resolve) => {
    let product = {
      name: `Produit ${products.length + 1}`,
      characteristics: {
        'Prix': `${Math.random() * 100}€`,
        'Composants': 'Exemple Composant 1, Composant 2',
        'Poids': `${(Math.random() * 10).toFixed(2)} kg`,
        'Dimensions': `${(Math.random() * 50).toFixed(1)} x ${(Math.random() * 50).toFixed(1)} cm`,
        'Durabilité': `${Math.random() > 0.5 ? 'Haute' : 'Moyenne'}`,
        'Sain': `${Math.random() > 0.5 ? 'Oui' : 'Non'}`
      }
    };
    resolve(product);
  });
}

function updateComparisonTable() {
  // Mise à jour des colonnes du tableau
  const tableHead = document.querySelector('#comparison-table thead');
  const tableBody = document.querySelector('#comparison-table tbody');

  // Ajouter une colonne pour chaque produit
  let headerRow = '<th>Caractéristiques</th>';
  products.forEach(product => {
    headerRow += `<th>${product.name}</th>`;
  });
  tableHead.innerHTML = headerRow;

  // Ajouter les lignes des caractéristiques
  let bodyRows = '';
  characteristics.forEach(characteristic => {
    let row = `<td>${characteristic}</td>`;
    products.forEach(product => {
      row += `<td>${product.characteristics[characteristic]}</td>`;
    });
    bodyRows += `<tr>${row}</tr>`;
  });
  tableBody.innerHTML = bodyRows;
}

// Simuler l'analyse IA (cette partie devra être intégrée avec une solution IA réelle)
document.getElementById('ai-analysis').innerHTML = `
  <h3>Analyse par IA</h3>
  <p><strong>Meilleur rapport qualité/prix:</strong> Produit 1</p>
  <p><strong>Produit le plus sain:</strong> Produit 2</p>
  <p><strong>Produit de meilleure qualité:</strong> Produit 3</p>
`;

document.getElementById('cheapest-offer-link').href = "https://example.com";
