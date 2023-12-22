const Url=`https://pokeapi.co/api/v2/pokemon/`;
const DomSelectors={
form:document.querySelector("#form"),
h1s: document.querySelector(".h1"),
h2s: document.querySelector(".h2"),
amiiboname: document.querySelector(".amiibo-name")
}
 






async function getData(URL){
    try {
        if(response.status !=character){
            let amiibo= "Mario"
            throw new Error(amiibo)
        }
    const response = await fetch(URL);
    console.log(response);
    const data = await response.json();
    console.log(data);
    } catch(error){
           console.log(error)
    }
}
function AddAmiibo() {
    document.querySelector(".flex-container").insertAdjacentHTML("beforeend",
    `
    <div class="amiibocard">
    <h1 class="title"><h1>
    <h2 class="description">        <h2>
    `
    )
};  
getData(Url); 

DomSelectors.form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(DomSelectors.amiiboname.value);
     DomSelectors.form.addEventListener("submit", function(){
        (el)=> el.textContent = DomSelectors.amiiboname.value})}
);    