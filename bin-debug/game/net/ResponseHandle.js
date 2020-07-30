var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ResponseHandle = (function () {
    function ResponseHandle() {
    }
    ResponseHandle.prototype.handle = function () {
        Socket.instance.getMessage("0", function (data) {
            console.log(data);
        });
        Socket.instance.getMessage("1", function (data) {
            console.log(data);
        });
        Socket.instance.getMessage("2", function (data) {
            console.log(data);
        });
        Socket.instance.getMessage("3", function (data) {
            console.log(data);
        });
        Socket.instance.getMessage("4", function (data) {
            console.log(data);
        });
    };
    return ResponseHandle;
}());
__reflect(ResponseHandle.prototype, "ResponseHandle");
//# sourceMappingURL=ResponseHandle.js.map