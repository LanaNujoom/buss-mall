'use strict';



var arrayProducts = [];
var leftPicImg = document.getElementById('left_pic_img');
var midPictImg = document.getElementById('mid_pic_img');
var rightPictImg = document.getElementById('right_pic_img');
var leftPicText = document.getElementById('left_pic_h2');
var midPicText = document.getElementById('mid_pic_h2');
var rightPicText = document.getElementById('right_pic_h2');
var productSection = document.getElementById('products');
var trialsleft = 25;
var productsCanvas = document.getElementById('productsShart').getContext('2d');
var shownImages = [];
var clear = document.getElementById('clearLocalStorage');



function Product(name, image) {
    this.image = image;
    this.name = name;
    this.url = 'img/' + image;
    this.counter = 0;
    this.timeShow = 0;

    arrayProducts.push(this);
}

function storeProducts(){

    localStorage.setItem('ourProducts', JSON.stringify(arrayProducts));
}

function clearLocalStorage() {

    localStorage.clear();

    arrayProducts = [];

    renderChart();
}


function checkAndRestore() {

    if (localStorage.length > 0) { 
        arrayProducts = JSON.parse(localStorage.getItem('ourProducts')); 
      

    }

}



function renderMallPicst(leftImage, midImage, rightImage) {
    leftPicImg.setAttribute('src', arrayProducts[leftImage].url);
    midPictImg.setAttribute('src', arrayProducts[midImage].url);
    rightPictImg.setAttribute('src', arrayProducts[rightImage].url);

    leftPicText.textContent = arrayProducts[leftImage].name;
    midPicText.textContent = arrayProducts[midImage].name;
    rightPicText.textContent = arrayProducts[rightImage].name;

    arrayProducts[leftImage].timeShow++;
    arrayProducts[midImage].timeShow++;
    arrayProducts[rightImage].timeShow++;


}






function pickImage() {

    // checkAvailability(leftproductImageName);

    do {
        var leftImage = Math.round(Math.random() * (arrayProducts.length - 1));
        var leftproductImageName = arrayProducts[leftImage].name;

    } while (checkAvailability(leftproductImageName));



    do {
        // var leftImage = Math.round(Math.random() * (arrayProducts.length - 1));
        // var midImage = Math.round(Math.random() * (arrayProducts.length - 1));
        var rightImage = Math.round(Math.random() * (arrayProducts.length - 1));
        var rightproductImageName = arrayProducts[rightImage].name;

    } while ( leftImage === rightImage ||  checkAvailability(rightproductImageName));


    do {
        // var leftImage = Math.round(Math.random() * (arrayProducts.length - 1));
        // var midImage = Math.round(Math.random() * (arrayProducts.length - 1));
        var midImage = Math.round(Math.random() * (arrayProducts.length - 1));
        var midproductImageName = arrayProducts[midImage].name;

    } while (leftImage === midImage  || midImage === rightImage ||  checkAvailability(midproductImageName));


    shownImages = [];
    shownImages.push(
        arrayProducts[leftImage],
        arrayProducts[rightImage],
        arrayProducts[midImage]

    )

    renderMallPicst(leftImage, midImage, rightImage)
}


function checkMallPic(objectIndicator) {
    for (var index = 0; index < arrayProducts.length; index++) {
        if (arrayProducts[index].url === objectIndicator) {
            arrayProducts[index].counter++;
            trialsleft--;
        }
    }
}



new Product('bag', 'bag.jpg');
new Product('banana', 'banana.jpg');
new Product('boots', 'boots.jpg');
new Product('chair', 'chair.jpg');
new Product('pen', 'pen.jpg');
new Product('bathroom', 'bathroom.jpg');
new Product('breakfast', 'breakfast.jpg');
new Product('bubblegum', 'bubblegum.jpg');
new Product('cthulhu', 'cthulhu.jpg');
new Product('dog-duck', 'dog-duck.jpg');
new Product('dragon', 'dragon.jpg');
new Product('pet-sweep', 'pet-sweep.jpg');
new Product('scissors', 'scissors.jpg');
new Product('shark', 'shark.jpg');
new Product('sweep', 'sweep.png');
new Product('tauntaun', 'tauntaun.jpg');
new Product('unicorn', 'unicorn.jpg');
new Product('usb', 'usb.gif');
new Product('water-can', 'water-can.jpg');
new Product('wine-glass', 'wine-glass.jpg');

// localStorage.setItem();

pickImage();
clear.addEventListener('click',clearLocalStorage);
checkAndRestore();







productSection.addEventListener('click', countImg);

function countImg(event) {
    var targetId = event.target.id;

    if (trialsleft !== 0) {
        if (targetId === 'left_pic_img' || targetId === 'right_pic_img' || targetId === 'mid_pic_img') { // we are checking if the user clicked on the correct image
            var objectIndicator = event.target.getAttribute('src');

            checkMallPic(objectIndicator);
            numberShown(objectIndicator);
            pickImage();

        }

    } else {
        productSection.removeEventListener('click', countImg);
        renderChart();
        storeProducts();


    }
}




function numberShown(objectIndicator) {
    for (let i = 0; i < arrayProducts.length; i++) {
        if (arrayProducts[i].url === objectIndicator) {
            arrayProducts[i].timeShow++;
        }
    }
}


var results = document.getElementById("results");

results.addEventListener("click", function () {
    var ul = document.createElement("ul");
    var section = document.getElementById("getLst");
    section.appendChild(ul);
    for (let i = 0; i < 20; i++) {
        var li = document.createElement("li");
        li.textContent = arrayProducts[i].name + " / " + "counter: " + arrayProducts[i].counter + " / " + "Time shown: " + arrayProducts[i].timeShow;
        ul.appendChild(li);
    }
});


