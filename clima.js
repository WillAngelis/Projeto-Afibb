const api = {
  key: '6e41ca5325968e6c7cae39c8436501ab',
  base: 'https://api.openweathermap.org/data/2.5/',
  lang: 'pt_br',
  units: 'metric',
  city: 'Barra Bonita',
};

const date = document.querySelector('.climaDay');
const temp_number = document.querySelector('.climaCelsius');

// Buscando dados da api ao entrar no site

window.addEventListener('load', () => {
  fetch(
    `${api.base}weather?q=${api.city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`http error: status ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      alert(error.message);
    })
    .then((response) => {
      displayResults(response);
    });
});

function displayResults(weather) {
  let now = new Date();
  date.innerText = dateBuilder(now);

  let temperature = `${Math.round(weather.main.temp)}`;
  temp_number.innerHTML = `${temperature}ºC`;
}

// Função para colocar o dia da semana de acordo com a data

function dateBuilder(d) {
  let days = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  let months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julio',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
}
