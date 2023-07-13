//document.write('Hello, webpack!');

//const { types } = require("mime-types");

const btnArch = document.querySelector(".genre__list__arch")
const btnArt = document.querySelector(".genre__list__art-fashion");
const btnBio = document.querySelector(".genre__list__bio");
const btnBusiness = document.querySelector(".genre__list__business");
//const btnChild = document.querySelector(".genre__list__childrens");
const btnEdu = document.querySelector(".genre__list__education");
const btnPoetry = document.querySelector(".genre__list__poetry");
const btnFiction = document.querySelector(".genre__list__fiction");
const btnFood = document.querySelector(".genre__list__food-drink");
const btnHealth = document.querySelector(".genre__list__health");

const resultNode = document.querySelector(".books__book");

const url = new URL('https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=AIzaSyBA8r5S4D3VQA2cUVAjf8nYc27eHoDRPXQ&printType=books&startIndex=0&maxResults=6&langRestrict=en');
const params1 = new URLSearchParams(url.search);

let genre = 'Architecture';
let startIndex = 0;

function genreSelection(genre, startIndex) {
    // Pass in a sequence of pairs
    const params3 = new URLSearchParams([
        ["q", `"subject:${genre}"`],
        ['key', 'AIzaSyBA8r5S4D3VQA2cUVAjf8nYc27eHoDRPXQ'],
        ['printType', 'books'],
        ['startIndex', `${startIndex}`],
        ['maxResults', '6'],
        ['langRestrict', 'en'],
    ]);

    //console.log('params', params1)

    let new_url = new URL(`${url.origin}${url.pathname}?${params3}`)

    useRequest(new_url, displayResult)
}

/////////////////////////

//fetch
function useRequest(url, callback) {
    return fetch(url)
        .then((response) => {
            //    console.log('response', response);
            const result = response.json();

            return result
        })
        // .then((json) => { return json; })
        .then((data) => {
            const result = data.items;
            // Объект результата в формате JSON
            return result
        })
        .then((data) => {
            console.log('data', data);

            callback(data);
        })
        .catch(() => { console.log('error') });
}


function displayResult(apiData) {
    let cards = '';
    //volumeInfo = apiData.volumeInfo;
    // console.log('volumeInfo', volumeInfo.imageLinks.thumbnail);
    apiData.forEach(item => {
        volumeInfo = item.volumeInfo;
        //console.log('volumeInfo', volumeInfo.imageLinks.thumbnail)
        if (volumeInfo.imageLinks === undefined) { link = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930' }
        else (link = volumeInfo.imageLinks.thumbnail);

        console.log('link', link)
        const cardBlock = `
        <div class="card">
        <img
            src="${link}"
            class="card-image" width="50" 
          />
        <p>${volumeInfo.title}</p>
          
          <p>${volumeInfo.authors}</p>
        </div>
      `;
        cards = cards + cardBlock;
        //console.log(cards)
    });

    //console.log('cards', cards);

    resultNode.innerHTML = cards;

    //localStorage.setItem('storedCards', cards);
}

//const requestResult = useRequest(new_url, displayResult);
const requestResult = genreSelection(genre, startIndex, useRequest);



/////////////////////////

btnArt.addEventListener(`click`, () => {
    genre = 'Art'
    genreSelection(genre, startIndex)
});

btnArch.addEventListener(`click`, () => {
    genre = 'Architecture'
    genreSelection(genre, startIndex)
});

btnBio.addEventListener(`click`, () => {
    genre = 'biography & autobiography'
    genreSelection(genre, startIndex)
});

btnBusiness.addEventListener(`click`, () => {
    genre = 'business'
    genreSelection(genre, startIndex)
});

btnEdu.addEventListener(`click`, () => {
    genre = 'technology'
    genreSelection(genre, startIndex)
});

btnPoetry.addEventListener(`click`, () => {
    genre = 'poetry'
    genreSelection(genre, startIndex)
});

btnFiction.addEventListener(`click`, () => {
    genre = 'fiction'
    genreSelection(genre, startIndex)
});

btnFood.addEventListener(`click`, () => {
    genre = 'cooking'
    genreSelection(genre, startIndex)
});

btnHealth.addEventListener(`click`, () => {
    genre = 'health & fitness'
    genreSelection(genre, startIndex)
});
