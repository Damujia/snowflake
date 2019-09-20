(function() {
    var elements = [];

    function snowflake(width, x, y, src) {
        this.width = 80,
            this.height = 80,
            this.x = x || 0,
            this.y = y || 0,
            this.src = "zodian.png"
    }
    snowflake.prototype.init = function(body) {
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
        imgs.style.transform = "translateY(700px)";
        elements.push(imgs);
        if (imgs.style.transform == "translateY(700px)") {
            imgs.style.width = 0;
        };
    };
    window.snowflake = snowflake;
}());
(function() {
    var son = new snowflake();
    // son.init();
    var shi = setInterval(function() {
        son.init();
    }, 100);
}());