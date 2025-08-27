// -------------------- IMAGE SWITCHING (Organic + Inorganic) --------------------
// Handles clicks from menus or buttons and updates the viewer
function setupImageSwitch(selector, viewerId) {
  const items = document.querySelectorAll(selector);
  const viewer = document.getElementById(viewerId);

  items.forEach(item => {
    item.addEventListener("click", () => {
      const imgSrc = item.getAttribute("data-img");
      if (imgSrc) {
        viewer.src = imgSrc;
        viewer.alt = "Reaction";
      }
    });
  });
}

// Organic Chem
setupImageSwitch(".subsubmenu li", "viewerOrgChem");
setupImageSwitch("button", "viewerOrgChem");

// Inorganic Chem
setupImageSwitch(".subsubmenu li", "viewerInorgChem");


// -------------------- PDF VIEWER (Math page) --------------------
document.addEventListener("DOMContentLoaded", () => {
  const pdfButtons = document.querySelectorAll(".pdf-btn");
  const pdfViewer = document.getElementById("viewerMath");
  let currentPdf = null;

  pdfButtons.forEach(button => {
    button.addEventListener("click", () => {
      const pdfFile = button.getAttribute("data-pdf");

      if (currentPdf === pdfFile) {
        pdfViewer.innerHTML = "";  // clear viewer
        currentPdf = null;
      } else {
        pdfViewer.innerHTML = `<iframe src="${pdfFile}" width="100%" height="800px" style="border:none;"></iframe>`;
        currentPdf = pdfFile;
      }
    });
  });
});


// -------------------- IMAGE ZOOM (all viewers) --------------------
document.querySelectorAll(".viewer").forEach(img => {
  img.addEventListener("click", (e) => {
    if (!img.src) return;

    img.classList.toggle("enlarged");

    if (img.classList.contains("enlarged")) {
      const rect = img.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      img.style.transformOrigin = `${x}% ${y}%`;
    } else {
      img.style.transformOrigin = "center center";
    }
  });
});
