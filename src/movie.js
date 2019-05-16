const cards = document.querySelector('.cards');

const appendCard = (data) => {
  data.Search.forEach((movie) => {
    cards.insertAdjacentHTML('beforeend', `<div class="card">
      <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
      <div class="card-body">
      <h5 class="card-title">${movie.Title}</h5>
      <p class="card-text">${movie.Year}</p>
      </div>
      </div>`);
  });
};

const searchOmdb = (keyword = "harry potter") => {
  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
  cards.innerHTML = '';

  // fetch(URL)
  //   .then(CB)
  //   .then(CB)

  fetch(url)
    .then(response => response.json())
    .then(appendCard);
};

const formSubmitListener = (e) => {
  e.preventDefault();

  const input = document.querySelector('#keyword');
  const keyword = input.value;

  searchOmdb(keyword);
};

export { searchOmdb, formSubmitListener };
