// -------------------- IMAGE SWITCHING (Organic + Inorganic) --------------------
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
setupImageSwitch(".oneElement", "viewerOrgChem");

// Inorganic Chem
setupImageSwitch(".oneElement", "viewerInorgChem");


// -------------------- MATH PAGE --------------------
document.addEventListener("DOMContentLoaded", () => {
  const pdfViewer = document.getElementById("viewerMath");
  const pdfButtons = document.querySelectorAll(".pdf-btn");
  let currentPdf = null;

  // ---- PDF FILE BUTTONS ----
  pdfButtons.forEach(button => {
    button.addEventListener("click", () => {
      const pdfFile = button.getAttribute("data-pdf");

      const bar = document.getElementById("options-bar");
      bar.innerHTML = ""; // clear previous buttons

      if (currentPdf === pdfFile) {
        pdfViewer.innerHTML = ""; // clear
        currentPdf = null;
      } else {
        pdfViewer.innerHTML = `<iframe src="${pdfFile}" width="100%" height="800px" style="border:none;"></iframe>`;
        currentPdf = pdfFile;
      }
    });
  });

  // ---- LOGIC RULES ----
  const Rule = [
    "Modus Ponens",
    "Modus Tollens",
    "Hypothetical Syllogism",
    "Disjunctive Syllogism",
    "Constructive Dilemma"
  ];

  // Listen for clicks on .display-btn (to generate rule buttons)
  const displayButtons = document.querySelectorAll(".display-btn");
  displayButtons.forEach(button => {
    button.addEventListener("click", () => {
      pdfViewer.innerHTML = ""; // clear previous content

      const bar = document.getElementById("options-bar");
      bar.innerHTML = ""; // clear previous buttons

      for (let i = 0; i < Rule.length; i++) {
      const btn = document.createElement("button");
      btn.textContent = Rule[i];
      btn.className = "options-btn";

      // store the image path as data attribute
      btn.setAttribute("data-img", `math/logic-${i + 1}.png`);

      // attach listener here while creating
      btn.addEventListener("click", () => {
        pdfViewer.innerHTML = `
          <div style="margin-bottom:100px;"></div>
          <img src="${btn.getAttribute("data-img")}" 
               alt="Logic Rule ${i + 1}" 
               class="viewer" 
               style="max-width:100%;">
        `;
      });

      bar.appendChild(btn);
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
