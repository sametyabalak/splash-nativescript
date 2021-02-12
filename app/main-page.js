
const frameModule = require("tns-core-modules/ui/frame");
var imageModule = require("ui/image");

function onNavigatingTo(args) {
    // Create a new image
    var item = new imageModule.Image();

    item.src = "res://logo";
    item.height = 150;
    item.on("loaded", function (args) {
        args.object
            .animate({
                duration: 1500,
                scale: { x: 0.6, y: 0.6 }
            })
            .then(function () {
                return args.object.animate({
                   duration: 400,
                   rotate: 360,
                   iterations: 3,
                });
            })
            .then(function () {
                return args.object.animate({
                    duration: 1000,
                    opacity: 0,
                    // rotate: 720,
                    scale: { x: 3, y: 3 }
                });
            })
            // .animate({
            //     duration: 500,
            //     rotate: 90,
            // })
            // .then(function () {
            //     return args.object.animate({
            //         duration: 500,
            //         rotate: 180,
            //     });
            // })
            // .then(function () {
            //     return args.object.animate({
            //         duration: 500,
            //         rotate: 270,
            //     });
            // })
            // .then(function () {
            //     return args.object.animate({
            //         duration: 500,
            //         rotate: 360,
            //     });
            // })
            // .then(function () {
            //     return args.object.animate({
            //         duration: 500,
            //         rotate: 720,
            //     });
            // })
            .then(function () {
                frameModule.Frame.topmost().navigate({
                    moduleName: "views/login-page/login-page",
                    animated: true
                });
            });
    });

    page = args.object;

    // Append the dynamically created image to the <GridLayout>
    var grid = page.getViewById("grid");
    grid.addChild(item);
}

exports.onNavigatingTo = onNavigatingTo;
