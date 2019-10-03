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

let src = "http://img0.imgtn.bdimg.com/it/u=2854956166,1658664264&fm=26&gp=0.jpg"
let result = loadImg(src)
result.then(function(img){
    alert(img.width)
    return img
}).then(function(img){
    alert(img.height)
}).catch(function(err){
    alert(err)
})
console.log('object..')