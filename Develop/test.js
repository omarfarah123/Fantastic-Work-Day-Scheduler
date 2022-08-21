const moment = require("moment")


var currentTime = moment().format('10a');
var myTime = "10PM"

var time = new Date();

var currentHour;
if(time.getHours() > 12){

    currentHour = time.getHours() % 12 + "PM"
} else {
    currentHour = time.getHours() + "AM"
}

console.log(currentTime)