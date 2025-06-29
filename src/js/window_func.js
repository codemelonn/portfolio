

// click events 

addEventListener("mousedown", (e) => {

    let parentElement = e.target.parentElement; 
    let parentBox = parentElement.getBoundingBoxRect(); // gives info of all angles 

    let prevX = e.clientX; 
    let prevY = e.clientY; 

    function mouseMoveHandler() {
        let movementX = prevX - e.clientX; 
        let movementY = prevY - e.clientY; 

        // get parents position
        let x = parentBox.left - movementX; 
        let y = parentBox.right - movementY; 

        // boundaries
        if (x < 0) x = 0; 
        if (y < 0) y = 0; 

        if(x > window.innerWidth - parentBox.innerWidth) {
            x = window.innerWidth - parentBox.width; 
        }
        if(y > window.innerHeight - parentBox.innerHeight) {
            y = window.innerHeight - parentBox.height; 
        }

        parentElement.style.top = y + "px"; 
        parentElement.style.left = x + "px"; 

    }

    function mouseUpHandler() {
        window.removeEventListener("mousemove", mouseMoveHandler); 
        window.removeEventListener("mousemove", mouseUpHandler); 
    }

    window.addEventListener("mousemove", mouseMoveHandler)
    window.addEventListener("mouseup", mouseUpHandler)


})