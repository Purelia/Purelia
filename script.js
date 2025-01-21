// Variables globales
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
      analyzeWithAI();  // Lancer l'analyse IA après chaque ajout de produit
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

// Fonction pour analyser les produits avec une IA simulée
function analyzeWithAI() {
  // Cette fonction analyse les produits et affiche les résultats sur la page

  let bestValueForMoney = products[0];
  let healthiestProduct = products[0];
  let bestQualityProduct = products[0];

  products.forEach(product => {
    // Simple logique de comparaison pour illustration
    if (parseFloat(product.characteristics['Prix']) < parseFloat(bestValueForMoney.characteristics['Prix'])) {
      bestValueForMoney = product;
    }

    if (product.characteristics['Sain'] === 'Oui' && healthiestProduct.characteristics['Sain'] === 'Non') {
      healthiestProduct = product;
    }

    if (product.characteristics['Durabilité'] === 'Haute') {
      bestQualityProduct = product;
    }
  });

  // Affichage des résultats de l'analyse IA dans les sections
  document.getElementById('best-value-for-money').innerHTML = `<strong>Meilleur rapport qualité/prix:</strong> ${bestValueForMoney.name}`;
  document.getElementById('healthiest-product').innerHTML = `<strong>Produit le plus sain:</strong> ${healthiestProduct.name}`;
  document.getElementById('best-quality-product').innerHTML = `<strong>Produit de meilleure qualité:</strong> ${bestQualityProduct.name}`;
}

// Exemple d'intégration pour l'offre la moins chère
document.getElementById('cheapest-offer-link').href = "https://example.com";
