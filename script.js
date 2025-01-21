let products = [];

function addProduct() {
    const url = document.getElementById('product-url').value;
    if (url) {
        products.push(url);
        updateTable();
        document.getElementById('product-url').value = '';
    }
}

function updateTable() {
    const table = document.getElementById('comparison-table');
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';

    const features = {};

    products.forEach((product, index) => {
        const column = document.createElement('th');
        column.textContent = `Produit ${index + 1}`;
        table.querySelector('thead tr').appendChild(column);

        // Simuler des caractéristiques (temporaire, remplacé par un backend plus tard)
        const sampleFeatures = {
            Prix: `${Math.floor(Math.random() * 100)}€`,
            Qualité: `${Math.floor(Math.random() * 10)}/10`,
            "Durabilité": `${Math.floor(Math.random() * 5)} ans`,
        };

        for (const [key, value] of Object.entries(sampleFeatures)) {
            if (!features[key]) features[key] = [];
            features[key][index] = value;
        }
    });

    for (const [feature, values] of Object.entries(features)) {
        const row = document.createElement('tr');
        const featureCell = document.createElement('td');
        featureCell.textContent = feature;
        row.appendChild(featureCell);

        products.forEach((_, index) => {
            const valueCell = document.createElement('td');
            valueCell.textContent = values[index] || '-';
            row.appendChild(valueCell);
        });

        tbody.appendChild(row);
    }
}
