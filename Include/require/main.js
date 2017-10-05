require.config({
    appDir: "../../",
    baseUrl: "include/",
    dir: "../../../minbuild",

    paths: {
        "main": "require/main",                              // require.js initializer
        "jquery": "scripts/vendor/jquery-3.1.1.min",
        "underscore": "scripts/vendor/underscore.min",
        "appControl": "scripts/app/appControl",
        "die": "scripts/app/die"
    },
    urlArgs: "bust=" + (new Date()).getTime(),
    modules: [
		{
		    name: "main"
		}
    ],
    optimize: "uglify", // "uglify", "uglify2","none",//
    uglify: {
        toplevel: false,
        ascii_only: true,
        beautify: false,
        max_line_length: 1000,
        defines: {  //see "defines" options for ast_mangle in the uglifys docs.
            DEBUG: ['name', 'false']
        },
        no_mangle: false
    },
    optimizeCss: "standard" // "none", "standard.keepLines",  "standard": @import inlining, comment removal and line returns.

});
require(
    ["appControl", "jquery" ], function (appControl, $) {
        appControl.init();
    });


