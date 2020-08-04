/**
 * 大厅场景
 */
class HallScene extends Scene implements eui.UIComponent {
    private socket: Socket;
    private userInfoList:eui.List;
    private newsList:eui.List;

    private task:eui.Button;

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

        this.userInfoList.dataProvider=new eui.ArrayCollection([{}]);
        this.userInfoList.itemRenderer=UserInfo;


        this.newsList.dataProvider=new eui.ArrayCollection([{news:"这是一条新闻测试请忽略"},{news:"这是一条新闻测试请忽略"},{news:"这是一条新闻测试请忽略"},{news:"这是一条新闻测试请忽略"},{news:"这是一条新闻测试请忽略"},{news:"这是一条新闻测试请忽略"},{news:"这是一条新闻测试请忽略"},{news:"这是一条新闻测试请忽略"},{news:"这是一条新闻测试请忽略"}]);
        this.newsList.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.selectElement,this);



        this.socket.sendMessage("0", JSON.stringify({ "userId": 1, "password": 123 }),this.handle);
    }

    private handle(e){
        let data=JSON.parse(e.data);
        console.log(data);
        this.removeEventListener(ResponseEvent.DATA,this.handle,Socket)
    }

    private selectElement(e: eui.PropertyEvent): void {
        console.log("你选择了" + this.newsList.selectedItem + "," + this.newsList.selectedIndex)
    }
}