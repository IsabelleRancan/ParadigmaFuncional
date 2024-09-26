// Função para buscar dados de uma API e exibi-los em um container específico
function fetchData(url, containerId) {
    fetch(url)
        .then(response => {
            console.log('Status da resposta:', response.status);
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Dados recebidos:', data);
            const container = document.getElementById(containerId);
            const list = document.createElement('ul');

            // Para cada chave no objeto de dados, itera sobre o array correspondente
            for (const key in data) {
                if (Array.isArray(data[key])) {
                    data[key].forEach(item => {
                        const listItem = document.createElement('li');
                        listItem.textContent = item; // Exibe o item do array
                        list.appendChild(listItem);
                    });
                } else {
                    const listItem = document.createElement('li');
                    listItem.textContent = JSON.stringify(data[key]); // Exibe os dados do objeto
                    list.appendChild(listItem);
                }
            }

            container.appendChild(list);
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
            const container = document.getElementById(containerId);
            container.innerHTML = `<p style="color: red;">Erro ao carregar os dados: ${error.message}</p>`;
        });
}

// URLs da API
const livrosUrl = 'http://54.208.149.127:4000/livros';
const editorasUrl = 'http://54.208.149.127:4000/editoras';
const autoresUrl = 'http://54.208.149.127:4000/autores';
const generosUrl = 'http://54.208.149.127:4000/generos';

// Buscando e exibindo os dados
fetchData(livrosUrl, 'livros');
fetchData(editorasUrl, 'editoras');
fetchData(autoresUrl, 'autores');
fetchData(generosUrl, 'generos');
