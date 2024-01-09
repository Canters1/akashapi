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
    const amiiboData = await fetch(Url);
    const usable= await amiiboData.json()
    if (usable && usable.amiibo) {
     filteredAmiibo(usable.amiibo);
    }
  };
async function All(){
  const amiibodata = await getData(Url);
  if(amiibodata && amiibodata.amiibo){
      Amiibo(amiibodata.amiibo)
  }
  
}


async function filteredAmiibo() {
  const data= await fetch(Url);
  const usabledata = await data.json();
  const filtered = usabledata.amiibo.filter((a)=>a.character === `${DomSelectors.amiiboname.value}`)
  filtered.forEach((d) => { 
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
  function Amiibo(das){
  das.forEach((d)=> {
    document.querySelector(".flex-container").insertAdjacentHTML(
      "beforeend",
      `<div class="amiiboccard" >
<h1 class="amiiboname" >${d.character}</h1>
<img src= "${d.image}" alt="" class="ItemImage">
<h2 class="amiiboseries">${d.amiiboSeries}</h2>

</div>`
  )})
};

function clear(){
  DomSelectors.notfound.textContent=''
}

async function result(){
  
  try{
    const res = await fetch(Url)
    const data = await res.json()
    const mara= data.amiibo.filter((a)=>a.character === `${DomSelectors.amiiboname.value}`)
    if( mara.length === 0){
      clear();
      DomSelectors.notfound.textContent='The Amiibo You are looking for cannot be Found. Check Spelling and Uppercases'
    } else {
      console.log("Found");
    }  }catch{error}}
      
    
All()
DomSelectors.form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    document.querySelector(".flex-container").innerHTML= ""
    clear();
    await Amiibos();
    
    
    result();
    
  }); 