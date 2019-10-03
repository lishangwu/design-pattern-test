class Adaptee{
    specificRequest(){
        return 'a..'
    }
}

class Target{
    constructor(){
        this.adaptee = new Adaptee()
    }
    request(){
        let info = this.adaptee.specificRequest()
        return `${info} -> change -> b..`
    }
}

let target = new Target()
target.request()