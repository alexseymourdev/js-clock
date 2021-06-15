function outputTime() {

    setTimeout(function() {
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

        //get clock output HTML object
        let output = document.querySelector('.clockOutput');
        // console.log(output);
        output.innerHTML = time;

        // Again
        outputTime();
        // Every 250 miliseconds 
    }, 250);
}

// Begins
outputTime();