// create a canvas and set its height and width, as well as a context variable
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

// stretch the canvas to the full width and restart the animation on resize
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
    
  // empty the array
  circleArray = [];
  
  init();
});

// create a mouse object with x and y properties (for now with undefined values)
var mouse = {
  x: undefined,
  y: undefined
}



// setting a variable for the circle's colors
c.strokeStyle = 'rgba(0, 153, 255, 0.5)';
var colorArray = [
  '#d0163b',
  '#e92f54',
  '#f5a3b3',
  '#ed5e7b',
  '#a1122e'
];

// Create a circle as a javascript object (capital letter to indicate that this is an object). Objects's syntax looks like a function
function Circle(x, y, dx, dy, radius) {
  
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;  
  this.radius = radius;
  this.minRadius = radius;
  this.maxRadius = radius * 15;
  this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
    
  //creating two methods(functions) for the object
  // 1) to draw a circle at random positions
    this.draw = function() {
       // start drawing the circle
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
      c.fillStyle = this.color;
      c.fill();
      c.strokeStyle = this.color;
      c.stroke();
      
      // interactivity
      
      if ( mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.x > 50 &&
          mouse.y - this.y < 50 && mouse.y - this.y > -50 && mouse.y > 50 &&
          this.radius < this.maxRadius) {
        this.radius += 3;
      } else if ( this.radius > this.minRadius ) {
        this.radius -= 1;
      }
    }

  // 2) to increment the circle's x/y positions = moving the circle
  this.move = function() {
      //change the direction when you hit the end of the screen
      if (this.x-radius > innerWidth || this.x-radius < 0) {
        this.dx = -this.dx;
      }

      if (this.y-radius > innerHeight || this.y-radius < 0) {
        this.dy = -this.dy;
      }
      
      // increment the circle's x/y positions
      this.x += this.dx;
      this.y += this.dy;
 
    }
}

// create an empty array that will store all Circle objects that we will create
var circleArray = [];

// create 50 circles with random positions and moving speeds and push them into the circleArray
function init () {

  
  for (var i = 0; i < 200; i++) {

    var radius = Math.random() * 8 + 1;

    // setting random x/y variables within the inner boundaries minus the circle's radius, so it doesn't get stuck in the sides of the screen --> random number in a specified range = Math.random() * (max-min) + min;
    var x = Math.random() * (innerWidth - radius) + radius;
    var y = Math.random() * (innerHeight - radius) + radius;

    var randomPositive1 = Math.round(Math.random()) * 2 - 1;
    var randomPositive2 = Math.round(Math.random()) * 2 - 1;
    // creating random velocity within a specified range (1-3)
    var dx = (Math.random() * (1-0.1) + 0.1) * randomPositive1;
    var dy = (Math.random() * (1-0.1) + 0.1) * randomPositive2;

    // push one instance of a Circle object into the circleArray
    // the most important here is the word "new" - it creates a new instance of a Circle object
    circleArray.push(new Circle(x, y, dx, dy, radius));

  }
}

init();

function animate() {
	requestAnimationFrame(animate);
  
  // clearing the canvas from all shapes
  c.clearRect(0,0, innerWidth, innerHeight);
  
  // take the amount of objects in the circleArray by using a .length property directly in the loop definition
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].draw();
    circleArray[i].move();
  }
}

animate();