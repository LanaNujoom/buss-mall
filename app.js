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



function Product(name, image) {
    this.image = image;
    this.name = name;
    this.url = 'img/' + image;
    this.counter = 0;
    this.timeShow = 0;

    arrayProducts.push(this);
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

function renderChart() {

    var arrayOfProductNames = [];
    var arrayOfProductCount = [];
    var arrayOfProductShown = [];


    for (var index = 0; index < arrayProducts.length; index++) {
        arrayOfProductNames.push(arrayProducts[index].name);
        arrayOfProductCount.push(arrayProducts[index].counter);
        arrayOfProductShown.push(arrayProducts[index].timeShow);

    }

    var myChart = new Chart(productsCanvas, {
        type: 'bar',
        data: {
            labels: arrayOfProductNames,
            datasets: [
                {
                    label: '# of Product Clicks',
                    data: arrayOfProductCount,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(200, 159, 64, 0.2)',
                        'rgba(255, 103, 132, 0.2)',
                        'rgba(54, 144, 235, 0.2)',
                        'rgba(50, 206, 86, 0.2)',
                        'rgba(75, 192, 89, 0.2)',
                        'rgba(153, 102, 55, 0.2)',
                        'rgba(255, 201, 64, 0.2)',
                        'rgba(87, 162, 235, 0.2)',
                        'rgba(233, 206, 86, 0.2)',
                        'rgba(88, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159,90, 0.2)',
                        'rgba(54, 77, 235, 0.2)',
                        'rgba(255, 55, 86, 0.2)',
                        'rgba(77, 192, 90, 0.2)',
                        'rgba(200, 102, 255, 0.2)',
                        'rgba(255, 200, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(250, 159, 64, 1)',
                        'rgba(153, 100, 255, 1)',
                        'rgba(153, 103, 255, 1)',
                        'rgba(153, 102, 205, 1)',
                        'rgba(154, 100, 255, 1)',
                        'rgba(65, 102, 255, 1)',
                        'rgba(153, 206, 255, 1)',
                        'rgba(206, 206, 255, 1)',
                        'rgba(206, 102, 255, 1)',
                        'rgba(153, 103, 255, 1)',
                        'rgba(158, 102, 255, 1)',
                        'rgba(159, 101, 255, 1)',
                        'rgba(153, 200, 255, 1)',
                        'rgba(175, 102, 255, 1)'

                    ],
                    borderWidth: 1
                },
                {
                    label: 'Time shown for the Product',
                    data: arrayOfProductShown,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(200, 159, 64, 0.2)',
                        'rgba(255, 103, 132, 0.2)',
                        'rgba(54, 144, 235, 0.2)',
                        'rgba(50, 206, 86, 0.2)',
                        'rgba(75, 192, 89, 0.2)',
                        'rgba(153, 102, 55, 0.2)',
                        'rgba(255, 201, 64, 0.2)',
                        'rgba(87, 162, 235, 0.2)',
                        'rgba(233, 206, 86, 0.2)',
                        'rgba(88, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159,90, 0.2)',
                        'rgba(54, 77, 235, 0.2)',
                        'rgba(255, 55, 86, 0.2)',
                        'rgba(77, 192, 90, 0.2)',
                        'rgba(200, 102, 255, 0.2)',
                        'rgba(255, 200, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(250, 159, 64, 1)',
                        'rgba(153, 100, 255, 1)',
                        'rgba(153, 103, 255, 1)',
                        'rgba(153, 102, 205, 1)',
                        'rgba(154, 100, 255, 1)',
                        'rgba(65, 102, 255, 1)',
                        'rgba(153, 206, 255, 1)',
                        'rgba(206, 206, 255, 1)',
                        'rgba(206, 102, 255, 1)',
                        'rgba(153, 103, 255, 1)',
                        'rgba(158, 102, 255, 1)',
                        'rgba(159, 101, 255, 1)',
                        'rgba(153, 200, 255, 1)',
                        'rgba(175, 102, 255, 1)'

                    ],
                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


}


function checkAvailability(selectedProductName) {

    for (var index = 0; index < shownImages.length; index++) {
        if (shownImages[index].name === selectedProductName) {
            return true;

        }

    }
    return false;

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
        var rightproductImageName = arrayProducts[leftImage].name;

    } while (leftImage === midImage || leftImage === rightImage || midImage === rightImage || checkAvailability(rightproductImageName));


    do {
        // var leftImage = Math.round(Math.random() * (arrayProducts.length - 1));
        // var midImage = Math.round(Math.random() * (arrayProducts.length - 1));
        var midImage = Math.round(Math.random() * (arrayProducts.length - 1));
        var midproductImageName = arrayProducts[leftImage].name;

    } while (leftImage === midImage || leftImage === rightImage || midImage === rightImage || checkAvailability(rightproductImageName) || checkAvailability(midproductImageName) || checkAvailability(leftproductImageName));


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


pickImage();



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


