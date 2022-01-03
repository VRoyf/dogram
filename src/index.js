console.log("script launched");
let detailsImage = document.querySelector(".details-image");
let anchors = document.querySelectorAll(".thumbnails-anchor");
let detailsTitle = document.querySelector(".details-title");
/*let title = anchors.getAttribute(".thumbnails-title");*/

for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function(event) {
          event.preventDefault(); //canceling default options of anchor element 
          setDetails(anchors[i]); // setDetails function calls with passing reference to appropriate anchor
    })
}

function setDetails(anchor) {
    console.log("anchor element was pressed", anchor);
    console.dir(anchor);
    detailsImage.setAttribute("src", anchor.getAttribute("href"));
    detailsTitle.textContent = anchor.getAttribute("href") + ": "  anchor.getAttribute("data-details-title");
    
}