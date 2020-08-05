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
    public sendMessage(msgNum: string, msg: string): Promise<any> {
        this.socketio.emit(msgNum, msg);

        let promise = new Promise(async (resolve, reject) => {
            this.socketio.on(msgNum, (data) => {
                resolve(data);
            });
        });
        return promise;
    }

    /**
     * 获取响应
     * @param mesNum
     */
    public getMessage(msgNum: string){
        this.socketio.on(msgNum,(data)=>{
            // console.log(data)
        });
    }
}