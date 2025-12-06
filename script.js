const viewer = document.getElementById("viewer");

/*****************************
 * LOAD IMAGES OR PDFS
 *****************************/
["img", "pdf"].forEach(type => {
    document.querySelectorAll(`li[data-${type}]`).forEach(item => {
        item.addEventListener("click", (event) => {
            event.stopPropagation();
            viewer.innerHTML =
                type === "img"
                    ? `<img src="${item.dataset.img}">`
                    : `<iframe src="${item.dataset.pdf}" width="100%" height="800px"></iframe>`;
        });
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
        const src = event.target.src;
        document.getElementById("overlayImg").src = src;
        document.getElementById("imgOverlay").style.display = "flex";
    }
});

document.getElementById("imgOverlay").addEventListener("click", () => {
    document.getElementById("imgOverlay").style.display = "none";
});

/*****************************
 * REACTIONS POPUP (RXN)
 *****************************/
function showRXN() {
    const template = document.getElementById("rxnTemplate");
    viewer.innerHTML = template.innerHTML;

    // attach events to dynamic hotspot buttons
    viewer.querySelectorAll(".hotspot").forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById("modalImg").src = btn.dataset.img;
            document.getElementById("reactionModal").style.display = "flex";
        });
    });
}



// Close modal when clicking on the background overlay
document.getElementById("reactionModal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        e.currentTarget.style.display = "none";
    }
});
