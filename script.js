

document.addEventListener("DOMContentLoaded", function() {
    fetch('div-content.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('importedDiv').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
});