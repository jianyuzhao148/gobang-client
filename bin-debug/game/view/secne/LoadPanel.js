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
 * 载入
 */
var LoadPanel = (function (_super) {
    __extends(LoadPanel, _super);
    function LoadPanel() {
        return _super.call(this) || this;
    }
    LoadPanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    LoadPanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    LoadPanel.prototype.onComplete = function () {
    };
    return LoadPanel;
}(Scene));
__reflect(LoadPanel.prototype, "LoadPanel", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=LoadPanel.js.map