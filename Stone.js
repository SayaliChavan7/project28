class Stone{
    constructor(x, y,r) {
        var options = {
            'restitution':0.6,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,r, options);
        this.r=r;
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
      }
      display()
      {
        var StonePos=this.body.position;	
        push()
        translate(StonePos.x, StonePos.y);
        // rectMode(CENTER);
        rotate(this.body.angle)
        fill(255,0,255)
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0,0,this.r*2, this.r*2)
        pop()
     }
    }
      




     