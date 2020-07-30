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
 * 创建房间
 * 暂不需要
 */
var CreatePanel = (function (_super) {
    __extends(CreatePanel, _super);
    function CreatePanel() {
        return _super.call(this) || this;
    }
    CreatePanel.prototype.onComplete = function () {
    };
    CreatePanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CreatePanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return CreatePanel;
}(Scene));
__reflect(CreatePanel.prototype, "CreatePanel", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=CreatePanel.js.map