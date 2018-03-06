
function getData(url){

  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    }

    req.onerror = function() {
      reject(Error("Network Error"));
    }

    req.send()

  })
}

let data;

//Primera promesa

getData('https://swapi.co/api/films')
.then((respuesta) => {
  data = JSON.parse(respuesta)
})
.then(() => {
  console.log(data.results);
  const swapiData = data.results;
  paintSwapiFilms(swapiData);
})

//*********Segunda prmesa imprimiendo caracteristicas en modal
//*********No supe implementar bien que al darle clic en el url se abriera el modal
/* //Segunda promesa
getData('https://swapi.co/api/people')
.then((respuesta) => {
data = JSON.parse(respuesta)
})

.then(() => {
console.log(data.results);
const swapiDataPeople = data.url;
paintSwapiPeople(swapiDataPeople)
})

function paintSwapiPeople(swapiDataPeople){
swapiDataPeople.forEach(function(element){
console.log(swapiDataPeople);
})
}

//Pintando modal
function getJson(swapiDataPeople) {
$('.modal').modal();
let containerFilms = document.getElementById('modal-content');
let outputCharacter = ' ';
swapiDataPeople.forEach(item =>{

outputCharacter +=
`<figure class = "${"imgs"}">
<img src = "${"https://dummyimage.com/200"}">
<a>Name:${item.name}</a>
<a>Height: ${item.height}</a>
<a>Hair Color: ${item.hair_color}</a>
<a>Eye Color: ${item.eye_color}</a>
</figure>`
}
}*/

//Pintando Filmes

function paintSwapiFilms(swapiData){
  let containerFilms = document.getElementById('container-films');
  let output = ' ';

  swapiData.forEach(item =>{
      output +=
      `<figure class = "${"imgs"}">
      <img src = "${"https://dummyimage.com/150"}">
      <h6>Id:${item.episode_id}</h6>
      <h6>Title: ${item.title}</h6>
      <h6>characters:<a href="modal1"> ${item.characters[0]}</a></h5>
      </figure>`
  });


  containerFilms.innerHTML = output;
  return swapiData;
}
