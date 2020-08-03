/**
 * 监听装饰器
 */
var Global;
(function (Global) {
    function responseListen(responseNum, func) {
        return function (target, methodName, descriptor) {
            Socket.instance.getMessage(responseNum, func);
        };
    }
    Global.responseListen = responseListen;
})(Global || (Global = {}));
//# sourceMappingURL=Global.js.map