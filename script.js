// Theme toggler logic
      const themeToggle = document.getElementById('themeToggle');
      const body = document.body;
      let darkMode = true;
      themeToggle.addEventListener('click', function() {
        darkMode = !darkMode;
        if (darkMode) {
          body.style.backgroundColor = 'black';
          themeToggle.classList.remove('btn-dark');
          themeToggle.classList.add('btn-light');
          themeToggle.textContent = '🌙';
        } else {
          body.style.backgroundColor = 'white';
          themeToggle.classList.remove('btn-light');
          themeToggle.classList.add('btn-dark');
          themeToggle.textContent = '☀️';
        }
        body.style.color = darkMode ? 'white' : 'black';
        document.querySelectorAll('h3,h4, h6').forEach(el => {
          el.classList.toggle('text-dark', !darkMode);
          el.classList.toggle('text-white', darkMode);
        });
        document.querySelectorAll('.card').forEach(card => {
          card.classList.toggle('text-dark', !darkMode);
          card.classList.toggle('text-white', darkMode);
          card.style.background = darkMode ? 'black' : 'white';
        });
        document.querySelectorAll('.form-label').forEach(label => {
          label.classList.toggle('text-dark', !darkMode);
          label.classList.toggle('text-white', darkMode);
        });
      });




// displayPopular.innerHTML = `<h2>Popular Movies</h2>`

const moviesList = document.querySelector('#movies');
const searchButton = document.querySelector('.searchBtn');
const searchInput = document.querySelector('#searchInput');
      const apiKey = "3398bf0ebd8da8c8aa4f0410fdeeb5df";

const searchTerm = '';

searchInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    // The user pressed enter
    searchTerm = searchInput.value;
    // Do something with the value
  }
});

searchButton.onclick =  async () => {
  const searchTerm = searchInput.value;
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${searchTerm}&language=en-US`;
  const response = await fetch(url);
  if (!response.ok) {
    console.log('Error fetching data');
  }
  const json = await response.json();
  const movies = json.results;
  const imgBase = 'https://image.tmdb.org/t/p/w500';
  moviesList.innerHTML = "";
  trendingMovies.innerHTML = "";
  document.querySelector("#TrendingMovies").innerHTML = "";
  document.querySelector("#displayPopular").innerHTML = `<h3 class="text-white">Search For "${searchTerm}"</h3>`;
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const imgSrc = movie.poster_path ? imgBase + movie.poster_path : 'https://via.placeholder.com/350x500?text=No+Image';
    moviesList.innerHTML += `
      <div class="col g-3 d-flex">
        <div class="card bg-transparent text-white" style="width: 18rem;cursor: pointer; height:auto; background:black">
          <img class="card-img-top" src="${imgSrc}" alt="${movie.title}" style="height:350px">
          <div class="card-body">
            <h6 class="card-title">${movie.title}</h6>
            <p class="card-text">${movie.release_date || ''}</p>
          </div>
        </div>
      </div>
    `;
  }
}



// // // button onclick functionalities

const popularMovies = document.getElementById("popular");

async function populars(){


  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;

  const response = await fetch(url);

  if (!response.ok) {
    console.log('Error fetching data');
  }

  const json = await response.json();
  const popular = json.results;


  const imgBase = 'https://image.tmdb.org/t/p/w500';
  for (let i = 0; i < popular.length; i++) {
    const movie = popular[i];
    const imgSrc = movie.poster_path ? imgBase + movie.poster_path : 'https://via.placeholder.com/350x500?text=No+Image';
    moviesList.innerHTML += `
      <div class="col g-3 d-flex">
        <div class="card bg-transparent text-white">
          <img class="card-img-top" src="${imgSrc}" alt="${movie.title}" style="height:350px">
          <div class="card-body">
            <h6 class="card-title">${movie.title}</h6>
            <p class="card-text">${movie.release_date || ''}</p>
          </div>
        </div>
      </div>
    `;
  }

}

let trendingMovies = document.querySelector("#trending")
async function trending(){

  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US`;

  const response = await fetch(url);

  if (!response.ok) {
    console.log('Error fetching data');
  }

  const json = await response.json();
  const popular = json.results;

const trendingText = document.querySelector("#TrendingMovies");
trendingText.innerHTML = "Trending Movies";
  const imgBase = 'https://image.tmdb.org/t/p/w500';
  for (let i = 0; i < popular.length; i++) {
    const movie = popular[i];
    const imgSrc = movie.poster_path ? imgBase + movie.poster_path : 'https://via.placeholder.com/350x500?text=No+Image';
    trendingMovies.innerHTML += `
      <div class="col g-3 d-flex">
        <div class="card bg-transparent text-white">
          <img class="card-img-top" src="${imgSrc}" alt="${movie.title}" style="height:350px">
          <div class="card-body">
            <h6 class="card-title">${movie.title}</h6>
            <p class="card-text">${movie.release_date || ''}</p>
          </div>
        </div>
      </div>
    `;
  }
}
window.onload = async () => {
  document.querySelector("#displayPopular").innerHTML = `<h3 class="text-white">Popular Movies</h3>`
  populars();
  trending();

};



// On Button Clcik Functions

topRated.onclick = async () => {
    // console.log('function')


    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`;

    const response = await fetch(url);

    if (!response.ok) {
        console.log('Error fetching data');
    }

    const json = await response.json();
    const Top= json.results;

    moviesList.innerHTML = ""
    trendingMovies.innerHTML = ""
    document.querySelector("#TrendingMovies").innerHTML = ""
    document.querySelector("#displayPopular").innerHTML = `<h4 class="text-white">Top Rated</h4>`
    const imgBase = 'https://image.tmdb.org/t/p/w500';
    for (let i = 0; i < Top.length; i++) {
        const movie = Top[i];
        const imgSrc = movie.poster_path ? imgBase + movie.poster_path : 'https://via.placeholder.com/350x500?text=No+Image';
        moviesList.innerHTML += `
             <div class="col g-3 d-flex">
                <div class="card bg-transparent text-white" style="width: 18rem;cursor: pointer; height:auto; background:black">
                  <img class="card-img-top" src="${imgSrc}" alt="${movie.title}" style="height:350px">
                  <div class="card-body">
                    <h6 class="card-title">${movie.title}</h6>
                    <p class="card-text">${movie.release_date || ''}</p>
                    <p class="card-text">Ratings: ${movie.vote_average}</p>
                  </div>
                </div>
            </div>
        `;
    }

}



let getNowPlaying = document.querySelector("#now_playing");
getNowPlaying.onclick = async () => {
  

  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US`;

  const response = await fetch(url);

  if (!response.ok) {
      moviesList.innerHTML = `<h1>Error Fetching Data </h1>`
  }

  const json = await response.json();
  const BoxOffice = json.results;

  moviesList.innerHTML = ""
  trendingMovies.innerHTML = ""
  document.querySelector("#displayPopular").innerHTML = `<h4 class="text-white">Now Playing</h4>`
  const imgBase = 'https://image.tmdb.org/t/p/w500';
  for (let i = 0; i < BoxOffice.length; i++) {
      const movie = BoxOffice[i];
      const imgSrc = movie.poster_path ? imgBase + movie.poster_path : 'https://via.placeholder.com/350x500?text=No+Image';
      moviesList.innerHTML += `
           <div class="col g-3 d-flex">
              <div class="card text-white bg-transparent" style="width: 18rem;cursor: pointer; height:auto; background:black">
                <img class="card-img-top" src="${imgSrc}" alt="${movie.title}" style="height:350px">
                <div class="card-body">
                  <h6 class="card-title">${movie.title}</h6>
                  <p class="card-text">${movie.release_date || ''}</p>
                </div>
              </div>
          </div>
      `;
  }

}



let TvShows = document.querySelector("#tvShows");
async function getTvShows(){
  

  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US`;

  const response = await fetch(url);

  if (!response.ok) {
      moviesList.innerHTML = `<h1>Error Fetching Data </h1>`
  }

  const json = await response.json();
  const tv = json.results.map((series) => ({
    title: series.name,
    poster_path: series.poster_path,
    release_date: series.first_air_date,
  }));
  moviesList.innerHTML = ""
  trendingMovies.innerHTML = ""
  document.querySelector("#TrendingMovies").innerHTML = ""
document.querySelector("#displayPopular").innerHTML = `<h4 class="text-white">Tv Shows</h4>`
  const imgBase = 'https://image.tmdb.org/t/p/w500';
  for (let i = 0; i < tv.length; i++) {
      const series = tv[i];
      const imgSrc = series.poster_path ? imgBase + series.poster_path : 'https://via.placeholder.com/350x500?text=No+Image';
      moviesList.innerHTML += `
           <div class="col g-3 d-flex">
              <div class="card text-white bg-transparent" style="width: 18rem;cursor: pointer; height:auto">
                <img class="card-img-top" src="${imgSrc}" alt="${series.title}" style="height:350px; background:black">
                <div class="card-body">
                  <h6 class="card-title">${series.title}</h6>
                  <p class="card-text">${series.release_date || ''}</p>
                </div>
              </div>
          </div>
      `;
  }

}

TvShows.addEventListener("click",getTvShows)


let explore = document.querySelector("#explore")

explore.onclick = async () =>{
  trendingMovies.innerHTML = ""
  moviesList.innerHTML = ""
  document.querySelector("#TrendingMovies").innerHTML = ""
  document.querySelector("#displayPopular").innerHTML = `<h3 class="text-white">Explore</h3>`
  populars();
  trending();
}
