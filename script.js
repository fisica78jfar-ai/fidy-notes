function setupViewer(selector) {
    const elements = document.querySelectorAll(selector);
    const viewer = document.getElementById("viewer");

    elements.forEach(element => {
        element.addEventListener("click", () => {
            const imgSrc = element.getAttribute("data-img");
            const pdfFile = element.getAttribute("data-pdf");

            if (imgSrc) {
                viewer.innerHTML = `<img src="${imgSrc}" alt="Image" style="max-width:100%; height:auto;" />`;
            } else if (pdfFile) {
                viewer.innerHTML = `<embed src="${pdfFile}" type="application/pdf" width="80%" height="800px"/>`;
            }
        });
    });
}
// Apply to all clickable resources
setupViewer(".img-resource, .pdf-resource, .dropdown li[data-img]");


// Clear viewer functionality
function clearViewer(selector = ".clearer") {
    const elements = document.querySelectorAll(selector);

    elements.forEach(el => {
        el.addEventListener("click", () => {
            const board = document.getElementById("viewer");
            board.innerHTML = "";
        });
    });
}
clearViewer();