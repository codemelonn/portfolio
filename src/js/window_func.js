// file to organize windows within my project

const position = { x: 100, y: 100 };

// make any .window draggable
interact(".window").draggable({
    // only start dragging when pointer is down on the title bar
    allowFrom: ".title-bar",
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: document.querySelector(".left-pane"), // limit to desktop container
            endOnly: false, // live restriction
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
        }),
    ],
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

// screen closing || footer visibility

document.querySelectorAll(".close-window").forEach((btn) => {
    btn.addEventListener("click", function (e) {
        // parent window || footer elements || name of page
        const windowDiv = e.target.closest(".window");
        const footerElem = document.querySelectorAll(".footer-elem");
        const pageName = windowDiv.dataset.page.toUpperCase().replace("_", " ");

        if (windowDiv) {
            // hide window
            windowDiv.classList.add("hidden");

            // hide footer
            footerElem.forEach((footerElem) => {
                if (pageName.trim() === footerElem.textContent.trim().toUpperCase()) {
                    footerElem.classList.add("hidden");
                }
            });
        } else {
            console.warn("No parent window found");
        }
    });
});

// fetching html for each page

let zIndexCounter = 100;

async function loadhtml(name) {
    const container = document.querySelector(`.window[data-page="${name}"]`);

    if (!container) {
        console.error(`No window container found for ${name}`);
        return;
    }

    const body = container.querySelector(".window-body");
    const title = container.querySelector(".title-bar-text");

    // Show the window || bring to front || update title bar
    container.classList.remove("hidden");
    container.style.zIndex = ++zIndexCounter;
    title.textContent = name.replace("_", " ").toUpperCase();

    // gets all footer elements
    const footerElem = document.querySelectorAll(".footer-elem");

    footerElem.forEach((footerElem) => {
        const updatedName = name.toUpperCase().replace("_", " ").trim();
        const footerText = footerElem.textContent.trim().toUpperCase();

        if (updatedName === footerText && !container.classList.contains("hidden")) {
            footerElem.classList.remove("hidden");
        }
    });

    // Load page content
    try {
        const updatedName = name.toLowerCase().replaceAll(" ", "_");
        const res = await fetch(`./pages/${updatedName}.html`);
        if (!res.ok) throw new Error(`Failed to load ${updatedName}`);

        const html = await res.text();
        body.innerHTML = html;
        body.dataset.loadedPage = name;

        // Projects: always initialize after injection (resets to folder view)
        // if (name === "projects" && typeof window.initProjects === "function") {
        //     window.initProjects(body);
        // }

        // DEV: auto-open a folder while editing Projects
        if (name === "projects") {
            const folderEl = body.querySelector('[data-folder="webandsoft"]');
            if (folderEl) folderEl.click();
        }
    } catch (err) {
        console.error(err);
    }

    // Make this window come to front on click (bind ONCE)
    if (!container.dataset.boundZIndex) {
        container.addEventListener("mousedown", () => {
            container.style.zIndex = ++zIndexCounter;
        });
        container.dataset.boundZIndex = "true";
    }
}
