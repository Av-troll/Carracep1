canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var background_image = "racing.jpg";
var car1_image = "car1.png";
var car2_image = "car2.jpg";

var car1_x = 10;
var car1_y = 10;

var car2_x = 10;
var car2_y = 100;

var car1_width = 150;
var car1_height = 90;

var car2_width = 150;
var car2_height = 90;

function add(){
    background_imagetag =new Image();
    background_imagetag.onload = UploadBackground;
    background_imagetag.src = background_image;

    car1_imagetag =new Image();
    car1_imagetag.onload = UploadCar1;
    car1_imagetag.src = car1_image;

    car2_imagetag =new Image();
    car2_imagetag.onload = UploadCar2;
    car2_imagetag.src = car2_image;
}

function UploadBackground(){
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}
function UploadCar1(){
    ctx.drawImage(car1_imagetag,car1_x,car1_y,car1_width,car1_height);
}
function UploadCar2(){
    ctx.drawImage(car2_imagetag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",keydown);

function keydown(e){
    keypressed=e.keycode;
    console.log("keypressed");

    if(keypressed == '38'){
        car1_up();
        console.log("up_arrow_key");
    }

    if(keypressed == '40'){
        car1_down();
        console.log("down_arrow_key");
    }

    if(keypressed == '37'){
        car1_left();
        console.log("left_arrow_key");
    }

    if(keypressed == '39'){
        car1_right();
        console.log("right_arrow_key");
    }


    

    if(keypressed == '87'){
        car1_up();
        console.log("w_key");
    }

    if(keypressed == '83'){
        car1_down();
        console.log("s_key");
    }

    if(keypressed == '65'){
        car1_left();
        console.log("a_key");
    }

    if(keypressed == '68'){
        car1_down();
        console.log("d_key");
    }
}