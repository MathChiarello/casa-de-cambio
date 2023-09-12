const titleCoin = document.querySelector('coin');
const coinsList = document.querySelector('list');

function getData() {
  const url = `https://api.exchangerate.host/latest?base=${moeda}`;

  return fetch(url)
    .then((response) => response.json())
    .then(( { rates }) => rates)
}

function handleSearch(event) {
    event.preventDefault();
    const coin = inputCoin.value.toUpperCase();
    getData(coin).then(coins => console.log(coins));
}