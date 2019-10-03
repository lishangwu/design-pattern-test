console.log(Array.prototype[Symbol.iterator]);//返回一个Funciton
console.log(Map.prototype[Symbol.iterator]);
console.log(Set.prototype[Symbol.iterator]);
console.log(String.prototype[Symbol.iterator]);
// console.log(TypedArray.prototype[Symbol.iterator]);
// console.log(arguments.prototype[Symbol.iterator]);
// console.log(NodeList.prototype[Symbol.iterator]);

function each(data){
    let iterator = data[Symbol.iterator]()
    let item = {done: false}
    while(!item.done){
        item = iterator.next()
        if(!item.done){
            console.log(item.value)
        }
    }
}
function each2(data){
    for(let item of data){
        console.log(item)
    }
}

each([1,2,3])

let map = new Map()
map.set('a', 1)
map.set('b', 2)
each2(map)