cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        _time: null,
    },
    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionEnter: function (other, self) {
        this.node.destroy();

        other.node.destroy();
        // if (this._isSelf){
        //     other.node.destroy();
        // }
    },
    // use this for initialization
    onLoad: function () {
        var data = new Date();
        this._time = data.getTime();
    },
    init: function (isSelf) {
        this._isSelf = isSelf;
    },
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        var data = new Date();
        var time = data.getTime() - this._time;
        this.node.y += time * 0.5;
        this._time = data.getTime();
        if (this.node.y > 450) {
            this.node.destroy();
        }
    },
});
