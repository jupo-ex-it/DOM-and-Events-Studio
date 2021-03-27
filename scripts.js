window.addEventListener("load", function () {
    const takeoff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    const rocket = document.getElementById("rocket")
    let rocketPositionTop = 250;
    let rocketPositionLeft = 0;

    function rocketReset() {
        rocketPositionTop = 250;
        rocket.style.top = "250px";
        rocketPositionLeft = 0;
        rocket.style.left = "0px";
    }

    takeoff.addEventListener("click", function () {
        window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (window.confirm) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = "10000";
        };
    })

    landing.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
        rocketReset()
    })

    missionAbort.addEventListener("click", function () {
        window.confirm("Confirm that you want to abort the mission.");
        if (window.confirm) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
            rocketReset()
        };
    })

    up.addEventListener("click", function () {
        if (rocketPositionTop > 0) {
            rocketPositionTop -= 10;
            rocket.style.top = rocketPositionTop + "px";
        };
    })

    down.addEventListener("click", function () {
        if (rocketPositionTop < 250) {
            rocketPositionTop += 10;
            rocket.style.top = rocketPositionTop + "px";
        };
    })

    right.addEventListener("click", function () {
        if (rocketPositionLeft < 360) {
            rocketPositionLeft += 10;
            rocket.style.left = rocketPositionLeft + "px";
        };
    })

    left.addEventListener("click", function () {
        if (rocketPositionLeft > -360) {
            rocketPositionLeft -= 10;
            rocket.style.left = rocketPositionLeft + "px";
        };
    })
})