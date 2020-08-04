var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 大厅场景
 */
var HallScene = (function (_super) {
    __extends(HallScene, _super);
    function HallScene() {
        var _this = _super.call(this) || this;
        _this.socket = Socket.instance;
        return _this;
    }
    HallScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    HallScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    HallScene.prototype.onComplete = function () {
        this.userInfoList.dataProvider = new eui.ArrayCollection([{}]);
        this.userInfoList.itemRenderer = UserInfo;
        this.newsList.dataProvider = new eui.ArrayCollection([{ news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }]);
        this.newsList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.selectElement, this);
        this.socket.sendMessage("0", JSON.stringify({ "userId": 1, "password": 123 }), this.handle);
    };
    HallScene.prototype.handle = function (e) {
        var data = JSON.parse(e.data);
        console.log(data);
        this.removeEventListener(ResponseEvent.DATA, this.handle, Socket);
    };
    HallScene.prototype.selectElement = function (e) {
        console.log("你选择了" + this.newsList.selectedItem + "," + this.newsList.selectedIndex);
    };
    return HallScene;
}(Scene));
__reflect(HallScene.prototype, "HallScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=HallScene.js.map