const { readonly } = require('core-decorators')
class Person{
    @readonly
    name(){
        return 'sb..'
    }
}

let p = new Person()
console.log(p.name())

// p.name = 'asd'