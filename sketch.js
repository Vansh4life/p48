var button;

var gameState = "level1";
var gS = "serve";

var score = 0;
var compScore = 0;
var playerScore = 0;

function preload()
{
	temple = loadImage("temple.jpg");
	maze = loadImage("maze.png");
	character = loadImage("character.png");
	grass = loadImage("grass.jpg");
	arrowImg = loadImage("arrow.png");
	basketImg = loadImage("basket.png");
	sky = loadImage("sky.jpg");
	key = loadImage("key.png");
	character2 = loadImage("character2.png");
	monster = loadImage("monster.png");
	rock = loadImage("rock.png");
}

function setup() {
	createCanvas(displayWidth, displayHeight);

	button = new Form();

	keysGrp = new Group();

//Character

	ch = createSprite(190, 80, 5 ,5);
	ch.addImage(character);
	ch.scale = 0.04


	arrow = createSprite(displayWidth - 100, displayHeight - 100);
	arrow.addImage(arrowImg);
	arrow.scale = 0.1;

	basket = createSprite(displayWidth/2, displayHeight - 60);
	basket.addImage(basketImg);
	basket.scale = 0.2;

	//create the ball, playerPaddle and computerPaddle as sprite objects
	ball = createSprite(displayWidth/2,displayHeight/2,10,10);
	ball.addImage(rock);
	ball.scale = 0.05;

	playerPaddle = createSprite(displayWidth - 30,displayHeight/2,10,70);
	playerPaddle.addImage(character2);
	playerPaddle.scale = 0.1

	computerPaddle = createSprite(30,displayHeight/2,10,70);
	computerPaddle.velocityY = 20
	computerPaddle.addImage(monster);
	computerPaddle.scale = 0.3


//Maze pieces from Level 1

	m1 = createSprite(105,displayHeight/2,40,displayHeight-200);
	m2 = createSprite(displayWidth/2-79,displayHeight-103,displayWidth-325,40);
	m3 = createSprite(displayWidth/2+92,displayHeight/2-297,displayWidth-330,30);
	m4 = createSprite(displayWidth/2+890,displayHeight/2,40,displayHeight-200);
	m5 = createSprite(displayWidth/2-790,displayHeight/2+70,displayWidth-1770,30);
	m6 = createSprite(displayWidth/2-617,displayHeight/2-170,displayWidth-1770,30);
	m7 = createSprite(displayWidth/2-695,displayHeight/2-110,40,displayHeight/2-268);
	m8 = createSprite(displayWidth/2-345,displayHeight/2-168,40,displayHeight/2-150);
	m9 = createSprite(displayWidth/2-417,displayHeight/2-53,displayWidth/2-460,30);
	m10 = createSprite(displayWidth/2-532,displayHeight/2+15,40,displayHeight/2-300);
	m11 = createSprite(displayWidth/2-176,displayHeight/2+15,40,displayHeight/2-290);
	m12 = createSprite(displayWidth/2-281,displayHeight/2+61,displayWidth/8-70,30);
	m13 = createSprite(displayWidth/2-349,displayHeight/2+120,40,displayHeight/2-275);
	m14 = createSprite(displayWidth/2-510,displayHeight/2+175,displayWidth/4-130,30);
	m15 = createSprite(displayWidth/2-175,displayHeight/2+240,40,displayHeight/2-275);
	m16 = createSprite(displayWidth/2+181,displayHeight/4-35,40,displayHeight/2-275);
	m17 = createSprite(displayWidth/2-74,displayHeight/4+34,displayWidth/8-40,30);
	m18 = createSprite(displayWidth/2+8,displayHeight/2-106,40,displayHeight/2-275);
	m19 = createSprite(displayWidth/2+95,displayHeight/4+154,displayWidth/8-32,30);
	m20 = createSprite(displayWidth/2+182,displayHeight/2+15,40,displayHeight/2-273);
	m21 = createSprite(displayWidth/2+358,displayHeight/4+277,displayWidth/4-100,30);
	m22 = createSprite(displayWidth/2+534,displayHeight/2-60,40,displayHeight/2-160);
	m23 = createSprite(displayWidth/2+536,displayHeight/4+34,displayWidth/4-100,30);
	m24 = createSprite(displayWidth/2+360,displayHeight/2-110,40,displayHeight/4-70);
	m25 = createSprite(displayWidth/2+360,displayHeight/2+125,40,displayHeight/4-80);
	m26 = createSprite(displayWidth/2+7,displayHeight/2+130,40,displayHeight/4-90);
	m27 = createSprite(displayWidth/2+184,displayHeight/2+175,displayWidth/4-100,30);
	m28 = createSprite(displayWidth/2+700,displayHeight/2+190,displayWidth/4-150,30);
	m29 = createSprite(displayWidth/2+184,displayHeight/2+240,40,displayHeight/4-90);
	m30 = createSprite(displayWidth/2+713,displayHeight/2+2,40,displayHeight/4-70);
	m31 = createSprite(displayWidth/2+800,displayHeight/2-54,displayWidth/4-280,30);
	m32 = createSprite(50,100,100,40);
	m33 = createSprite(280,50,40,100);

	m1.shapeColor = "black";
	m2.shapeColor = "black";
	m3.shapeColor = "black";
	m4.shapeColor = "black";
	m5.shapeColor = "black";
	m6.shapeColor = "black";
	m7.shapeColor = "black";
	m8.shapeColor = "black";
	m9.shapeColor = "black";
	m10.shapeColor = "black";
	m11.shapeColor = "black";
	m12.shapeColor = "black";
	m13.shapeColor = "black";
	m14.shapeColor = "black";
	m15.shapeColor = "black";
	m16.shapeColor = "black";
	m17.shapeColor = "black";
	m18.shapeColor = "black";
	m19.shapeColor = "black";
	m20.shapeColor = "black";
	m21.shapeColor = "black";
	m22.shapeColor = "black";
	m23.shapeColor = "black";
	m24.shapeColor = "black";
	m25.shapeColor = "black";
	m26.shapeColor = "black";
	m27.shapeColor = "black";
	m28.shapeColor = "black";
	m29.shapeColor = "black";
	m30.shapeColor = "black";
	m31.shapeColor = "black";
	m32.shapeColor = "black";
	m33.shapeColor = "black";












  
}


function draw() {
	if(gameState === "intro"){
  background(temple);

  textSize(60);
  fill("white");
  textFont("Burbank Big Condensed Bold")
  stroke("black");
  strokeWeight(10);
  text("The Gold-Making Trophy", displayWidth/2 -350, displayHeight/2-140);
  
	button.display();
	}

	if(gameState === "level1"){
		clear();

		playerPaddle.visible = false;
		computerPaddle.visible = false;
		ball.visible = false;
		basket.visible = false;

		background(grass);
		textSize(40);
  		fill("white");
  		textFont("Burbank Big Condensed Bold")
		stroke("black");
		strokeWeight(10);
  		text("LEVEL 1", 50, 40);

		  if(keyDown(DOWN_ARROW)){
			ch.y = ch.y + 8;
		}

		if(keyDown(UP_ARROW)){
			ch.y = ch.y - 8;
		}

		if(keyDown(RIGHT_ARROW)){
			ch.x = ch.x + 8;
		}

		if(keyDown(LEFT_ARROW)){
			ch.x = ch.x - 8;
		}

		if(ch.isTouching(m1)||ch.isTouching(m2)||ch.isTouching(m3)||ch.isTouching(m4)||ch.isTouching(m5)||ch.isTouching(m6)||ch.isTouching(m7)||ch.isTouching(m8)||ch.isTouching(m9)||ch.isTouching(m10)||ch.isTouching(m11)||ch.isTouching(m12)||ch.isTouching(m13)||ch.isTouching(m14)||ch.isTouching(m15)||ch.isTouching(m16)||ch.isTouching(m17)||ch.isTouching(m18)||ch.isTouching(m19)||
		ch.isTouching(m20)||ch.isTouching(m21)||ch.isTouching(m22)||ch.isTouching(m23)||ch.isTouching(m24)||ch.isTouching(m25)||ch.isTouching(m26)||ch.isTouching(m27)||ch.isTouching(m28)||ch.isTouching(m29)||ch.isTouching(m30)||
		ch.isTouching(m31)||ch.isTouching(m32)||ch.isTouching(m33)){
			ch.x = 190;
			ch.y = 80;
		}

		if(ch.isTouching(arrow)){
			gameState = "level2"
		}

		drawSprites();
	}

	if(gameState === "level2"){
		clear();
		ch.visible = false;
		arrow.visible = false;
		m1.visible= false;
		m2.visible= false;
		m3.visible= false;
		m4.visible= false;
		m5.visible= false;
		m6.visible= false;
		m7.visible= false;
		m8.visible= false;
		m9.visible= false;
		m10.visible= false;
		m11.visible= false;
		m12.visible= false;
		m13.visible= false;
		m14.visible= false;
		m15.visible= false;
		m16.visible= false;
		m17.visible= false;
		m18.visible= false;
		m19.visible= false;
		m20.visible= false;
		m21.visible= false;
		m22.visible= false;
		m23.visible= false;
		m24.visible= false;
		m25.visible= false;
		m26.visible= false;
		m27.visible= false;
		m28.visible= false;
		m29.visible= false;
		m30.visible= false;
		m31.visible= false;
		m32.visible= false;
		m33.visible= false;
		playerPaddle.visible = false;
		computerPaddle.visible=false;
		ball.visible = false;
		background(sky);

		textSize(40);
  		fill("white");
  		textFont("Burbank Big Condensed Bold")
		stroke("black");
		strokeWeight(10);
  		text("LEVEL 2", 50, 40);
		  textSize(35)
		text("Collect 15 keys to unlock next level", 100, 100)
		text("Keys Collected: " + score, 100, 150);

		
		

		

		basket.x = mouseX

			for(var i = 0; i<keysGrp.length; i++){
				if(keysGrp.get(i).isTouching(basket)){
					keysGrp.get(i).destroy();
					score = score+1;
				}
			}
			spawnKeys();
			drawSprites();
		
		if(score === 15){
			gameState = "level3"
		}
	}

	if(gameState === "level3"){
		clear();
		keysGrp.destroyEach();
fill("white");
		ch.visible = false;
		arrow.visible = false;
		m1.visible= false;
		m2.visible= false;
		m3.visible= false;
		m4.visible= false;
		m5.visible= false;
		m6.visible= false;
		m7.visible= false;
		m8.visible= false;
		m9.visible= false;
		m10.visible= false;
		m11.visible= false;
		m12.visible= false;
		m13.visible= false;
		m14.visible= false;
		m15.visible= false;
		m16.visible= false;
		m17.visible= false;
		m18.visible= false;
		m19.visible= false;
		m20.visible= false;
		m21.visible= false;
		m22.visible= false;
		m23.visible= false;
		m24.visible= false;
		m25.visible= false;
		m26.visible= false;
		m27.visible= false;
		m28.visible= false;
		m29.visible= false;
		m30.visible= false;
		m31.visible= false;
		m32.visible=false;
		m33.visible=false;
		basket.visible = false;
		background(grass);

		if(ball.x > displayWidth) {
			compScore = compScore + 1;
			reset();
			gS = "serve";
			}
			
		  if(ball.x < 0) {
			playerScore = playerScore + 1;
			reset();
			gS = "serve";
			}
			
		  
		  
		  if (keyDown("r") && gS === "over") {
			gS = "serve";
			compScore = 0;
			playerScore = 0;
		  }
		drawSprites();




			
			if(playerScore===1){
				textSize(35);
			text("You Won!",displayWidth/2-100,displayHeight/2-60);
			gameState = "win";
			compScore = 0;
			playerScore = 0;
			}
			if(compScore===1){
				gS = "over";
				textSize(35);
			text("Game Over!",displayWidth/2-100,displayHeight/2-60);
			text("Press 'R' to Restart",displayWidth/2-150,displayHeight/2-20);
			}
			
		
		if (gS === "serve") {
			textSize(35)
			text("Press Space to Serve",displayWidth/2-150,displayHeight/2-20);
		  }
		  //display scores
		  textSize(35);
  text(compScore + " - ", displayWidth/2-20,50);
  text(" "+playerScore, displayWidth/2+20,50);
  
  //make the player paddle move with the mouse's y position
  playerPaddle.y = mouseY;
  
	var edges = createEdgeSprites();

	computerPaddle.bounceOff(edges[3]);
	computerPaddle.bounceOff(edges[2]);
	ball.bounceOff(edges[3]);
	ball.bounceOff(edges[2]);
	ball.bounceOff(playerPaddle);
	ball.bounceOff(computerPaddle);

	if (keyDown("space") &&  gS === "serve") {
		serve();
		gS = "play";
	  }

 	}
if(gameState==="win"){
	clear();

		background(temple)

		fill("white")
		textSize(55);
		text("You Won!",displayWidth/2-250,displayHeight/2-60);

	

}

  
}

function spawnKeys(){
	if(frameCount % 30 === 0){
		keys = createSprite(random(10,displayWidth-10),0,10,10);
		keys.velocityY = +5
		keys.addImage(key);
		keys.scale = 0.2;
		keys.lifetime = 160;
		keysGrp.add(keys);

	}
}


function serve() {
	ball.velocityX = 10;
	ball.velocityY = 12;
  }
  
  function reset() {
	ball.x = displayWidth/2;
	ball.y = displayHeight/2;
	ball.velocityX = 0;
	ball.velocityY = 0;
  }