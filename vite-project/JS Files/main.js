
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

const RL ="https://www.amiiboapi.com/api/";

async function getData(URL){
    try {
        if(response.status !=100){
            let amiibo= "Mario"
            throw new Error(amiibo)
        }
    const response = await fetch(URL);
    console.log(response);
    const data = await response.json();
    console.log(data);
    document.querySelector("h1").textContent= data.content;
    document.querySelector("h2").textContent= data.author;
    } catch(error){
           console.log(error)
    }
}
getData(RL);






