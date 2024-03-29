document.addEventListener("DOMContentLoaded", ()=>{


// hamburguesa
const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () => {
  nav.classList.add("visible")
})

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible")
})


/* array de objetos */
const shoes = [{
  "img":"../img/Flavio_negro-cat.jpg",
  "img2":"../img/Flavio_negro-cat2.jpg",
  "ref":"Flavio",
  "price":"249,00€"
},{
  "img":"../img/Bristol_marron-cat.jpg",
  "img2":"../img/Bristol_marron-cat2.jpg",
  "ref":"Bristol",
  "price":"249,00€"
},{
  "img":"../img/Bonn_marron-cat.jpg",
  "img2":"../img/Bonn_marron-cat2.jpg",
  "ref":"Bonn",
  "price":"249,00€"
},{
  "img":"../img/Atlanta_negro-cat.jpg",
  "img2":"../img/Atlanta_negro-cat2.jpg",
  "ref":"Atlanta",
  "price":"383,00€"
},{
  "img":"../img/Detroit_burdeos-cat.jpg",
  "img2":"../img/Detroit_burdeos-cat2.jpg",
  "ref":"Detroit",
  "price":"383,00€"
},{
  "img":"../img/Orlando_negro-cat.jpg",
  "img2":"../img/Orlando_negro-cat2.jpg",
  "ref":"Orlando",
  "price":"383,00€"
},{
  "img":"../img/Basilea_marron-cat.jpg",
  "img2":"../img/Basilea_marron-cat2.jpg",
  "ref":"Basilea",
  "price":"249,00€"
},{
  "img":"../img/Stanford_negro-cat.jpg",
  "img2":"../img/Stanford_negro-cat2.jpg",
  "ref":"Stanford",
  "price":"249,00€"
}]



/*Caja donde vamos a ponerlo*/
const gallery = document.getElementById("gallery")



const mapGallery = shoes.map(
  (photo)=>{
    return(`
    <div class="product__card">
      <img src="${photo.img2}" alt="Gallery_back">
      <img class="top" src="${photo.img}" alt="Gallery_front">
      <div class="card__text">
        <p>${photo.ref}</p>
        <p>${photo.price}</p>
      </div>
    </div>
    `)
  }
)


gallery.innerHTML = mapGallery.join(" ")


})