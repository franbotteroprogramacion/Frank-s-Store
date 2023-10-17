let galleryarray = [
    {
        id:7,
        name: " Xbox Serie S",
        src : "./Xbox.jpg",
        desc: "Xbox Serie S",
        price: "800 USD"
    },
    {
        id:8,
        name: "Nintendo Switch",
        src : "./nintendo.jpg",
        desc: "Nintendo Switch",
        price: "1000 USD"
    },
    {
        id:9,
        name: "Play Station 5",
        src : "./play5.jpg",
        desc: "Play Station 5",
        price: "1300 USD"
    }
]
showgallery(galleryarray);

function showgallery(currarray){

    document.getElementById("card").innerText = "";

    for(var i=0; i<currarray.length;i++){
        document.getElementById("card").innerHTML +=`
            <div class = "col-md-4 mt-3">
            <div class = "card p-3 ps-5 pe-5">
                <h4 class = "text-capitalize text-center"><strong>${currarray[i].name}</strong></h4>
                <img class="imag" src ="${currarray[i].src}" />
                <p class="parr mt-2">${currarray [i].desc}</p>
                <p class="parr mt-2"><strong>${currarray [i].price}</strong></p>
            </div>
            </div>
        `
    }

}

function index(){
    location.href = "../index.html"
}
function TV(){
    location.href = "../tv/tv.html"
}
function celular(){
    location.href = "../celulares/celular.html"
}
function reloj(){
    location.href = "../reloj/reloj.html"
}
function Consolas(){
    location.href = "../consola/consola.html"
}