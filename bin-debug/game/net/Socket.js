var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Socket = (function () {
    function Socket() {
        this.socketio = io.connect("http://192.168.1.110:8081/gobang");
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
    Socket.prototype.sendMessage = function (msgNum, msg) {
        this.socketio.emit(msgNum, msg);
    };
    /**
     * 获取响应
     * @param mesNum
     * @param func
     */
    Socket.prototype.getMessage = function (mesNum, func) {
        this.socketio.on(mesNum, func);
    };
    return Socket;
}());
__reflect(Socket.prototype, "Socket");
//# sourceMappingURL=Socket.js.map