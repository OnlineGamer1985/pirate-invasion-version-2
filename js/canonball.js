class CannonBall {
    constructor(x, y) {
        this.radius = 30
        this.body = Bodies.circle(x, y, this.radius)
        World.add(World, this.body)
        this.image = loadimage('./assets/cannonball.png')
    }
    fire() {

    }

    display() {
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius)
    }

}