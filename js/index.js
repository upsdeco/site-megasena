// Nossos jogos
const sequencia1 = ["02","03","09","13","31","50"]; 
const sequencia2 = ["03","09","23","31","36","51"];     
const sequencia3 = ["09","17","18","32","44","56"];
//Nossos números jogados
 document.getElementById("sequencia1").innerHTML = sequencia1.toString();
 document.getElementById("sequencia2").innerHTML = sequencia2.toString(); 
 document.getElementById("sequencia3").innerHTML = sequencia3.toString();  

const url = 'https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena'

fetch(url)
    .then(resposta => resposta.json())
    .then(dados => {
        const lista = document.getElementById('dezenas');
        const data = document.getElementById('data');

        //Mostra as dezenas sorteadas
        dados.listaDezenas.forEach(dezena => {
            const item = document.createElement('li');
            item.textContent = dezena;
            lista.appendChild(item);
        });

        //Mostra a data do sorteio
        data.textContent = `Data do sorteio: ${dados.dataApuracao}`;

        //Mostra todos os dados no console
        console.log(dados);
    })
    .catch(erro => {
        console.error('Erro ao buscar dados da Mega-Sena', erro);
    });


const meusNumeros = ["02","03","09","13","31","50"]; 
function comparar() {
  const input = document.getElementById('meusNumeros').value;
  const meusNumeros = input.split(',').map(n => parseInt(n.trim()));
  
  const coincidencias = meusNumeros.filter(n => dezenasSorteadas.includes(n));
  const resultado = document.getElementById('resultadoComparacao');

  if (coincidencias.length > 0) {
    resultado.textContent = `Você acertou: ${coincidencias.join(', ')}`;
  } else {
    resultado.textContent = 'Infelizmente nenhum acerto dessa vez 😢';
  }
}
























/*
fetch('https://loteriascaixa-api.herokuapp.com/api/megasena/latest')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));

fetch('https://loteriascaixa-api.herokuapp.com/api/megasena/latest')
        .then(res => {
            return res.json();
        })
        .then(data => {
            data.forEach(dezenasOrdemSorteio => {
                const markup = '<li>${dezenasOrdemSorteio.dezenas}</li>';
                document.querySelector('sequenciav').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.log(error));  
    
    //Mostra o a data do jogo
    fetch('https://loteriascaixa-api.herokuapp.com/api/megasena/latest')
    .then(res => {
        return res.json();
    })
    .then (data => {
        const datadoc = data.data;
        const datadoconcurso = document.querySelector("#datadoconcurso");
        if (datadoconcurso) {
            datadoc.forEach(datas => { // Iterate over the dezenas array
            const markup = `<p>${dezena}</p>`; // Use backticks for template literal
            datadoconcurso.insertAdjacentHTML('beforeend', markup);
            });
        }
    })


// Fetch and display latest Mega Sena draw details
fetch('https://loteriascaixa-api.herokuapp.com/api/megasena/latest')
    .then(res => res.json())
    .then(data => {
        // Log the full data to understand its structure (good for debugging)
        console.log(data);

        // Get the array of drawn numbers
        const dezenasSorteadas = data.dezenas;
        // Get the draw date
        const dataSorteio = data.data; // The API returns the date in 'DD/MM/YYYY' format

        // Select the HTML elements where you want to display the information
        const sequenciavElement = document.querySelector('#sequenciav');
        const dataSorteioElement = document.querySelector('#dataSorteio'); // Assuming you have an element with this ID

        // Display the drawn numbers
        if (sequenciavElement) {
            // Clear previous content if any, before inserting new list items
            sequenciavElement.innerHTML = '';
            dezenasSorteadas.forEach(dezena => {
                const markup = `<li>${dezena}</li>`;
                sequenciavElement.insertAdjacentHTML('beforeend', markup);
            });
        } else {
            console.error("Element with ID 'sequenciav' not found.");
        }

        // Display the draw date
        if (dataSorteioElement) {
            dataSorteioElement.textContent = `Data do Sorteio: ${dataSorteio}`;
        } else {
            console.error("Element with ID 'dataSorteio' not found.");
        }
    })
    .catch(error => console.error("Error fetching Mega Sena data:", error)); // More specific error message

*/

    const apiUrl = 'https://lottolookup.com.br/api/megasena/latest';


/*

fetch('https://loteriascaixa-api.herokuapp.com/api/megasena/latest')
    .then(res => res.json())
    .then(data => {console.log(data);});

fetch('https://loteriascaixa-api.herokuapp.com/api/megasena/latest')
    .then(response => response.json())
    .then(data => console.log(data.dezenas))
    .catch(error => console.error(error));

fetchData();

async function fetchData(){

    try{
        const response = await fetch("https://loteriascaixa-api.herokuapp.com/api/megasena/latest")

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}

fetch("https://loteriascaixa-api.herokuapp.com/api/megasena/latest").then(function (response) {
  var contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    return response.json().then(function (json) {
      // process your JSON further
    });
  } else {
    console.log("Oops, we haven't got JSON!");
  }
})

*/