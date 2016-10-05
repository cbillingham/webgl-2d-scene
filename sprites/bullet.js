
(function () {

    window.sprites = window.sprites || {};

    window.sprites.bullet = (function () {

        // Put your canvas drawing code (and any other code) here.

        var drawBulletBody = function (ctx) {

            ctx.save();

            ctx.fillStyle = "rgb(50, 50, 50)";
            ctx.beginPath();
            ctx.moveTo(10,5);
            ctx.lineTo(10,-5);
            ctx.lineTo(0,-5);
            ctx.quadraticCurveTo(-15, 0, 0, 5)
            ctx.lineTo(10,5)
            ctx.fill();

            ctx.restore();

        }

        var drawBulletTrail = function (ctx, trailpercent) {

            ctx.save();
            trailpercent = trailpercent || 0;
            var traillength = trailpercent * ctx.canvas.width;

            var gradient = ctx.createLinearGradient(0, 0, traillength, 0);
            gradient.addColorStop(0, "rgba(200,200,200,1)");
            gradient.addColorStop(1, "rgba(200,200,200,0)");

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.moveTo(12, 4);
            ctx.lineTo(12 + traillength , 1);
            ctx.lineTo(12 + traillength , -1);
            ctx.lineTo(12, -4);
            ctx.lineTo(12, 4);
            ctx.fill();

            ctx.restore();

        }

        var drawBullet = function (ctx, options) {

            options = options || {traillength: 0};
            drawBulletBody(ctx);
            drawBulletTrail(ctx, options.traillength);

        }

        return {draw: drawBullet};

    }());
       
}());
