
import { DomSelectors } from "/JS Files/Dom.js"



const Url= "https://www.amiiboapi.com/api/amiibo";
async function getData(money) {
    try {
        const response = await fetch(money);
        const data = await response.json(); //makes the data into JSON object we can use
        console.log(data)
    } catch (error) {
         console.log(error);
    }
    };
    const amiibo = getData(Url)
;
function AddAmiibo() {
    document.querySelector(".flex-container").insertAdjacentHTML("beforeend",
    `
    <div class="amiibocard">        <div>
    <h1 class="title">             <h1>
    <h2 class="description">       <h2>
    `
    )
};  
 console.log(amiibo)

function Searchfor(a){
    let result;
    if (Search=amiibo){
    
    } else {
        result = 'Not Found'
    }
}


const Search=
DomSelectors.form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(DomSelectors.amiiboname.value);

DomSelectors.form.addEventListener("submit", function(){
        (el)=> el.textContent = DomSelectors.h1s.value})}
);   
 