/**
 * 监听装饰器
 */
module Global {

    export function responseListen(responseNum: string,func:Function) {
        return (target, methodName, descriptor) => {
            Socket.instance.getMessage(responseNum,func)
        }
    }
}