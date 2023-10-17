let galleryarray = [
    {
        id:1,
        name: " Iphone 14 Pro Max",
        src : "./14promax.jpg",
        desc: " Tremendo el celu",
        price: "1700 USD"
    },
    {
        id:2,
        name: "Samsung S23 Ultra ",
        src : "./samsungS23U.jpg",
        desc: " Facheraso",
        price: "1500 USD"
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