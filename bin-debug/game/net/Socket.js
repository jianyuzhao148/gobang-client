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
var Socket = (function (_super) {
    __extends(Socket, _super);
    function Socket() {
        var _this = _super.call(this) || this;
        _this.socketio = io.connect("http://192.168.1.110:8081/gobang");
        return _this;
    }
    Object.defineProperty(Socket, "instance", {
        get: function () {
            if (Socket._socket == null) {
                this._socket = new Socket();
            }
            return Socket._socket;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 发送消息
     * @param msgNum
     * @param msg
     */
    Socket.prototype.sendMessage = function (msgNum, msg, func) {
        this.socketio.emit(msgNum, msg);
        this.addEventListener(ResponseEvent.DATA, func, this);
    };
    /**
     * 获取响应
     * @param mesNum
     */
    Socket.prototype.getMessage = function (mesNum) {
        var _this = this;
        this.socketio.on(mesNum, function (data) {
            var responseEvent = new ResponseEvent(ResponseEvent.DATA);
            responseEvent.data = data;
            _this.dispatchEvent(responseEvent);
        });
    };
    return Socket;
}(eui.Component));
__reflect(Socket.prototype, "Socket");
//# sourceMappingURL=Socket.js.map