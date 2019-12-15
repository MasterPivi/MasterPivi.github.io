var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;
var together = new Date();
together.setFullYear(2017, 5, 29);
together.setHours(17);
together.setMinutes(30);
together.setSeconds(0);
together.setMilliseconds(0);
if (!document.createElement('canvas').getContext) {
    var msg = document.createElement("div");
    msg.id = "errorMsg";
    msg.innerHTML =
        "您的浏览器不支持 <b><font style='font-size:56px'>HTML5</font><b>  请使用如下浏览器进行浏览：<br/><br/>Chrome 14+/IE 9+/Firefox 7+/Safari 4+";
    document.body.appendChild(msg);
    $("#code").css("display", "none")
    $("#copyright").css("position", "absolute");
    $("#copyright").css("bottom", "10px");
    document.execCommand("stop");
} else {
    setTimeout(function () {
        startHeartAnimation();
    }, 2000);

    timeElapse(together);
    setInterval(function () {
        timeElapse(together);
    }, 500);
}
