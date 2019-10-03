class LoginForm{
    constructor(){
        this.state = 'hide'
    }
    show(){
        if(this.state === 'show'){
            console.log('already show')
            return
        }
        this.state = 'show'
        console.log('now show')
    }
    hide(){
        if(this.state === 'hied'){
            console.log('already show ')
            return
        }
        this.state = 'hide'
        console.log('now show')
    }
}

LoginForm.getInstance = (function(){
    let instance
    return function(){
        if(instance){
            return instance
        }
        return new LoginForm()
    }
})()

