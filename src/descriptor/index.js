
function log(target, name, descriptor){
    let oldValue = descriptor.value;
    descriptor.value = function(){
        console.log('log..', arguments);
        return oldValue.apply(this, arguments)
    }
}

class Math{
    @log
    add(a,b){
        return a + b
    }
}

let math = new Math()
math.add(1,2)