var StateMachine = require('javascript-state-machine');

var fsm = new StateMachine({
    init: '收藏',
    transitions: [
        { name: 'doStore', from: '收藏', to: '取消收藏' },
        { name: 'deleteStore', from: '取消收藏', to: '收藏' },
    ],
    methods: {
        onDoStore: function () { 
            console.log('收藏成功') 
            updateText()
        },
        onDeleteStore: function () { 
            console.log('已经取消收藏') 
            updateText()
        },
    }
});


function updateText(){

}