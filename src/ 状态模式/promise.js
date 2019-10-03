function loadImg(src){
    let promise = new Promise(function(resolve, reject){
        let img = document.createElement('img')
        img.onload = function(){
            resolve(img)
        }
        img.onerror = function(){
            reject('img err')
        }
        img.src = src
    })
    return promise;
}
//-------------------------------------
var StateMachine = require('javascript-state-machine');
var fsm = new StateMachine({
    init: 'pending',
    transitions: [
        { name: 'resolve', from: 'pending', to: 'fullfilled' },
        { name: 'reject', from: 'pending', to: 'rejected' },
    ],
    methods: {
        onResolve: function (state, data) { 
            data.successList.forEach(fn=> fn())
        },
        onReject: function (state, data) { 
            data.failList.forEach(fn=> fn())
        },
    }
});

class MyPromise{
    constructor(fn){
        this.successList = []
        this.failList = []

        fn(()=>{
            fsm.resolve(this)
        },()=>{
            fsm.reject(this)
        })

    }
}