const funcoes = [
    document.getElementById().style.display="none",
    () => console.log('Função 2'),
    () => console.log('Função 3')
];

document.addEventListener("DOMContentLoaded", function() {
    fetch('inicial.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('inicial').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
});



    
document.addEventListener("DOMContentLoaded", function format() {
    fetch('format.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('format').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
});


