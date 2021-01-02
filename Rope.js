class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY) {

        console.log("hey");
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var opts = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.5,
            length : 15
            
        }

        this.rope = Matter.Constraint.create(opts);
        World.add(world, this.rope);
    }
    display() {
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position


        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);

    } 



};
