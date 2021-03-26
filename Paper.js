class PaperClass {

    constructor(x, y,radius) {
        var options = {
          'isStatic': false,
          'density':1,
          'friction': 0,
          'restitution': 0.5
          };
          this.radius = radius;
        this.body = Bodies.circle(x, y,(this.radius-20)/2,options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      };
       display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        fill(225);
        image(this.image,0,0, this.radius);
        pop();
      };
    };