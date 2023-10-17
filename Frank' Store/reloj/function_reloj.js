let galleryarray = [
    {
        id:3,
        name: " Reloj AppleWatch",
        src : "/reloj/applewatch.jpg",
        desc: "Relojito de Iphone",
        price: "700 USD"
    },
    {
        id:4,
        name: " Samsung Watch",
        src : "/reloj/samsungwatch.jpg",
        desc: "Reloj Samsung",
        price: "500 USD"
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