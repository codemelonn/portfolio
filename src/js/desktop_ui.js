


let currentTime = document.getElementById("current-time");
setInterval(() => updateCurrTime(currentTime), 1000); 

// Current Date Function

function updateCurrTime(x) {
    const time = new Date();
    x.textContent = time.toLocaleTimeString();
}
