class Circle{
    draw(){
        console.log('draw..')
    }
}

class Decorator{
    constructor(circle){
        this.circle = circle
    }
    draw(){
        this.circle.draw()
        this.setRedBorader(this.circle)
    }
    setRedBorader(circle){
        console.log('set red..');
    }
}

let circle = new Circle()
circle.draw()

let d = new Decorator(circle)
d.draw()