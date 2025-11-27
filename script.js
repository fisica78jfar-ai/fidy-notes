const viewer = document.getElementById("viewer");

/*****************************
 * SHOW IMAGE RESOURCES
 *****************************/
document.querySelectorAll("li[data-img]").forEach(item => {
    item.addEventListener("click", (event) => {
        event.stopPropagation();
        const imgPath = item.dataset.img;

        viewer.innerHTML =
            `<img src="${imgPath}" style="max-width:100%; height:auto;">`;
    });
});


/*****************************
 * SHOW PDF RESOURCES
 *****************************/
document.querySelectorAll("li[data-pdf]").forEach(item => {
    item.addEventListener("click", (event) => {
        event.stopPropagation();
        const pdfPath = item.dataset.pdf;

        viewer.innerHTML =
            `<iframe src="${pdfPath}" width="100%" height="800px"></iframe>`;
    });
});


/*****************************
 * SHOW REACTANT TEMPLATES
 *****************************/
document.querySelectorAll("li[data-reactant]").forEach(item => {
    item.addEventListener("click", (event) => {
        event.stopPropagation();

        const tpl = document.getElementById(item.dataset.reactant);
        viewer.innerHTML = tpl.innerHTML;
    });
});


/*****************************
 * CLEAR VIEWER
 *****************************/
document.querySelector(".clearer").addEventListener("click", () => {
    viewer.innerHTML = "";
});



/*****************************
 * IMAGE ENLARGE ON CLICK
 *****************************/
viewer.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        const src = event.target.getAttribute("src");
        document.getElementById("overlayImg").src = src;  // original size
        document.getElementById("imgOverlay").style.display = "flex";
    }
});

/* Close overlay when clicking on the big image */
document.getElementById("imgOverlay").addEventListener("click", () => {
    document.getElementById("imgOverlay").style.display = "none";
});
