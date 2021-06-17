// grab all of the digital number container, this is a global variable so can be used inside of all functions
let container = document.querySelectorAll('.digitalNumberContainer');
//this function will call in the getCurrentTime function with a 200ms delay
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
//This function updates 2 containers at a time for hours/ minutes/ seconds
function outputTimeVisualization(time,type){
    //make current time (number) a string because we need 2 characters (preprending 0 where needed)
    time = time.toString();
    if(time.length == 1){
        time = '0' + time;
    }
    //changing which output gets updated based on which type of time we were given
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
//in the containers for each digital output, these are the elements required to represent each number by their array key
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

//this function specifically updates the number when called in for a single container
function updateDigitalNumberDisplay(number,container){
    //get the current outputs that need to be lit
    arrLightUp = arrOutputs[number];
    //loop through all of the children of the parent container
    for(counter=0; counter < container.childNodes.length; counter++){
        //select the current child
        let currentOutput = container.childNodes[counter];
        //make the background blank because this could have been a different number previously
        if(currentOutput.style){
            currentOutput.style.background = 'none';
        }
        //loop through each of the 
        for(x=0; x < arrLightUp.length; x++){
            //get the class name for lighting up
            let elementToLight = 'output'+arrLightUp[x];
            if(currentOutput.classList){
                //if the classname for lighting up matched the current child class, colour in the background
                if(currentOutput.classList.contains(elementToLight)){
                    currentOutput.style.background = 'red';
                }
            }
        }
    }
}
