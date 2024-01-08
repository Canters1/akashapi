import { DomSelectors } from "/JS Files/Dom.js";

const Url = "https://www.amiiboapi.com/api/amiibo";
async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json(); //makes the data into JSON object we can use
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
 


async function Amiibos() {
    const amiiboData = await getData(Url);
    if (amiiboData && amiiboData.amiibo) {
     AddAmiibo(amiiboData.amiibo);
    }
  };

async function search(){
  const amiibodata =  await getData(Url);
  amiibodata.filter((x)=> x.amiibo.character).forEach(()=>{
amiibodata.amiibo.character
  })
  for ( let x=0; i++; ){
if(x= amiibodata){
  return "Your Amiibo Cannot be Found";
} else {

}
}}
  

function AddAmiibo(dfw) {
  dfw.forEach((d) => {
    document.querySelector(".flex-container").insertAdjacentHTML(
      "beforeend",
      `<div class="amiiboccard">
<h1 class="amiiboname">${d.character}</h1>
<img src= "${d.image}" alt="" class="ItemImage">
<h2 class="amiiboseries">${d.amiiboSeries}</h2>
</div>`
    );
  });
};

DomSelectors.form.addEventListener("submit", (e) => {
    e.preventDefault();
  
  }); 