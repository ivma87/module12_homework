// AIzaSyBA8r5S4D3VQA2cUVAjf8nYc27eHoDRPXQ
// https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=AIzaSyBA8r5S4D3VQA2cUVAjf8nYc27eHoDRPXQ&printType=books&startIndex=0&maxResults=6&langRestrict=en

//const btn = document.querySelector('.j-btn');
//const resultNode = document.querySelector(".books__book");


///////////////////////////////////
//fetch
function useRequest(url, callback)  {
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
        if (volumeInfo.imageLinks === undefined) { link = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'}
        else (link = volumeInfo.imageLinks.thumbnail);
               
        console.log ('link', link)
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

const requestResult = useRequest(new_url, displayResult);



////////////////////////////////////////////

// JSON, который мы будем парсить
const jsonString = `
  {
    "book": {
     "category": "CHILDREN",
     "title": {
        "lang": "en",
        "value": "Harry Potter"
      },
      "author": "J. K. Rowling",
      "year": "2005",
      "price": 29.99
    }
  }
  `;
// console.log('jsonString', jsonString);

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
// console.log('data', data);
const book = data.book;
// console.log('book', book);


/* Этап 3. Запись данных в результирующий объект */
const result = {
    category: book.category,
    lang: book.title.lang,
    title: book.title.value,
    author: book.author,
    year: Number(book.year),
    price: Number(book.price),
};
  //console.log('result', result);

