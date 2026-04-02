 // Modal para el PDF
 const modal = document.getElementById("pdf-modal");
 const viewer = document.getElementById("pdfViewer");
 const closeBtn = document.getElementById("closeModal");
 
function openPdf(pdfPath) {
  if (!pdfPath) return;
  // Normalizamos por si en el HTML viene con "\"
  const normalized = String(pdfPath).replace(/\\/g, "/");
  viewer.src = normalized;
  modal.classList.remove("hidden");
}

// Abrir desde cualquier link con data-pdf
document.querySelectorAll("[data-pdf]").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    openPdf(link.getAttribute("data-pdf"));
  });
});
 
 // Cerrar modal
 closeBtn.addEventListener("click", () => {
   modal.classList.add("hidden");
   viewer.src = "";
 });