
let displayPopular = document.querySelector("#displayPopular")
displayPopular.classList.add("text-white")
// const cards = document.querySelectorAll(".card");
// const body = document.body;

// let isNightMode = false;


//   function toggleNightMode() {
//     isNightMode = !isNightMode;
//     if (isNightMode) {

//       cards.forEach((card) => {
//         card.classList.add("text-dark")
//       });
//       body.style.background = "white"
//       displayPopular.classList.remove("text-white");
//       document.querySelector(".form-label").classList.add("text-dark")

//     } else {
//       displayPopular.classList.add("text-white")
//       body.style.background = "black";
//       document.querySelector(".form-label").classList.remove("text-white")
//       cards.forEach((card) => {
//         card.classList.remove("text-dark")
//       });
//     //   displayPopular.classList.remove("text-white");
//     }
//   }

//   const button = document.querySelector("#night");
//   button.addEventListener("click", toggleNightMode);




displayPopular.innerHTML = `<h2>Popular Movies</h2>`

const moviesList = document.querySelector('#movies');
// 3398bf0ebd8da8c8aa4f0410fdeeb5df
const searchButton = document.querySelector('.searchBtn');
const searchInput = document.querySelector('#searchInput');

const searchTerm = '';

searchButton.onclick =  async () => {
  const searchTerm = searchInput.value;
      const apiKey = "3398bf0ebd8da8c8aa4f0410fdeeb5df";
      const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${searchTerm}&language=en-US`;

  const response = await fetch(url);

  if (!response.ok) {
    console.log('Error fetching data');
  }

  const json = await response.json();
  const movies = json.results;

  moviesList.innerHTML = "";
  document.querySelector("#displayPopular").innerHTML = `<h3>${searchTerm}</h3>`

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    moviesList.innerHTML += `

      <div class="col g-3 d-flex">
        <div class="card bg-transparent text-white" style="width: 18rem;cursor: pointer; height:auto; background:black">
          <img class="card-img-top" src="${movie.image}" alt="${movie.title}" style=-"height:350px">
          <div class="card-body">
            <h6 class="card-title">${movie.title}</h6>
            <p class="card-text">${movie.release_date}</p>
          </div>
        </div>
      </div>
    
    `;
  }
}


const watchTrailer = (movie) => {
  const trailerUrl = movie.trailers.results[0].url;
  const video = document.createElement("video");
  video.src = trailerUrl;
  video.controls = true;

  document.querySelector("#movies").appendChild(video);
};
// // button onclick functionalities

const popularMovies = document.getElementById("popular");

window.onload = async () => {
  // console.log('function')

  const apiKey = "3398bf0ebd8da8c8aa4f0410fdeeb5df";
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;

  const response = await fetch(url);

  if (!response.ok) {
    console.log('Error fetching data');
  }

  const json = await response.json();
  const popular = json.results;


  for (let i = 0; i < popular.length; i++) {
    const movie = popular[i];
    moviesList.innerHTML += `

      <div class="col g-3 d-flex">
        <div class="card bg-transparent text-white">
          <img class="card-img-top" src="${movie.poster_path}" alt="${movie.title}" style=-"height:350px">
          <div class="card-body">
            <h6 class="card-title">${movie.title}</h6>
            <p class="card-text">${movie.release_date}</p>
          </div>
        </div>
      </div>
    `;

  }

  
};



topRated.onclick = async () => {
    // console.log('function')

    const apiKey = "3398bf0ebd8da8c8aa4f0410fdeeb5df";
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`;

    const response = await fetch(url);

    if (!response.ok) {
        console.log('Error fetching data');
    }

    const json = await response.json();
    const Top= json.results;

    moviesList.innerHTML = " "
    document.querySelector("#displayPopular").innerHTML = "Top Rated Movies"
    for (let i = 0; i < Top.length; i++) {
        const movie = Top[i];
        moviesList.innerHTML += `

             <div class="col g-3 d-flex">
                <div class="card bg-transparent text-white" style="width: 18rem;cursor: pointer; height:auto; background:black">
                  <img class="card-img-top" src="${movie.poster_path}" alt="${movie.title}" style=-"height:350px">
                  <div class="card-body">
                    <h6 class="card-title">${movie.title}</h6>
                    <p class="card-text">${movie.release_date}</p>
                    <p class="card-text">Ratings: ${movie.vote_average}</p>
                  </div>
                </div>
            </div>
      
        `;

    }
    watchTrailer(movie);
}



let getNowPlaying = document.querySelector("#now_playing");
getNowPlaying.onclick = async () => {
  
  const apiKey = "3398bf0ebd8da8c8aa4f0410fdeeb5df";
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US`;

  const response = await fetch(url);

  if (!response.ok) {
      moviesList.innerHTML = `<h1>Error Fetching Data </h1>`
  }

  const json = await response.json();
  const BoxOffice = json.results;

  moviesList.innerHTML = " "
document.querySelector("#displayPopular").innerHTML = "Now Playing"
  for (let i = 0; i < BoxOffice.length; i++) {
      const movie = BoxOffice[i];
      moviesList.innerHTML += `

           <div class="col g-3 d-flex">
              <div class="card text-white bg-transparent" style="width: 18rem;cursor: pointer; height:auto; background:black">
                <img class="card-img-top" src="${movie.poster_path}" alt="${movie.title}" style=-"height:350px">
                <div class="card-body">
                  <h6 class="card-title">${movie.title}</h6>
                  <p class="card-text">${movie.release_date}</p>
                </div>
              </div>
          </div>
    
      `;

  }
  watchTrailer(movie);
}



let TvShows = document.querySelector("#tvShows");
TvShows.onclick = async () => {
  
  const apiKey = "3398bf0ebd8da8c8aa4f0410fdeeb5df";
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
  moviesList.innerHTML = " "
document.querySelector("#displayPopular").innerHTML = "Tv Shows"
  for (let i = 0; i < tv.length; i++) {
      const series = tv[i];
      moviesList.innerHTML += `

           <div class="col g-3 d-flex">
              <div class="card text-white bg-transparent" style="width: 18rem;cursor: pointer; height:auto">
                <img class="card-img-top" src="${series.poster_path}" alt="${series.title}" style=-"height:350px; background:black">
                <div class="card-body">
                  <h6 class="card-title">${series.title}</h6>
                  <p class="card-text">${series.release_date}</p>
                </div>
              </div>
          </div>
    
      `;

  }
  watchTrailer(series);
}





