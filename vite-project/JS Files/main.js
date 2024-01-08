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
const amiibodata = getData(Url)


async function Amiibos() {
    const amiiboData = await getData(Url);
    if (amiiboData && amiiboData.amiibo) {
     AddAmiibo(amiiboData.amiibo);
    }
  };
  Amiibos();


  

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
/*  function SearchforAmiibo(name, data) {
  for (let i = 0; i < data.length; i++) {
    if (name === data[i].character) {
    return data[i];
    }
  }
  return("Cannot Find That Amiibo");
}; */
amiibodata.filter((data)=>data.amiibo.character === `SearchforAmiibo()`)


const Match = SearchforAmiibo(DomSelectors.amiiboname.value);



DomSelectors.form.addEventListener("submit", (e) => {
    e.preventDefault();
    Amiibos()
  
  }); 