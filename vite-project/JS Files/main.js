
import { DomSelectors } from "/JS Files/Dom.js"



const Url= "https://www.amiiboapi.com/api/amiibo";
async function getData(money) {
    try {
        const response = await fetch(money);
        const data = await response.json(); //makes the data into JSON object we can use 
        console.log(data)}catch(error){console.log(error);}};
    
    const data= getData(Url)




 function AddAmiibo() {
    document.querySelector(".flex-container").insertAdjacentHTML("beforeend",
    `<div class="amiibocard">
    <h1 class="amiiboname"> ${data.character} <h1>
    <img src="${data.image}"  alt="" class="amiiboimage">
    <h2 class="amiiboseries">${data.amiiboSeries}<h2>  
    <div>`
       )};  
AddAmiibo()



/* function Searchfor(a){
    let result;
    if (a=amiibo){
    
    } else {
        result = 'Not Found'
        console.log(result)
    }
}


const Search=
DomSelectors.form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(DomSelectors.amiiboname.value);

DomSelectors.form.addEventListener("submit", function(){
        (el)=> el.textContent = DomSelectors.h1s.value})}
);   
  */