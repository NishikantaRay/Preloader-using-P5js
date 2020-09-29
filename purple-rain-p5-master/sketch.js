var newDrops;

function setup(){
  createCanvas(windowWidth, windowHeight);
  newDrops = [];
  for (var i = 0; i < 250; i++) {
    newDrops.push(new Drop());
  };
}

function draw(){
  background(230,230,250);
  newDrops.forEach(function(drop){
    drop.fall();
    drop.show();
  })
}

