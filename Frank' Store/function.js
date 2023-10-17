let galleryarray = [
    {
        id:1,
        name: " Iphone 14 Pro Max",
        src : "./celulares/14promax.jpg",
        desc: "El celular del momento",
        price: "1700 USD"
    },
    {
        id:2,
        name: "Samsung S23 Ultra ",
        src : "./celulares/samsungS23U.jpg",
        desc: "S23 Ultra con buena cámara",
        price: "1500 USD"
    },
    {
        id:3,
        name: " Reloj AppleWatch",
        src : "./reloj/applewatch.jpg",
        desc: "Reloj de Iphone",
        price: "700 USD"
    },
    {
        id:4,
        name: " Samsung Watch",
        src : "./reloj/samsungwatch.jpg",
        desc: "Reloj Samsung",
        price: "500 USD"
    },
    {
        id:5,
        name: " TV LG 50'",
        src : "./tv/LG-50.jpg",
        desc: "TV LG de 50'",
        price: "900 USD"
    },
    {
        id:6,
        name: " TV Samsung 50'",
        src : "./tv/samsung50.jpg",
        desc: "TV Samsung de 50'",
        price: "1000 USD"
    },
    {
        id:7,
        name: " Xbox Serie S",
        src : "./consola/Xbox.jpg",
        desc: "Xbox Serie S",
        price: "800 USD"
    },
    {
        id:8,
        name: "Nintendo Switch",
        src : "./consola/nintendo.jpg",
        desc: "Nintendo Switch",
        price: "1000 USD"
    },
    {
        id:9,
        name: "Play Station 5",
        src : "./consola/play5.jpg",
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
    location.href = "./index.html"
}
function TV(){
    location.href = "./tv/tv.html"
}
function celular(){
    location.href = "./celulares/celular.html"
}
function reloj(){
    location.href = "./reloj/reloj.html"
}
function Consolas(){
    location.href = "./consola/consola.html"
}