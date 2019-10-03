const EventEmitter = require('events').EventEmitter
// const emitter1 = new EventEmitter();
// emitter1.on('some', info => {
//     console.log('fn1', info);
// })
// emitter1.on('some', info => {
//     console.log('fn2', info);
// })

// emitter1.emit('some', 'xxx')

class Dog extends EventEmitter{
    constructor(name){
        super()
        this.name = name
    }
}

let simon = new Dog('simon')
simon.on('bark', function(){
    console.log(this.name, 'bark');
})
simon.on('bark', function(){
    console.log(this.name, 'bark');
})
setInterval(()=>{
    simon.emit('bark')
},1000)
