let container = document.querySelectorAll('.digitalNumberContainer');

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
    outputTimeVisualization(hours,'hours');
    outputTimeVisualization(minutes,'minutes');
    outputTimeVisualization(seconds,'seconds');
    //get clock output HTML object
    let output = document.querySelector('.clockOutput');
    // console.log(output);
    output.innerHTML = time;

    // Again
    outputTime();
}
// Begins
outputTime();

function outputTimeVisualization(time,type){
    time = time.toString();
    if(time.length == 1){
        time = '0' + time;
    }
    switch(type){
        case 'hours':
            //output to 0 and 1
            updateDigitalNumberDisplay(time[0],container[0]);
            updateDigitalNumberDisplay(time[1],container[1]);
            break;
        case 'minutes':
            //output to 2 and 3
            updateDigitalNumberDisplay(time[0],container[2]);
            updateDigitalNumberDisplay(time[1],container[3]);
            break;       
        case 'seconds':
            // output to 4 and 5
            updateDigitalNumberDisplay(time[0],container[4]);
            updateDigitalNumberDisplay(time[1],container[5]);
            break;
    }
}

let arrOutputs = [
    [1,2,3,5,6,7],
    [3,6],
    [2,3,4,5,7],
    [2,3,4,6,7],
    [1,3,4,6],
    [2,1,4,6,7],
    [1,4,5,6,7],
    [2,3,6],
    [1,2,3,4,5,6,7],
    [1,2,3,4,6]
];

function updateDigitalNumberDisplay(number,container){
    
    arrLightUp = arrOutputs[number];
    for(counter=0; counter < container.childNodes.length; counter++){
        let currentOutput = container.childNodes[counter];
        if(currentOutput.style){
            currentOutput.style.background = 'none';
        }
        for(x=0; x < arrLightUp.length; x++){
            // console.log(arrLightUp[x]);
            let elementToLight = 'output'+arrLightUp[x];
            // console.log(elementToLight);
            if(currentOutput.classList){
                
                if(currentOutput.classList.contains(elementToLight)){
                    currentOutput.style.background = 'red';
                }
            }
            // console.log(container.childNodes[counter].classList);
        }
    }
}

// updateDigitalNumberDisplay(1,container[0]);
// updateDigitalNumberDisplay(2,container[1]);
// updateDigitalNumberDisplay(3,container[2]);
// updateDigitalNumberDisplay(4,container[3]);
// updateDigitalNumberDisplay(5,container[4]);
// updateDigitalNumberDisplay(6,container[5]);
// // updateDigitalNumberDisplay(7);
// updateDigitalNumberDisplay(8);
// updateDigitalNumberDisplay(9);
