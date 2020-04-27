class Slingshot{
    constructor(bodyA,bodyB){

        var options ={
            bodyA: bodyA,
            bodyB:bodyB,
            stiffness:0.4,
            length:10
        }
        this.chain = chain.create(options);
        World.add(World,this.chain)
    }

    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        strokeWeight (4);
        stroke("blue");
        line(pointA.xpointA.y,pointB.x,pointB.y);
        



    }
}
