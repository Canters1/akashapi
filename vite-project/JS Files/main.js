
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
const URL = "https://www.amiiboapi.com/api/amiibo/?name=Peach"
async function getdata(URL){
    try{
        const res = await fetch(URL);
        console.log(res);
        const data= await res.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}
getdata(URL)




