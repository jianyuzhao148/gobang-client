/**
 * 大厅场景
 */
class HallScene extends Scene implements eui.UIComponent {
    private socket: Socket;

    private newsScroller: eui.Scroller;
    private roomScroller: eui.Scroller;
    private userInfoList: eui.List;
    private newsList: eui.List;
    private roomList: eui.List;

    private search: eui.Button;
    private searchInput: eui.TextInput;

    private task: eui.Button;
    private friend: eui.Button;
    private shop: eui.Button;
    private mail: eui.Button;

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

    protected async onComplete() {
        /**
         * UserInfo Column
         */
        let userData = JSON.parse(await this.socket.sendMessage("0", JSON.stringify({ "userId": 1, "password": 123 })));
        this.userInfoList.dataProvider = new eui.ArrayCollection([{}]);
        this.userInfoList.itemRenderer = UserInfoItem;

        /**
         * News Column
         */
        this.newsList.dataProvider = new eui.ArrayCollection([{ news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }, { news: "这是一条新闻测试请忽略" }]);
        this.newsList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.selectElement, this);
        this.newsScroller.verticalScrollBar.autoVisibility = false;
        this.newsScroller.verticalScrollBar.visible = false;

        /**
         * RoomList Column
         */
        this.search.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {

        }, this);

        this.roomList.dataProvider = new eui.ArrayCollection([
            { player1Image: "resource/assets/default.jpg", player2Image: "resource/assets/default.jpg", title: "五子棋-标准", player1Name: "玩家1", player2Name: "玩家2", player1Title: "十段", player2Title: "八段" },
            { player1Image: "resource/assets/default.jpg", player2Image: "resource/assets/default.jpg" },
            { player1Image: "resource/assets/default.jpg", player2Image: "resource/assets/default.jpg" },
            { player1Image: "resource/assets/default.jpg", player2Image: "resource/assets/default.jpg" },
            { player1Image: "resource/assets/default.jpg", player2Image: "resource/assets/default.jpg" },
            { player1Image: "resource/assets/default.jpg", player2Image: "resource/assets/default.jpg" },
            { player1Image: "resource/assets/default.jpg", player2Image: "resource/assets/default.jpg" },
            { player1Image: "resource/assets/default.jpg", player2Image: "resource/assets/default.jpg" }]);
        this.roomList.addEventListener(eui.ItemTapEvent.ITEM_TAP, (e: eui.PropertyEvent)=>{
            console.log("你选择" + this.roomList.selectedItem + "," + this.roomList.selectedIndex)
        }, this.roomList);
        this.roomList.itemRenderer = RoomListItem;
        this.roomScroller.verticalScrollBar.autoVisibility = false;
        this.roomScroller.verticalScrollBar.visible = false;

        /**
         * Menu Column
         */
        this.task.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            SecneManager.instance.pushScene(new CardPanel());
        }, this)

        this.friend.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            SecneManager.instance.pushScene(new CardPanel());
        }, this)

        this.shop.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            SecneManager.instance.pushScene(new CardPanel());
        }, this)

        this.mail.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            SecneManager.instance.pushScene(new CardPanel());
        }, this)

    }

    private selectElement(e: eui.PropertyEvent): void {
        console.log("你选择了" + this.newsList.selectedItem + "," + this.newsList.selectedIndex)
    }
}