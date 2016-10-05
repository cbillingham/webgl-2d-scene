/*
 * This file demonstrates how our homebrew keyframe-tweening
 * engine is used.
 */

// JD: 1
var background = new Image();
// JD: 2
background.src = "../sprites/images/background.jpg";

(function () {

    window.sprites = window.sprites || {};
    window.sprites.bg = (function () {

        var drawBackground = function (ctx, options) {

            ctx.save();

            ctx.drawImage(background, 0, 0, ctx.canvas.width, ctx.canvas.height);

            ctx.restore();
        };

        return {draw: drawBackground};
    })();
})();


(function () {
    var canvas = document.getElementById("canvas"),

        

        // First, a selection of "drawing functions" from which we
        // can choose.  Their common trait: they all accept a single
        // renderingContext argument.
        // JD: 3

        // Now, to actually define the animated sprites.  Each sprite
        // has a drawing function and an array of keyframes.
        sprites = [
            {
                draw: window.sprites.bg.draw, // JD: 4
                keyframes: [
                    {
                        frame: 0,
                        sx: 1,
                        sy: 1,
                        ease: KeyframeTweener.quadEaseInOut
                        
                    },

                    {
                        frame: 100,
                        sx: 1,
                        sy: 1,
                        ease: KeyframeTweener.quadEaseInOut
                        
                    },

                    {
                        frame: 300,
                        sx: 1.2,
                        sy: 1.2,
                        ease: KeyframeTweener.quadEaseInOut
                    },
                ]
            },
            {
                draw: window.sprites.building.draw,
                keyframes: [
                    {
                        frame: 0,
                        tx: 200, 
                        ty: 600,
                        sx: 1,
                        sy: 1,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 200, height: 600, windows: 1, colorShift: 0.3, crack: 0}
                    },

                    {
                        frame: 100,
                        tx: 200, 
                        ty: 600,
                        sx: 1,
                        sy: 1,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 200, height: 600, windows: 1, colorShift: 0.3, crack: 0}
                    },

                    {
                        frame: 300,
                        tx: 200, 
                        ty: 800,
                        sx: 1.5,
                        sy: 1.5,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 200, height: 600, windows: 1, colorShift: 0.3, crack: 0}
                    }
                ]
            },

            {
                draw: window.sprites.building.draw,
                keyframes: [
                    {
                        frame: 0,
                        tx: 400, 
                        ty: 650,
                        sx: 1,
                        sy: 1,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 100, height: 400, windows: 1, colorShift: 0.8, crack: 0}
                    },

                    {
                        frame: 100,
                        tx: 400, 
                        ty: 650,
                        sx: 1,
                        sy: 1,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 100, height: 400, windows: 1, colorShift: 0.8, crack: 0}
                    },

                    {
                        frame: 300,
                        tx: 500, 
                        ty: 850,
                        sx: 1.5,
                        sy: 1.5,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 100, height: 400, windows: 1, colorShift: 0.8, crack: 0}
                    }
                ]
            },

            {
                draw: window.sprites.building.draw,
                keyframes: [
                    {
                        frame: 0,
                        tx: 700, 
                        ty: 650,
                        sx: 1,
                        sy: 1,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 200, height: 700, windows: 1, colorShift: 1, crack: 0}
                    },

                    {
                        frame: 100,
                        tx: 700, 
                        ty: 650,
                        sx: 1,
                        sy: 1,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 200, height: 700, windows: 1, colorShift: 1, crack: 0}
                    },

                    {
                        frame: 300,
                        tx: 900, 
                        ty: 850,
                        sx: 1.5,
                        sy: 1.5,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 200, height: 700, windows: 1, colorShift: 1, crack: 0}
                    }
                ]
            },

            {
                draw: window.sprites.building.draw,
                keyframes: [
                    {
                        frame: 0,
                        tx: 1000, 
                        ty: 650,
                        sx: 1,
                        sy: 1,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 150, height: 500, windows: 1, colorShift: 0.2, crack: 0}
                    },

                    {
                        frame: 100,
                        tx: 1000, 
                        ty: 650,
                        sx: 1,
                        sy: 1,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 150, height: 500, windows: 1, colorShift: 0.2, crack: 0}
                    },

                    {
                        frame: 300,
                        tx: 1300, 
                        ty: 850,
                        sx: 1.5,
                        sy: 1.5,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 150, height: 500, windows: 1, colorShift: 0.2, crack: 0}
                    }


                ]
            },

            {
                draw: window.sprites.gun.draw,
                keyframes: [
                    {
                        frame: 310,
                        tx: 1350, 
                        ty: 300,
                        sx: 1,
                        sy: 1,
                        ease: KeyframeTweener.linear,
                        options: {recoil: 0}
                    },

                    {
                        frame: 500,
                        tx: 1000, 
                        ty: 300,
                        sx: 1,
                        sy: 1,
                        ease: KeyframeTweener.linear,
                        options: {recoil: 0}
                    },
                    {
                        frame: 610,
                        tx: 1000, 
                        ty: 300,
                        sx: 1,
                        sy: 1,
                        ease: KeyframeTweener.quadEaseIn,
                        options: {recoil: 0}
                    },
                    {
                        frame: 620,
                        tx: 1000, 
                        ty: 300,
                        sx: 1,
                        sy: 1,
                        rotate: 8,
                        ease: KeyframeTweener.quadEaseOut,
                        options: {recoil: 0.8}
                    },
                    {
                        frame: 630,
                        tx: 1000, 
                        ty: 300,
                        sx: 1,
                        sy: 1,
                        rotate: 0,
                        ease: KeyframeTweener.linear,
                        options: {recoil: 0}
                    },
                    {
                        frame: 650,
                        tx: 1000, 
                        ty: 300,
                        sx: 1,
                        sy: 1,
                        rotate: 0,
                        ease: KeyframeTweener.linear,
                        options: {recoil: 0}
                    }
                    
                ]
            },

            {
                draw: window.sprites.flare.draw,
                keyframes: [
                    {
                        frame: 613,
                        tx: 870, 
                        ty: 280,
                        sx: 2,
                        sy: 2,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {flare: 1}
                    },
                    {
                        frame: 624,
                        tx: 870, 
                        ty: 300,
                        sx: 2,
                        sy: 2,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {flare: 0}
                    },
                ]
            },

            {
                draw: window.sprites.bullet.draw,
                keyframes: [
                    {
                        frame: 613,
                        tx: 870, 
                        ty: 310,
                        sx: 1,
                        sy: 1,
                        ease: jQuery.easing.easeOutCubic,
                        options: {traillength: 0}
                    },
                    {
                        frame: 650,
                        tx: -500, 
                        ty: 310,
                        sx: 1,
                        sy: 1,
                        ease: jQuery.easing.easeOutCubic,
                        options: {traillength: 0.8}
                    }
                ]
            },

            {
                draw: window.sprites.bg.draw,
                keyframes: [
                    {
                        frame: 650,
                        sx: 1.2,
                        sy: 1.2,
                        ease: KeyframeTweener.quadEaseInOut
                    },
                    {
                        frame: 1000,
                        sx: 1.2,
                        sy: 1.2,
                        ease: KeyframeTweener.quadEaseInOut
                    },
                ]
            },
            {
                draw: window.sprites.building.draw,
                keyframes: [
                    {
                        frame: 650,
                        tx: 200, 
                        ty: 800,
                        sx: 1.5,
                        sy: 1.5,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 200, height: 600, windows: 1, colorShift: 0.3, crack: 0}
                    },
                    
                    {
                        frame: 1000,
                        tx: 200, 
                        ty: 800,
                        sx: 1.5,
                        sy: 1.5,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 200, height: 600, windows: 1, colorShift: 0.3, crack: 0}
                    }
                ]
            },

            {
                draw: window.sprites.building.draw,
                keyframes: [
                    {
                        frame: 650,
                        tx: 500, 
                        ty: 850,
                        sx: 1.5,
                        sy: 1.5,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 100, height: 400, windows: 1, colorShift: 0.8, crack: 0}
                    },
                    {
                        frame: 1000,
                        tx: 500, 
                        ty: 850,
                        sx: 1.5,
                        sy: 1.5,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 100, height: 400, windows: 1, colorShift: 0.8, crack: 0}
                    }
                ]
            },

            {
                draw: window.sprites.building.draw,
                keyframes: [
                    {
                        frame: 650,
                        tx: 900, 
                        ty: 850,
                        sx: 1.5,
                        sy: 1.5,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 200, height: 700, windows: 1, colorShift: 1, crack: 0}
                    },
                    {
                        frame: 670,
                        tx: 900, 
                        ty: 850,
                        sx: 1.5,
                        sy: 1.5,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 200, height: 700, windows: 1, colorShift: 1, crack: 1}
                    },
                    {
                        frame: 1000,
                        tx: 900, 
                        ty: 850,
                        sx: 1.5,
                        sy: 1.5,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 200, height: 700, windows: 1, colorShift: 1, crack: 1}
                    }
                ]
            },

            {
                draw: window.sprites.building.draw,
                keyframes: [
                    {
                        frame: 650,
                        tx: 1300, 
                        ty: 850,
                        sx: 1.5,
                        sy: 1.5,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 150, height: 500, windows: 1, colorShift: 0.2, crack: 0}
                    },
                    {
                        frame: 1000,
                        tx: 1300, 
                        ty: 850,
                        sx: 1.5,
                        sy: 1.5,
                        ease: KeyframeTweener.quadEaseInOut,
                        options: {width: 150, height: 500, windows: 1, colorShift: 0.2, crack: 0}
                    }


                ]
            },

            {
                draw: window.sprites.bullet.draw,
                keyframes: [
                    {
                        frame: 670,
                        tx: 860, 
                        ty: 465,
                        sx: 0.3,
                        sy: 0.3,
                        ease: KeyframeTweener.linear,
                        options: {traillength: 0}
                    },
                    {
                        frame: 800,
                        tx: -500, 
                        ty: 465,
                        sx: 0.3,
                        sy: 0.3,
                        ease: KeyframeTweener.linear,
                        options: {traillength: 2.0}
                    }
                ]
            },



        ];


    $(window).load(function() {

        // Finally, we initialize the engine.  Mainly, it needs
        // to know the rendering context to use.  And the animations
        // to display, of course.
        KeyframeTweener.initialize({
            renderingContext: canvas.getContext("2d"),
            width: canvas.width,
            height: canvas.height,
            sprites: sprites
        });

    });


}());

