canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define the width & height of the rover image.

rover_width=100;
rover_height=100;
background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Create "add()" function
function add() 
{
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;
    rover_imgtag=new Image();
rover_imgtag.onload=uploadrover;
rover_imgtag.src=rover_image;
}
 
	                                     //defining a variable with a new image
	                                     // setting a function, onloading this variable
	                                     // load image

                                         //defining a variable with a new image
	                                     // setting a function, onloading this variable
	                                     // load image

//Create "uploadBackground()" function.
                              
    function  uploadBackground()
    {
        ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
    }                                 //Draw image of background

//Create "uploadrover()" function.

function  uploadrover()
{
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}                                   //Draw image of rover


window.addEventListener( "keydown",my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Write code if keypressed is up. ASCII value of "up" arrow is 38.
		
    if(keyPressed==38);
    {
console.log("up");
    }


     //Write code if keypressed is down. ASCII value of "down" arrow is 40.
     if(keyPressed==40);
     {
 console.log("down");
     }	
     if(keyPressed==37);
    {
console.log("left");
    }	
    if(keyPressed==39);
    {
console.log("right");
    }



    //Additional Activity
    //Write the code for left and right arrow pressed. 
}

function up(){

}
function down(){
	
}
function right(){
	
}
function left(){
	
}



