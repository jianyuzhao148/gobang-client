class Socket {
    public static _socket: Socket;
    private socketio: SocketIOClient.Socket;

    public constructor() {
        this.socketio = io.connect("http://192.168.1.110:8081/gobang");
    }

    public static get instance() {
        if (Socket._socket == null) {
            this._socket = new Socket();
        }
        return Socket._socket;
    }

    /**
     * 发送消息
     * @param msgNum 
     * @param msg 
     */
    public sendMessage(msgNum: string, msg: string) {
        this.socketio.emit(msgNum, msg);
    }

    /**
     * 获取响应
     * @param mesNum 
     * @param func 
     */
    public getMessage(mesNum: string,func:Function) {
        this.socketio.on(mesNum, func);
    }
}