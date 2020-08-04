class ResponseEvent extends egret.Event{
    public static DATA="Response"

    public data:string;

    public constructor(type: string, bubbles: boolean=false, cancelable:boolean=false){
        super(type, bubbles, cancelable);
    }
}