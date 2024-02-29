window.addEventListener('scroll', function () {
    var nav = document.querySelector(".nav");
    nav.classList.toggle("active", this.window.scrollY > 0);
})

const api = "api_key=0d7fcb538472b4a248392fdafdaf9ae8532";
const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w185"; 

const requests = {
    fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

fetch(requests.fetchNetflixOrignals)
    .then(res => res.json())
  
    .then((data) => {
        console.log(data.results);

        const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];

        var banner = document.getElementById('banner');
        var banner_title = document.getElementById('banner_title');
        var banner_desc = document.getElementById('banner_description');

        banner.style.backgroundImage = "url(" + banner_url + setMovie.backdrop_path + ")";
        bannner_desc.innerText = truncate(setMovie.overview, 150);
        banner_title.innerText = setMovie.title;
    });

fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())


    .then((data) => {
        const headrow = document.getElementById('headrow');
        const row = document.getElementById('div');

        row.className = "row";
        row.classList.add("netflixrow")
    })