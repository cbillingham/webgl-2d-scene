
(function () {
    
    window.sprites = window.sprites || {};

    window.sprites.flare = (function () {

        var drawFlare = function(ctx, options) { // JD: 1

            options = options || {flare: 1};

            ctx.save();

            ctx.scale(options.flare, options.flare);

            ctx.beginPath();

            ctx.moveTo(0, 5);
            ctx.quadraticCurveTo(60, 20, 0, 35);
            ctx.quadraticCurveTo(-50, 45, -10, 30);
            ctx.quadraticCurveTo(-150, 20, -10, 10);
            ctx.quadraticCurveTo(-50, -5, 0, 5);

            ctx.fillStyle = "red";
            ctx.fill();

            ctx.scale(0.8, 0.8);
            ctx.translate(7, 5);

            ctx.beginPath();
            ctx.moveTo(0, 5);
            ctx.quadraticCurveTo(60, 20, 0, 35);
            ctx.quadraticCurveTo(-50, 45, -10, 30);
            ctx.quadraticCurveTo(-150, 20, -10, 10);
            ctx.quadraticCurveTo(-50, -5, 0, 5);

            ctx.fillStyle = "yellow";
            ctx.fill();

            ctx.restore();

        }

        return {draw: drawFlare};

    }());
    
}());