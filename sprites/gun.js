
(function () {
    
    window.sprites = window.sprites || {};

    window.sprites.gun = (function () {  

        var drawBarrel = function (ctx, options) {

            ctx.save();

            //Draw handle and bottom of gun
            ctx.beginPath();
            ctx.moveTo(90, 10);
            ctx.lineTo(-70, 10);
            ctx.lineTo(-70, 20);
            ctx.lineTo(-65, 20)
            ctx.quadraticCurveTo(-65, 22, -60, 22);
            ctx.lineTo(50,22);
            ctx.lineTo(55,35);
            ctx.quadraticCurveTo(55, 45, 58, 48);
            ctx.quadraticCurveTo(58, 57, 61, 60);
            ctx.quadraticCurveTo(61, 67, 64, 70);
            ctx.lineTo(95, 70);
            ctx.lineTo(85, 30);
            ctx.quadraticCurveTo(85, 20, 93, 20);

            var gradient = ctx.createLinearGradient(0, 10 ,0 , 70);
            gradient.addColorStop(0, "#9A9A9A");
            gradient.addColorStop(0.04, "black");
            ctx.fillStyle = gradient;
            ctx.fill();

            //Draw actual barrel
            ctx.beginPath();
            ctx.moveTo(-68, 8);
            ctx.lineTo(-68, -3);
            ctx.lineTo(0, -3);
            ctx.lineTo(0, 8);
            ctx.lineTo(-68, 8);
            ctx.fillStyle = "black";
            ctx.fill();

            //Draw top of gun
            ctx.translate(options.recoil * 30, 0);

            ctx.beginPath();
            ctx.moveTo(90, 10);
            ctx.quadraticCurveTo(90, 0, 85, -5);
            ctx.lineTo(80, -5);
            ctx.lineTo(77, -9);
            ctx.lineTo(50, -9);
            ctx.lineTo(47, -5);
            ctx.lineTo(-55, -5);
            ctx.lineTo(-57, -8);
            ctx.lineTo(-60, -8);
            ctx.lineTo(-63, -5);
            ctx.lineTo(-68, -5);
            ctx.lineTo(-70, -3);
            ctx.lineTo(-70, 10);
            ctx.lineTo(90, 10);

            gradient = ctx.createLinearGradient(0, -5 ,0 , 10);
            gradient.addColorStop(0, "#262626");
            gradient.addColorStop(0.8, "#9A9A9A");

            ctx.fillStyle = gradient;
            ctx.fill();

            //Draw trigger guard and trigger
            ctx.beginPath();
            ctx.moveTo(25, 22);
            ctx.quadraticCurveTo(30, 40, 60, 35);

            ctx.strokeStyle = "black";
            ctx.lineWidth = 3;

            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(45, 22);
            ctx.quadraticCurveTo(45, 30, 43, 30);

            ctx.lineWidth = 2;
            ctx.stroke();


            ctx.restore();
        }

        var drawGun = function(ctx, options) { // JD: 1

            options = options || {recoil: 0};
            drawBarrel(ctx, options);
        }

        return {draw: drawGun};

    }());
    
}());
