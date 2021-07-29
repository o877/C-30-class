class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility=255
  }
  display(){

    console.log(this.body.speed)

    if (this.body.speed<3){
      super.display();
    }
    else{
      push();
      World.remove(world, this.body)
      this.visibility-=5
      tint(255, this.visibility)
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
  }

};

// 1 unit of computer memory = 1 byte
// 1 byte = 8 bits
// completely off byte = black = invisible = 0 = (00000000)
// completely on byte = white = visible = 255 = (11111111)