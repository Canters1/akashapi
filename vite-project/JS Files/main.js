
/* const URL= "https://api.quotable.io/random"


 async function getData() {
try {
    const response = await fetch(URL);
    const data = await response.json(); //makes the data into JSON object we can use
document.getElementsByClassName(".apiread").textContent = data.content;
} catch (error) {
     console.log(error);
}
}
getData(URL); */

 async function getData(){
let res = await fetch(
    "https://api.quotable.io/random"
);
let data = await res.json();
console.log(data);
data.results.forEach((quote)=> console.log(quote));
}
getData();



