/*Coding Challenge Jeffrey Olsson jolsson5320@gmail.com*/


define(
    ["jquery", "die","dieView"],
    function ($, die,dieView) {

        var appControl = function () {
            var point = 0;
            var die1_val = 0;
            var die2_val = 0;
            var mode = 'justRoll';
            var diceRollHandler = function (die) {
                switch (die.id) {
                    case 'die1':
                        die1_val = die.value;
                        break;
                    case 'die2':
                        die2_val = die.value;
                        break;
                }
                if (die1_val > 0 && die2_val > 0) {
                    showResults();
                }
            }
            var showResults = function () {
                if (mode == 'justRoll') {
                    point = 0;
                    if ((die1_val + die2_val)==8){
                        resText = 'You rolled an ' + (die1_val + die2_val).toString() + '. '    
                    }else{
                        resText = 'You rolled a ' + (die1_val + die2_val).toString() + '. '    
                    }                    
                    if (die1_val == die2_val) {
                        switch (true) {
                            case ((die1_val + die2_val) == 2):
                                resText += 'Snake Eyes!';
                                break;
                            case ((die1_val + die2_val) == 12):
                                resText += 'Boxcars!';
                                break;
                            default:
                                resText += 'Doubles!';
                                break;
                        }
                    }
                } else {
                    var roll = die1_val + die2_val;
                    switch (true) {
                        case (point == 0)://first roll
                            switch (true) {
                                case (roll == 7 || roll == 11):
                                    resText = roll.toString() + " You Win!";
                                    break;
                                case (roll == 2 || roll == 3 || roll == 12):
                                    resText = roll.toString() + " You Lose...";
                                    break;
                                default:
                                    point = roll;
                                    resText = "Your point is " + roll.toString() + ". Roll again.";
                                    break;
                            }
                            break;
                        default:
                            switch (true) {
                                case (roll == 7):
                                    resText = roll.toString() + " You Lose...";
                                    point = 0;
                                    break;
                                case (roll == point):
                                    resText = roll.toString() + " You Win!";
                                    point = 0;
                                    break;
                                default:
                                     if ((die1_val + die2_val)==8){
                                        resText = "You rolled an " + roll.toString() + ".Your Point is " + point.toString() + " Roll again.";
                                    }else{
                                        resText = "You rolled a " + roll.toString() + ".Your Point is " + point.toString() + " Roll again.";
                                    }
                                    break;
                            }

                            break;
                    }
                }
                $('.stage h2').html('Click Dice to Roll');
                $('.results').html(resText);

            };

            initialize = function () {
                $(document).ready(function () {
                    var die1 = new die.control();
                    var die2 = new die.control();
                    var dieView1 = new dieView.control();
                    var dieView2 = new dieView.control();                        
                    dieView1.init('.die1');
                    dieView2.init('.die2');
                    die1.init(dieView1, {
                        id:'die1', onChange: diceRollHandler
                    });
                    die2.init(dieView2, {
                        id:'die2', onChange: diceRollHandler
                    });

                    $('.options input').on('click', function (e) {
                        mode = $(e.currentTarget).val();
                    });
                    $('.stage').on('click', function (e) {
                        $('.stage h2').html('Rolling...');
                        $('.results').html('');
                        die1_val = 0;
                        die2_val = 0;
                        die1.spin();
                        die2.spin();
                    })

                });
            };


            var publikAppControl = {
                init: initialize//,
                //appControl: repControl
            };

            return publikAppControl;

        }();
        return appControl;

    });





