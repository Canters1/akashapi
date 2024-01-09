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
     filteredAmiibo(amiiboData.amiibo);
    }
  };
Amiibos()

async function filteredAmiibo() {
  const data= await fetch(Url);
  const usabledata = await data.json();
  const filtered = usabledata.filter((a)=>a.amiibo.character === `${DomSelectors.amiiboname.value}`)
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



DomSelectors.form.addEventListener("submit", (e) => {
    e.preventDefault();
    Amiibos();
    filteredAmiibo();
    
  }); 