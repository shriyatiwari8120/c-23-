class Box{
    constructor(x,y,l,b){
       this.body =  Matter.Bodies.rectangle(x,y,l,b)
       Matter.World.add(angryWorld,this.body);

       this.length=l;
       this.breadth=b;
       
    }

    display(){
        rectMode(CENTER)
        push()
        fill('black');
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle);
        rect(0,0,this.length,this.breadth)
        pop()
    }
}