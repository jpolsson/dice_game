define(
    ["jquery","underscore"],
    function ($,_) {
        var dieView = {
            type: 'dieView',
            control: function () {
                this.selector,
                this.id,
                this.ctl = {},
                this.init = function (selector) {
                    this.selector = selector;
                    _.bindAll(this, 'render','spin','setValue');
                    this.render();
                },
                this.render = function () {
                    var dieHTML = '<div class="cubespinner showVal">' +
                                    '<div class="face face1"><img src="include/images/1_rtd.png"></div>' +
                                    '<div class="face face2"><img src="include/images/2_rtd.png"></div>' +
                                    '<div class="face face3"><img src="include/images/3_rtd.png"></div>' +
                                    '<div class="face face4"><img src="include/images/4_rtd.png"></div>' +
                                    '<div class="face face5"><img src="include/images/5_rtd.png"></div>' +
                                    '<div class="face face6"><img src="include/images/6_rtd.png"></div>' +
                                '</div>'
                    $(this.selector).append(dieHTML);
                    this.ctl = {
                        cube: $(this.selector).find('.cubespinner'),
                        face1: $(this.selector).find('.face1'),
                        face4:$(this.selector).find('.face4')
                    }
                },
                this.spin = function () {
                    this.ctl.cube.removeClass('showVal');
                    this.ctl.cube.addClass('spin');                        
                },

                this.setValue = function (val) {
                    this.ctl.face1.html("<img src='include/images/" + val.toString() + "_rtd.png'  >");
                    var val2 = 1;
                    switch (true) {
                        case val > 3:
                            val2 = val - 3;
                            break;
                        default:
                            val2 = val + 3;
                            break;
                    }
                    this.ctl.cube.addClass('showVal');
                    this.ctl.face4.html("<img src='include/images/" + val2.toString() + "_rtd.png'  >");
                    this.ctl.cube.removeClass('spin');//turn off spin effect

                }

            }
        };
        return dieView;
    });