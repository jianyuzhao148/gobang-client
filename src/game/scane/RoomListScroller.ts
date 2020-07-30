class RoomList extends eui.Scroller implements eui.UIComponent {
    private roomList: eui.List;
    constructor() {
        super();
    }
    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    protected childrenCreated(): void {
        super.childrenCreated();
        let list = new eui.List();
        this.roomList.dataProvider = new eui.ArrayCollection(["房间1", "房间2", "房间3"]);
        this.roomList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.selectElement, this);
        this.roomList = list;
    }

    private selectElement(e: eui.PropertyEvent): void {
        console.log("你选择了" + this.roomList.selectedItem + "," + this.roomList.selectedIndex)
    }
}