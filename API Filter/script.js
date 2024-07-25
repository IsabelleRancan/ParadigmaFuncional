const url = 'http://universities.hipolabs.com/search?country=United+States';

// Função executada independente de outra 
async function listaUniversidade(letraInicio = ''){
    try{
        //fazer requisição http 
        const response = await fetch(url);

        //converte no formato json 
        const data = await response.json();

        //processa os dados usando map e filter 
        const universityNames = data 
            .map(university => university.name)
            .filter(name => name.startsWith(letraInicio)) //filtrar universidades que começam com determianda letra 
            .sort();

        //selecionar o elemento da lista 
        const universityList = document.getElementById('listaUniversidade');
        universityList.innerHTML = '';

        //adicionando nomes à lista
            universityNames.forEach(name => {
                const listItem = document.createElement('li');
                listItem.textContent = name;
                universityList.appendChild(listItem);
            });
    }catch (error) {
            console.error('Ocorreu um erro ao consumir a API:', error);
        }
    } 
    
    //Selecionar botão e adiciona o evento do clique 
    const filterButton = document.getElementById('btnFiltrar');
    filterButton.addEventListener('click', () => {
        const entradaFiltro = document.getElementById('txtFiltro').value;
        listaUniversidade(entradaFiltro);
    });

    //chamada da função
    listaUniversidade();