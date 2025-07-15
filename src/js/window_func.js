// file to organize windows within my project

const position = { x: 100, y: 100 };

// make any .window draggable
interact(".window").draggable({
    // only start dragging when pointer is down on the title bar
    allowFrom: ".title-bar",
    listeners: {
        move(event) {
            const target = event.target;
            const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
            const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

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

let zIndexCounter = 100; 

async function loadhtml(name) {

    const container = document.querySelector(`.window[data-page="${name}"]`);
    const body = container?.querySelector(".window-body");
    const title = container?.querySelector(".title-bar-text");

    if (!container || !body || !title) {
        console.error(`Missing target for ${name}`);
        return;
    }
    // Show the window
    container.style.display = "block";

    // Bring to front
    container.style.zIndex = ++zIndexCounter;

    // Optional: update title bar
    title.textContent = name.replace("_", " ").toUpperCase();

    // Load page content
    try {
        const res = await fetch(`./pages/${name}.html`);
        if (!res.ok) throw new Error(`Failed to load ${name}`);
        const html = await res.text();
        body.innerHTML = html;
    } catch (err) {
        console.error(err);
    }

    // Make this window come to front on click
    container.addEventListener("mousedown", () => {
        container.style.zIndex = ++zIndexCounter;
    });
}
