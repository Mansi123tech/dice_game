var randomNumber1 = Math.floor(Math.random()*6) + 1;
var img_no = "dice"+randomNumber1+".png";
var randomImage = "./images/"+img_no;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage);


var randomNumber2 = Math.floor(Math.random()*6) + 1;
var img_no2 = "dice"+randomNumber2+".png";
var randomImage2 = "./images/"+img_no2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);
