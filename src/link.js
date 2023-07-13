//const url = new URL('https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=AIzaSyBA8r5S4D3VQA2cUVAjf8nYc27eHoDRPXQ&printType=books&startIndex=0&maxResults=6&langRestrict=en')
    

// Retrieve params via url.search, passed into constructor
const url = new URL('https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=AIzaSyBA8r5S4D3VQA2cUVAjf8nYc27eHoDRPXQ&printType=books&startIndex=0&maxResults=6&langRestrict=en');
const params1 = new URLSearchParams(url.search);


// Get the URLSearchParams object directly from a URL object
const params1a = url.searchParams;

// Pass in a string literal
const params2 = new URLSearchParams("foo=1&bar=2");
const params2a = new URLSearchParams("?foo=1&bar=2");

let genre = 'bestsellers';
let startIndex = 0;

// Pass in a sequence of pairs
const params3 = new URLSearchParams([
  ["q", `"subject:${genre}"`],
  ['key', 'AIzaSyBA8r5S4D3VQA2cUVAjf8nYc27eHoDRPXQ'],
  ['printType', 'books'],
  ['startIndex', `${startIndex}`],
  ['maxResults', '6'],
  ['langRestrict', 'en'],
]);

// Pass in a record
const params4 = new URLSearchParams({ foo: "1", bar: "2" });

console.log('params', params1)

const new_url = new URL(`${url.origin}${url.pathname}?${params3}`)
console.log('newurl', new_url.href)
