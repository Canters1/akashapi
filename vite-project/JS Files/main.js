

const Domselectors={
    Amiiboname: document.querySelector(".amiibo-name"),
    form: document.querySelector(".form"),
};
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

/* const URL = "https://www.amiiboapi.com/api/" */

/* const URL = "https://www.amiiboapi.com/api/amiibo/?name=Peach"
async function getdata(URL){
    try{
        const res = await fetch(URL);
        console.log(res);
        const data= await res.json();
        document.querySelector(".apiread").textContent = data.
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}
const amiibodata = getdata(URL) */

/* async function getData(URL) {
    try {
        if (response.status != 100) {
            let amiibo = "Mario"
            throw new Error(amiibo)
        }
        const response = await fetch(URL);
        console.log(response);
        const data = await response.json();
        console.log(data);
        document.querySelector("h1").textContent = data.content;
        document.querySelector("h2").textContent = data.author;
    } catch (error) {
        console.log(error)
    }
} */
const Apikey = 'https://www.amiiboapi.com/api/amiibo';
/* async function getData(URL) {
    try {
        const response = await fetch(URL);
        const data = await response.json(); //makes the data into JSON object we can use
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}
const Amiibodata = getData(Apikey); */
async function logAMiibos() {
    const response = await fetch("https://www.amiiboapi.com/api/amiibo");
    const amiibos = await response.json();
    console.log(amiibos);
  }
function AddAmiibo() {
    document.querySelector(".flex-container").insertAdjacentHTML("beforeend",
    `<div class="amiibocard">
    <h1 class="title"><h1>
    <h2 class="description"><h2>
    `)
};  
/* 
Domselectors.form.addEventListener("submit", (e)=> {
    e.preventDefault();

    AddAmiibo();
})
 */

DomSelectors.form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    AddAmiibo();
  });
  

