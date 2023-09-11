import './style.css';

// Captura dos elementos utilizados
const textCoin = document.querySelector('#textCoin');
const selectCoin = document.querySelector('#selectCoin');
const coins = document.querySelector('#coins');
const h2 = document.querySelector('h2');

selectCoin.addEventListener('click', () => {
  // Verificando se já tenho dados de moedas na tela
  if (coins.hasChildNodes()) 
  while (coins.hasChildNodes())
  coins.removeChild(document.querySelectorAll('.containerCoin')[0]);

  const coin = textCoin.value;
  const URL = `https://api.exchangerate.host/latest?base=${coin}`;
  
  fetch(URL)
    .then((response) => response.json())
    .then(({ rates }) => {

      if (Object.keys(rates).includes(coin)) {
        Object.entries(rates).forEach((rate) => {
          // Criando os elementos
          const containerCoin = document.createElement('div');
          const divNameImgCoin = document.createElement('div');
          const img = document.createElement('img');
          const pName = document.createElement('p');
          const pValue = document.createElement('p');
  
          // Incluindo as classes para estilizações
          divNameImgCoin.className = 'cointainerNameCoin';
          pValue.className  = 'valueCoin';
          containerCoin.className = 'containerCoin';
          
          // Incluindo as informações
          img.src = './logo-coin.png';
          pName.innerHTML = rate[0];
          pValue.innerHTML = parseFloat(rate[1]).toFixed(3);
          h2.innerHTML = `Valores referente a 1 ${coin}`
          
          divNameImgCoin.appendChild(img);
          divNameImgCoin.appendChild(pName);
          containerCoin.appendChild(divNameImgCoin);
          containerCoin.appendChild(pValue);
          coins.appendChild(containerCoin);
        }); 
      } else {
        throw new Error(`A moeda ${textCoin.value} não foi encontrada!`);
      }
      
    })
    .catch((error) => {
      const link = 'https://admiralmarkets.com/pt/educacao/aprender-trading/bases-forex/lista-de-moedas';
      Swal.fire({
        icon: 'error',
        title: 'Moeda inválida!',
        text: error,
        footer: `<a href="${link}">Clique aqui página para procurar a sigla correta.</a>`
      })
    });

});
