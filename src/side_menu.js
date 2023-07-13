
const btnArch = document.querySelector(".genre__list__bestsellers")
const btnArt = document.querySelector(".genre__list__art-fashion");
const btnBio = document.querySelector(".genre__list__bio");
const btnBusiness = document.querySelector(".genre__list__business");
//const btnChild = document.querySelector(".genre__list__childrens");
const btnEdu = document.querySelector(".genre__list__education");
const btnPoetry = document.querySelector(".genre__list__poetry");
const btnFiction = document.querySelector(".genre__list__fiction");
const btnFood = document.querySelector(".genre__list__food-drink");
const btnHealth = document.querySelector(".genre__list__health");

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

