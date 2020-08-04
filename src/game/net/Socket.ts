class Socket extends eui.Component{
    public static _socket: Socket;
    private socketio: SocketIOClient.Socket;

    public constructor() {
        super()
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
    public sendMessage(msgNum: string, msg: string,func:Function) {
        this.socketio.emit(msgNum, msg);
        this.addEventListener(ResponseEvent.DATA,func,this);
    }

    /**
     * 获取响应
     * @param mesNum
     */
    public getMessage(mesNum: string) {
        this.socketio.on(mesNum,(data)=>{
            let responseEvent:ResponseEvent=new ResponseEvent(ResponseEvent.DATA);
            responseEvent.data=data;
            this.dispatchEvent(responseEvent);
        });
    }
}