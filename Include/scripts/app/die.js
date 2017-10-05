define(
    ["jquery","underscore"],
    function ($,_) {
        var die = {
            type: 'dieObject',
            control: function () {
                this.dieView = {},
                this.id,
                this.value = 0,
                this.onChange = '',
                this.init = function (DieView, options) {
                    this.dieView = DieView;
                    this.id = options.id;
                    this.onChange = options.onChange;
                    _.bindAll(this,'spin');
                },
                this.spin = function () {
                    this.dieView.spin();
                    var me = this;
                    setTimeout(function () {
                        var val = me.randomIntFromInterval(1, 6);
                        me.value = val;
                        me.dieView.setValue(me.value);
                        me.onChange(me);
                    },4000)

                },
                this.randomIntFromInterval = function (min, max) {
                    return Math.floor(Math.random() * (max - min + 1) + min);
                }

            }
        };
        return die;
    });