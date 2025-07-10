// file to organize windows within my project 

const position = { x: 100, y: 100 }

// make any .window draggable
interact('.window').draggable({
    // only start dragging when pointer is down on the title bar
    allowFrom: '.title-bar',
    listeners: {
      move(event) {
        const target = event.target;
        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
  
        target.style.transform = `translate(${x}px, ${y}px)`;
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
      }
    }
  });

  // 2) resizable
interact('.window').resizable({
    edges: { left: true, right: true, bottom: true, top: false },
    listeners: {
      move(event) {
        const target = event.target;
        let x = parseFloat(target.getAttribute('data-x')) || 0;
        let y = parseFloat(target.getAttribute('data-y')) || 0;
  
        // update element size
        target.style.width  = `${event.rect.width}px`;
        target.style.height = `${event.rect.height}px`;
  
        // adjust position when resizing from top/left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;
  
        target.style.transform = `translate(${x}px, ${y}px)`;
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
      }
    },
    modifiers: [
      // keep size within these limits
      interact.modifiers.restrictSize({
        min: { width: 150, height: 100 },
        max: { width: 800, height: 600 }
      })
    ],
    inertia: true
});

// screen closing 

document.getElementById("close-window").addEventListener("click", function() {
    console.log("Close Window Button Clicked"); 

    // get div name
    var w = document.querySelector("div.window"); 
    console.log(w); 

    w.style.display = "none"; 
}); 
