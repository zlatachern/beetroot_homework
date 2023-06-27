let currentPage = 1;

const submitBtn = document.getElementById('submit');
const paginatedList = document.getElementById('paginated-list');
let paginationNumbers = document.getElementById('pagination-numbers');
let paginationContainer = document.getElementById('pagination-container');
let otherNumbers = document.getElementById('otherNumbers');
let pagesNumber = 0;
let moviesList = '';
let totalPages = 1;
const itemsPerPage = 10;

submitBtn.addEventListener('click', searchMovies);
paginatedList.addEventListener('click', showDetails);

function searchMovies(event) {
    event.preventDefault();
    currentPage = 1;
    pagesNumber = 0;
    paginationContainer.classList.add('invisible');
    searchMovie()
}

function searchMovie() {
    const title = document.getElementById('name').value;
    const type = document.querySelector('input[name="movie-type"]:checked').value;
    const pageNumber = currentPage;


    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        displayMovies(xhttp.response)

    };
    xhttp.onerror = function () {
        paginatedList.innerHTML = 'Sorry, something went wrong. Please refresh the page and try again'
    }
    xhttp.open('GET', `https://www.omdbapi.com/?apikey=aebbecd2&s=${title}&type=${type}&page=${pageNumber}`);
    xhttp.send();


}


function displayMovies(response) {
    paginatedList.innerHTML = '';
    const parsedResponse = JSON.parse(response);
    const moviesResponse = parsedResponse.Search;

    try {
        moviesResponse.forEach((movie) => {
            paginatedList.innerHTML += `
    <li class = "list_item">
        <p>${movie.Title}</p>
        <button class = "button--primary" id="${movie.imdbID}">Details</button>
    </li>`
        })

        moviesList = moviesResponse;

        pagesNumber = Math.ceil(parseInt(parsedResponse.totalResults) / itemsPerPage);
        createPagination(pagesNumber);
    } catch {
        paginatedList.innerHTML = "Sorry, we couldn't find any movie. Please, check your input and try again" 
    }

}

function createPagination(pagesNumber) {
    paginationContainer.classList.remove('invisible');
    let previousBtn = document.getElementById('previous-btn');
    let nextBtn = document.getElementById('next-btn');
    firstNumbers.innerHTML = '';


    for (let i = currentPage; i < currentPage + 5 && i <= pagesNumber; i++) {

        let paginationStart = document.createElement('button');
        paginationStart.id = i;
        paginationStart.innerHTML = i;
        firstNumbers.appendChild(paginationStart)
    }

    currentPage <= pagesNumber - 6 ? otherNumbers.classList.remove('invisible') : otherNumbers.classList.add('invisible');
    currentPage == 1 ? previousBtn.disabled = true : previousBtn.disabled = false;
    currentPage == pagesNumber ? nextBtn.disabled = true : nextBtn.disabled = false;
}


document.getElementById('previous-btn').addEventListener('click', previous)
function previous() {
    --currentPage;
    searchMovie()
}

document.getElementById('next-btn').addEventListener('click', next)
function next() {
    ++currentPage;
    searchMovie()
}

document.getElementById('first-page').addEventListener('click', firstPage)
function firstPage() {
    currentPage = 1;
    searchMovie()
}

document.getElementById('last-page').addEventListener('click', lastPage)
function lastPage() {
    currentPage = pagesNumber;
    searchMovie()
}

document.getElementById('pagination-numbers').addEventListener('click', goToNumber)
function goToNumber(evt) {
    let btnId = parseInt(evt.target.id);
    currentPage = btnId;
    searchMovie()
}


function showDetails(evt) {
    if (evt.target.tagName == 'BUTTON') {
        let filmId = evt.target.id;
        let filmToShow = moviesList.find(film => film.imdbID == filmId)
        buildModal(filmToShow)
        console.log(filmToShow)
    }
}

const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

function buildModal(film) {
    modal.style.display = "block";
    let modalInner = document.getElementById('modalInner');
    modalInner.innerHTML = `
    <div class="poster">
        <img src="${film.Poster}" alt="">
    </div>
    <div class="title">
        <p>${film.Title}</p>
    </div>
    <div class="type">
        <p>${film.Type}</p>
    </div>
    <div class="year">
        <p>${film.Year}</p>
    </div>
`

}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}