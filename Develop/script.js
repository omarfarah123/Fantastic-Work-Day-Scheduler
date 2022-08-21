var currentDay = document.querySelector("#currentDay");
var timeBlock1 = document.querySelector('#timeBlock1');
var timeBlock2 = document.querySelector('#timeBlock2');
var timeBlock3 = document.querySelector('#timeBlock3');
var timeBlock4 = document.querySelector('#timeBlock4');
var timeBlock5 = document.querySelector('#timeBlock5');
var timeBlock6 = document.querySelector('#timeBlock6');
var timeBlock7 = document.querySelector('#timeBlock7');
var timeBlock8 = document.querySelector('#timeBlock8');
var timeBlock9 = document.querySelector('#timeBlock9');

var textArea = document.querySelector('textarea');
//Assigning the current time below the title on the header
currentDay.innerHTML = moment().format('dddd, MMMM Do');



//function for dtermining the time block status
function bang(){
    var time = new Date();
    var currentHour;
    if(time.getHours() > 12){
       currentHour = time.getHours() % 12 + "PM"
    } else {
        currentHour = time.getHours() + "AM"
    }
    
    var timeBlocks = [timeBlock1, timeBlock2, timeBlock3, timeBlock4, timeBlock5, timeBlock6, timeBlock7, timeBlock8, timeBlock9]
    //for loop for looping thorugh the arrays of timeblocks and then assigning the proper color
    for(let i = 0; i < timeBlocks.length; i++){
        var hour = timeBlocks[i].children[0].innerHTML;
        console.log(timeBlock1.id)
        var alignmentNum = timeBlocks[i].id.slice(-1)
        console.log(`${alignmentNum}`)
        var blockPeriod = hour.slice(-2);
        var currentPeriod = currentHour.slice(-2)
        var blockNum = parseInt(hour.slice(0, 2))
        var currentNum = parseInt(currentHour.slice(0, 2))

       if(`${blockPeriod}` === "AM" && `${currentPeriod}` === "PM"){
            document.querySelector(`#textBox${alignmentNum}`).classList.add('past');
       } else if(blockPeriod === currentPeriod && blockNum < currentNum){
            document.querySelector(`#textBox${alignmentNum}`).classList.add('past');
       } else if (blockPeriod === currentPeriod && blockNum === 12 && currentNum !== 12){
            document.querySelector(`#textBox${alignmentNum}`).classList.add('past');
       }
       else if(`${blockNum}${blockPeriod}` === `${currentNum}${currentPeriod}`){
            document.querySelector(`#textBox${alignmentNum}`).classList.add('present');
       } else {
            document.querySelector(`#textBox${alignmentNum}`).classList.add('future');
        }
        
    }
}
//function which executes the status assignment for the time blocks



function pow(){
    for(let i = 1; i <= 9; i++){
        document.getElementById(`saveBtn${i}`).addEventListener("click", function () {
            alert("LOL")
            var task = document.getElementById(`textBox${i}`).value;
            localStorage.setItem(`task${i}`, task);
            alert("Saved Task List");
          }, false);
    }
}
function reloader(){
    document.querySelector("body").onload = function(){
        for(let i = 1; i <= 9; i++){
            document.getElementById(`textBox${i}`).value = localStorage.getItem(`task${i}`)
        }
    }
}


bang()
pow()
reloader()







