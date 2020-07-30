class ResponseHandle {
    public constructor() {

    }

    public handle() {
        Socket.instance.getMessage("0", (data) => {
            console.log(data);
        });
        Socket.instance.getMessage("1", (data) => {
            console.log(data);
        });
        Socket.instance.getMessage("2", (data) => {
            console.log(data);
        });
        Socket.instance.getMessage("3", (data) => {
            console.log(data);
        });
        Socket.instance.getMessage("4", (data) => {
            console.log(data);
        });
    }

}