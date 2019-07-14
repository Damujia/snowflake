(function () {
    function snowflake(width, x, y, src) {
        this.width = 80,
            this.height = 80,
            this.x = x || 0,
            this.y = y || 0,
            this.src = "zodian.png"
    }
    var shujia = 0;
    snowflake.prototype.init = function (body) {
        // document.body.style.height = 620 + "px";
        var imgs = document.createElement('img');
        document.body.appendChild(imgs);
        imgs.style.transition = "all 3s";
        imgs.style.width = this.width + "px";
        imgs.src = this.src;
        imgs.style.position = "absolute";
        this.x = parseInt(Math.random() * document.body.offsetWidth);
        this.y = parseInt(Math.random() * document.body.offsetHeight);
        imgs.style.left = this.x + "px";
        imgs.style.top = this.y + "px";
        shujia = 700;
        imgs.style.transform = "translateY("+ shujia +"px)";
        if ((document.body.clientWidth-imgs.clientHeight) == 600) {
            imgs.style.width = 0;
            shujia = 0;
            imgs.remove();
        };
    };
    window.snowflake = snowflake;
}());
(function () {
    var son = new snowflake();
    // son.init();
    var shi = setInterval(function () {
        son.init();
    }, 5);
}());