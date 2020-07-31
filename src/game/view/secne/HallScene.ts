/**
 * 大厅场景
 */
class HallScene extends Scene implements eui.UIComponent {
    private createRoom: eui.Button;
    private fastGame: eui.Button;
    private roomListScroller: RoomListScroller
    private socket: Socket;

    constructor() {
        super();
        this.socket = Socket.instance;
    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    protected childrenCreated(): void {
        super.childrenCreated();
    }

    protected onComplete() {
        this.socket.sendMessage("0", JSON.stringify({ "userId": 1, "password": 123 }));//登录模拟
        this.createRoom.addEventListener(egret.TouchEvent.TOUCH_TAP, this.create, this);
        this.fastGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.fast, this);
    }

    private create() {
        SecneManager.instance.changeScene(new RoomScene());
    }

    private fast() {
        console.log("快速开始")
    }

    private turnPage() {
        console.log("test");
    }
}