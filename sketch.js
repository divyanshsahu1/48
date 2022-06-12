var title,button,input
var limit = 0
var limited=0
var db,pc,gs,greet,rbutton
var playerdata
var replace
function preload(){

}

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  title = createElement("H1")
title.html("HOT --- AIR --- BALLOON")
title.position(window.innerWidth/2-200,50)

title = createElement("H2")
title.html("1. press to uparrow key and downarrow key to move baloon up and down")
title.position(window.innerWidth/2-600,500)
title = createElement("H2")
title.html("2. collect coin to make highest score")
title.position(window.innerWidth/2-600,530)
title = createElement("H2")
title.html("3. save from birds")
title.position(window.innerWidth/2-600,560)

input=createInput()
input.position(window.innerWidth/2-100,300)
input.attribute("placeholder","Enter Your Name")
input.style("textAlign","center")
input.style("height","30px")

button =createButton("submit")
button.position(window.innerWidth/2-50,350)
button.style("backgroundColor","red")
button.style("height","60px")
button.style("width","60px")
button.style("borderRadius","30px")

rbutton= createButton("Reset")
rbutton.position(110,100)
rbutton.mousePressed(function(){
  db.ref("/").update(({playerCount : 0,gameState:0}))
  db.ref("players").remove()
})

db=firebase.database()
db.ref("playerCount").on("value",function (data){
pc=data.val()

})

db.ref("gameState").on("value",function(data){
  gs=data.val()
})

button.mousePressed(playerentry)
}

function draw() {
  background("pink");
  if ( gs === 1 && limit===0){
    db.ref("players").on("value",function(data){
    playerdata=data.val()
    
    })
    limit=1
    }  
    if (pc===1){
      gs=1
      db.ref("/").update({gameState:gs})
      
      }
      if(gs===1){
        greet.hide()
      title.hide()
      
    
        drawSprites()
      }
}

function playerentry(){
  pc=pc+1
  replace=pc
  db.ref("/").update({
    playerCount:pc
  })
  button.hide()
  input.hide()
  
}