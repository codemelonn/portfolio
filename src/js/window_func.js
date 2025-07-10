// file to organize windows within my project

const position = { x: 100, y: 100 };

// make any .window draggable
interact(".window").draggable({
    // only start dragging when pointer is down on the title bar
    allowFrom: ".title-bar",
    listeners: {
        move(event) {
            const target = event.target;
            const x =
                (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
            const y =
                (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

            target.style.transform = `translate(${x}px, ${y}px)`;
            target.setAttribute("data-x", x);
            target.setAttribute("data-y", y);
        },
    },
});

// screen closing

document.getElementById("close-window").addEventListener("click", function () {
    console.log("Close Window Button Clicked");

    // get div name
    var w = document.querySelector("div.window");
    console.log(w);

    w.style.display = "none";
});

// fetching html for each page
const target = document.querySelector(".about-me-div");

const loadhtml = (name) => {
    fetch("./src/pages/");
};
