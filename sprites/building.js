(function () {

    window.sprites = window.sprites || {};

    window.sprites.building = (function () {
        // Put your canvas drawing code (and any other code) here.

        var DEFAULT = {width: 200, height: 600, windows: 1, colorShift: 0, crack: 0};
        var WINDOW_WIDTH = 15;
        var WINDOW_HEIGHT = 20;
        var MIN_SPACE_WIDTH = 10;
        var MIN_SPACE_HEIGHT = 15;
        var SIDE_PERSPECTIVE = 17;
        var DEPTH_PERSPECTIVE = 20;

        var concreteImage = new Image();
        concreteImage.src = "../sprites/images/concrete.jpg";

        var crackImage = new Image();
        // JD: Have you tried this...
        /*
        $(crackImage).load(function (event) {
            console.log("Loaded! You can draw me now...");
        });
        */
        // JD: ^^^Of course replace the console.log with some action
        //     that will tell the outer system that the image is
        //     ready to use.
        crackImage.src = "../sprites/images/windowcrack.png";
        
        var drawWindow = function (ctx) {

            ctx.save();

            ctx.translate( -(WINDOW_WIDTH / 2), -(WINDOW_HEIGHT / 2));

            var gradient = ctx.createLinearGradient(0, 0, 15, 0);
            gradient.addColorStop(0, "#B8F9FF");
            gradient.addColorStop(0.2, "white");
            gradient.addColorStop(0.9, "#99F6FF");
            ctx.fillStyle = gradient;
            ctx.fillRect(0,0,15,20);
            ctx.lineWidth = 1;
            ctx.strokeRect(0,0,15,20);

            ctx.restore();

        }

        var drawWindows = function (ctx, options) {

            ctx.save
            ctx.translate(-(options.width/2), -(options.height/2));

            
            var rows = options.height/(MIN_SPACE_HEIGHT + WINDOW_HEIGHT);
            var columns = options.width/(MIN_SPACE_WIDTH + WINDOW_WIDTH);

            var spacingWidth = (options.width - (columns * WINDOW_WIDTH))/(columns + 1);
            var spacingHeight = (options.height - (rows * WINDOW_HEIGHT))/(rows + 1);

            ctx.translate(spacingWidth + (WINDOW_WIDTH / 2), spacingHeight + (WINDOW_HEIGHT / 2));

            for (var i = 1; i < rows; i++) {
                ctx.save();
                for (var j = 0; j < columns; j++) {

                    drawWindow(ctx, options);
                    if (i == 3 && j == 2 && options.crack >= 1) {
                        ctx.drawImage(crackImage, -5, -5, 10, 10);
                    }
                    ctx.translate(spacingWidth+(WINDOW_WIDTH), 0);
                }
                ctx.restore();
                ctx.translate(0, spacingHeight+(WINDOW_HEIGHT));
            }
            ctx.restore();

        }
        
        

        var drawFoundation = function (ctx, options) {

            ctx.save();
            width = options.width;
            height = options.height;
            var top = -height/2;
            var rightside = width/2;

            var drawBase = function () {

                
                ctx.beginPath();
                ctx.moveTo(rightside, top);
                ctx.lineTo(rightside - width, top);
                ctx.lineTo(rightside - width, top + height);
                ctx.lineTo(rightside, top + height);
                ctx.lineTo(rightside, top);
                ctx.lineWidth = 0.5;
                ctx.stroke();
                ctx.fill();
            }

            var drawRoof = function () {

                ctx.fillStyle = gradient;

                ctx.beginPath();
                ctx.moveTo(rightside-(width+SIDE_PERSPECTIVE), top-DEPTH_PERSPECTIVE );
                ctx.lineTo(rightside-(SIDE_PERSPECTIVE), top-DEPTH_PERSPECTIVE );
                ctx.lineTo(rightside, top );
                ctx.lineTo(rightside-width, top );
                ctx.lineTo(rightside-(width+SIDE_PERSPECTIVE), top-DEPTH_PERSPECTIVE );
                ctx.lineWidth = 0.5;
                ctx.stroke();
                ctx.fill();
            }

            var drawSide = function () {

                ctx.fillStyle = gradient;

                ctx.beginPath();
                ctx.moveTo( rightside-(width+SIDE_PERSPECTIVE), top-DEPTH_PERSPECTIVE );
                ctx.lineTo(rightside-(width+SIDE_PERSPECTIVE), (top+height)-DEPTH_PERSPECTIVE );
                ctx.lineTo(rightside-(width), (top+height));
                ctx.lineTo(rightside-width, top );
                ctx.lineTo(rightside-(width+SIDE_PERSPECTIVE), top-DEPTH_PERSPECTIVE );
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.fill();
            }

            ctx.fillStyle = ctx.createPattern(concreteImage, "repeat");
            drawBase();
            ctx.fillStyle = "rgba(12, 10, 20, " + options.colorShift * 0.5 + ")";
            drawBase();

            var color1 = 100 - 50 * options.colorShift;
            var color2 = 150 - 50 * options.colorShift;

            var gradient = ctx.createLinearGradient(0, top, 0, top-DEPTH_PERSPECTIVE);
                gradient.addColorStop(1, "rgb( " + color1 + ", " + color1 + ", " + color1 + ")");
                gradient.addColorStop(0, "rgb( " + color2 + ", " + color2 + ", " + color2 + ")");
            drawRoof();

            gradient = ctx.createLinearGradient(rightside-width, 0, rightside-(width+SIDE_PERSPECTIVE), 0);
                gradient.addColorStop(1, "rgb( " + color1 + ", " + color1 + ", " + color1 + ")");
                gradient.addColorStop(0, "rgb( " + color2 + ", " + color2 + ", " + color2 + ")");
            drawSide();

            ctx.restore();

        }

        var drawBuilding = function (ctx, options) {

            ctx.save();

            options = options || DEFAULT;
            drawFoundation(ctx, options);

            if (options.windows == 1) {
                drawWindows(ctx, options);
            }

            ctx.restore();
        }

        return {draw: drawBuilding};

    }());

}());
