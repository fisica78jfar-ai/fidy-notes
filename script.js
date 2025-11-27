// SHOW IMAGE RESOURCES
document.querySelectorAll("li[data-img]").forEach(item => {
    item.addEventListener("click", (event) => {
        event.stopPropagation();  // <-- IMPORTANT
        const imgPath = item.dataset.img;

        document.getElementById("viewer").innerHTML =
            `<img src="${imgPath}" style="max-width:100%; height:auto;">`;

        document.getElementById("reactant-viewer").innerHTML = "";
    });
});

// SHOW PDF RESOURCES
document.querySelectorAll("li[data-pdf]").forEach(item => {
    item.addEventListener("click", (event) => {
        event.stopPropagation();  // <-- IMPORTANT
        const pdfPath = item.dataset.pdf;

        document.getElementById("viewer").innerHTML =
            `<iframe src="${pdfPath}" width="100%" height="800px"></iframe>`;

        document.getElementById("reactant-viewer").innerHTML = "";
    });
});


// SHOW REACTANT DIVS
document.querySelectorAll("li[data-reactant]").forEach(item => {
    item.addEventListener("click", (event) => {
        event.stopPropagation();  // <-- IMPORTANT
        const id = item.dataset.reactant;
        const content = document.getElementById(id).innerHTML;

        document.getElementById("reactant-viewer").innerHTML =
            `<div class="reactants" style="display:block;">${content}</div>`;

        document.getElementById("viewer").innerHTML = "";
    });
});


// CLEAR VIEWER BUTTON
document.querySelector(".clearer").addEventListener("click", () => {
    document.getElementById("viewer").innerHTML = "";
    document.getElementById("reactant-viewer").innerHTML = "";
});


/**************************************************************************
 * CLICK-TO-ENLARGE IMAGES INSIDE REACTANT VIEWER
 **************************************************************************/

// When any image inside reactant-viewer is clicked → show modal
document.addEventListener("click", function (event) {
    if (event.target.closest("#reactant-viewer img")) {
        const src = event.target.src;
        document.getElementById("modal-img").src = src;
        document.getElementById("img-modal").style.display = "flex";
    }
});

// Close modal when clicking background OR the big image
document.getElementById("img-modal").addEventListener("click", function () {
    document.getElementById("img-modal").style.display = "none";
});

