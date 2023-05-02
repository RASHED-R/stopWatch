    // declare variables to use in our function
    let startTime;
    let elapsedTime = 0;
    let timerInterval;

    //create event playButton listener
    let playButton = document.getElementById("playButton");
    playButton.addEventListener('click', () => {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function printTime() {
            elapsedTime = Date.now() - startTime;
            // document.getElementById("display").innerHTML = timeToString(elapsedTime);     // // Create print function to modify innerHTML
            print(timeToString(elapsedTime));
        }, 10)
        showButton("PAUSE");
    });
    //create event pauseButton listener
    let pauseButton = document.getElementById("pauseButton");
    pauseButton.addEventListener("click", () => {
        clearInterval(timerInterval);
        showButton("PLAY");
    })
    //create event resetButton listener 
    let resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", () => {
        clearInterval(timerInterval);
        print("00:00:00");
        elapsedTime = 0;
        showButton("PLAY");
    })
    // // Convert time to a format of hours, minutes, seconds, and milliseconds
    function timeToString(time) {
        let diffINHrs = time / 3600000;
        let hh = Math.floor(diffINHrs);

        let diffInMin = (diffINHrs - hh) * 60;
        let mm = Math.floor(diffInMin);

        let diffInSec = (diffInMin - mm) * 60;
        let ss = Math.floor(diffInSec);

        let diffInMs = (diffInSec - ss) * 100;
        let ms = Math.floor(diffInMs);

        let formattedMM = mm.toString().padStart(2, "0");
        let formattedSS = ss.toString().padStart(2, "0");
        let formattedMS = ms.toString().padStart(2, "0");

        return `${formattedMM}:${formattedSS}:${formattedMS}`;
    }
    // The stopwatch works well. When we click on the Play button, the stopwatch starts counting elapsed minutes, seconds, and milliseconds.
    // Let's separate our printing logic into a separate print function to improve readability:

    // // Create function to modify innerHTML
    function print(txt) {
        document.getElementById("display").innerHTML = txt;
    }

    // Create function to display buttons

    function showButton(buttonKey) {
        //If we call this function with showButton("PLAY"), it will display the Play button and hide the Pause button.
        //If we call this function with showButton("PAUSE"), it will display the Pause button and hide the Play button.

        let buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
        let buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
        buttonToShow.style.display = "block";
        buttonToHide.style.display = "none";
    }











    // // Create event listeners

    // let playButton = document.getElementById("playButton");
    // let pauseButton = document.getElementById("pauseButton");
    // let resetButton = document.getElementById("resetButton");

    // // Declare variables to use in our functions below

    // let startTime;
    // let elapsedTime = 0;
    // let timerInterval;

    // // Create "start" ,  "pause" , "reset" functions

    // playButton.addEventListener("click", function () { // Create "start" functions
    //     startTime = Date.now() - elapsedTime;
    //     timerInterval = setInterval(function printTime() {
    //         elapsedTime = Date.now() - startTime;
    //         print(timeToString(elapsedTime));
    //     }, 10);
    //     showButton("PAUSE");
    // });
    // pauseButton.addEventListener("click", function () { // Create "pause" functions
    //     clearInterval(timerInterval);
    //     showButton("PLAY");
    // });
    // resetButton.addEventListener("click", function () { // Create "reset" functions
    //     clearInterval(timerInterval);
    //     print("00:00:00");
    //     elapsedTime = 0;
    //     showButton("PLAY");
    // });

    // // Convert time to a format of hours, minutes, seconds, and milliseconds

    // function timeToString(time) {
    //     let diffInHrs = time / 3600000;
    //     let hh = Math.floor(diffInHrs);

    //     let diffInMin = (diffInHrs - hh) * 60;
    //     let mm = Math.floor(diffInMin);

    //     let diffInSec = (diffInMin - mm) * 60;
    //     let ss = Math.floor(diffInSec);

    //     let diffInMs = (diffInSec - ss) * 100;
    //     let ms = Math.floor(diffInMs);

    //     let formattedMM = mm.toString().padStart(2, "0");
    //     let formattedSS = ss.toString().padStart(2, "0");
    //     let formattedMS = ms.toString().padStart(2, "0");

    //     return `${formattedMM}:${formattedSS}:${formattedMS}`;
    // }

    // // Create function to modify innerHTML

    // function print(txt) {
    //     document.getElementById("display").innerHTML = txt;
    // }

    // // Create function to display buttons

    // function showButton(buttonKey) {
    //     const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    //     const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    //     buttonToShow.style.display = "block"
    //     buttonToHide.style.display = "none";
    // }