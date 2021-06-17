function outputTime() {
    setTimeout(getCurrentTime, 200);
}
function getCurrentTime(){
    // get the current date object
    var today = new Date();
    //get the current hour
    let hours = today.getHours();
    //get the current minutes
    let minutes = today.getMinutes();
    //get the current seconds
    let seconds = today.getSeconds();
    //set the current time as hours, minutes and seconds
    let time = hours + ":" + minutes + ":" + seconds;
    // console.log(time);
    // outputTimeVisualization(hours,'hours');
    //get clock output HTML object
    let output = document.querySelector('.clockOutput');
    // console.log(output);
    output.innerHTML = time;

    // Again
    outputTime();
}
// Begins
outputTime();

// function outputTimeVisualization(time,type){
//     switch(type){
//         case 'hour':
//             //output to 0 and 1
//             //below is an example for 12am
//             updateDigitalNumberDisplay(0,1);
//             updateDigitalNumberDisplay(1,2);

//             break;
//         case 'minute':
//             //output to 2 and 3
//             break;       
//         case 'second':
//             // output to 4 and 5
//             break;
//     }
// }
// function updateDigitalNumberDisplay(key,number){
//     let arrDisplays = document.querySelector('.digitalDisplay');
//     let currentContainer = arrDisplays[key];
    
// }