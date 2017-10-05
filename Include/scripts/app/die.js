define(
    ["jquery","underscore"],
    function ($,_) {
        var die = {
            type: 'dieObject',
            control: function () {
                this.selector,
                this.id,
                this.value = 0,
                this.onChange = '',
                this.init = function (selector, options) {
                    this.selector = selector;
                    this.onChange = options.onChange;
                    _.bindAll(this, 'render','spin','resetDie','setDie');
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
                    var me = this;
                    setTimeout(function () {
                        var val = me.randomIntFromInterval(1, 6);
                        me.value = val;
                        me.ctl.cube.removeClass('spin');
                        me.setDie(val);
                        me.onChange(me);
                    },4000)

                },
                this.randomIntFromInterval = function (min, max) {
                    return Math.floor(Math.random() * (max - min + 1) + min);
                },
                this.resetDie = function () {
                    this.ctl.face1.html("<img src='include/images/1_rtd.png'  >");
                    this.ctl.face4.html("<img src='include/images/4_rtd.png'  >");
                },
                this.setDie = function (val) {
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

                }

            }
        };
        return die;
    });