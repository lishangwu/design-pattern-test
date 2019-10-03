class State{
    constructor(color){
        this.color = color
    }
    handle(context){
        console.log(`this.color: ${this.color}`)
        context.setState(this)
    }
}

class Context{
    constructor(){
        this.state = null
    }
    getState(){
        return this.state
    }
    setState(state){
        this.state = state
    }
}

let context = new Context()
let a = new State('a')
let b = new State('b')
let c = new State('c')

a.handle(context)
console.log(context.getState());
b.handle(context)
console.log(context.getState());
c.handle(context)
console.log(context.getState());