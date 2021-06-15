// get the current date object
var today = new Date();
//get the current hour
let hours = today.getHours();
//get the current minutes
let minutes = today.getMinutes();
//if the length of the minuts is only 1 add a 0 first (7 = 07)
if(minutes.length == 1){
    minutes = '0' + minutes;
}
//get the current seconds
let seconds = today.getSeconds();
if(seconds.length == 1){
    seconds = '0' + seconds;
}
//set the current time as hours, minutes and seconds
let time = hours + ":" + minutes + ":" + seconds;
console.log(time);
