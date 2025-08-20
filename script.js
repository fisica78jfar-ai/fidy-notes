// for the options from the menu
const listItems = document.querySelectorAll('.subsubmenu li');
const changedImage = document.getElementById('mainImage');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.getAttribute('data-img'); // get the data-img attribute value
    changedImage.src = imgSrc; // set the src of the image to that value
    changedImage.alt = "Reaction";
  });
});


// for the buttons 
const listButtons = document.querySelectorAll('button');
const changedImage2 = document.getElementById('mainImage');

listButtons.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc2 = item.getAttribute('data-img'); // get the data-img attribute value
    changedImage2.src = imgSrc2; // set the src of the image to that value
  });
});

// HERE GOES THE CODE FOR math.html
// code for buttons to show pdf
document.addEventListener("DOMContentLoaded", () => {
  const pdfButtons = document.querySelectorAll(".pdf-btn");
  const pdfViewer = document.getElementById("pdf-viewer");
  let currentPdf = null; // track which PDF is showing

  pdfButtons.forEach(button => {
    button.addEventListener("click", () => {
      const pdfFile = button.getAttribute("data-pdf");

      if (currentPdf === pdfFile) {
        // If same button clicked again → clear viewer
        pdfViewer.innerHTML = "";
        currentPdf = null;
      } else {
        // Otherwise → load the new PDF
        pdfViewer.innerHTML = `<iframe src="${pdfFile}" width="100%" height="800px" style="border:none;"></iframe>`;
        currentPdf = pdfFile;
      }
    });
  });
});
// HERE ENDS THE CODE FOR THE MATH PAGE