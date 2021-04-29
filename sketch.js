var score = 0
var gameState = "play"
function preload() {
  backGroundImg = loadImage("background2.png")
  PlayerImg = loadImage("pc.png")
  TaggerImg = loadImage("npc.png")
  obstacleImg = loadImage("Boulder.png")
}
function setup() {
  createCanvas(600, 600)
  backGround = createSprite(0, 0, 600, 600)
  backGround.addImage(backGroundImg)
  backGround.scale = 3
  player = createSprite(80, 500, 10, 10)
  player.addImage(PlayerImg)
  player.scale = 0.4
  invisGround = createSprite(400, 500, 2000, 10)
  invisGround.visible = false
  tagger = createSprite(40, 500, 20, 10)
  tagger.addImage(TaggerImg)
  tagger.scale = 0.4
  obstacleGroup = new Group()
}
function draw() {
  background("brown")
  console.log(player.y)
  if (gameState === "play") {
    score = score + Math.round(frameCount / 200)
    backGround.velocityX = -2
   // player.velocityX = 0
    if (backGround.x < 0) {
      backGround.x = 300
    }
    if (keyDown("Up_Arrow") && player.y > 410) {
      player.velocityY = -15
    }
    if (keyDown("Right_Arrow")) {
      player.velocityX = 3
    }
    if (keyDown("Left_Arrow")) {
      player.velocityX = -3
    }
    player.velocityY = player.velocityY + 0.8
    tagger.y = player.y
    spawnObstacles()
    if (obstacleGroup.isTouching(player)) {
      score = score - 5
    }
    if (tagger.isTouching(player)) {
gameState = "end"
    }
  }
 
  else if (gameState === "end") {
//backGround.velocityX = 0

  }

  player.collide(invisGround)


  drawSprites()
  textSize(30)
  fill("white")
  text("Score:  " + score, 100, 100)
}
function spawnObstacles() {
  if (frameCount % 250 === 0) {
    obstacle = createSprite(600, 450, 20, 20)
    obstacle.addImage(obstacleImg)
    obstacle.scale = 0.2
    obstacle.velocityX = -2
    obstacleGroup.add(obstacle)
  }
}