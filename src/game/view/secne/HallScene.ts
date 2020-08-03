/**
 * 大厅场景
 */
class HallScene extends Scene implements eui.UIComponent {

    private nickname:eui.Label;
    private title :eui.Label;
    private probability :eui.Label;
    private wealth :eui.Label;
    private total :eui.Label;
    private socket: Socket;

    private createRoom:eui.Button;

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

    @Global.responseListen("0",(data,target)=>{
        console.log(data);
        console.log(target)
    })
    protected onComplete() {
        this.socket.sendMessage("0", JSON.stringify({ "userId": 1, "password": 123 }));//登录模拟
        this.createRoom.addEventListener(egret.TouchEvent.TOUCH_TAP,this.create,this);

    }

    private create(){
        SecneManager.instance.changeScene(new RoomScene());
    }
}