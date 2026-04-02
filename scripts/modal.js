// Modal para el PDF (solo en páginas que incluyen #pdf-modal, ej. servicios.html)

const modal = document.getElementById("pdf-modal");
const viewer = document.getElementById("pdfViewer");
const closeBtn = document.getElementById("closeModal");

function openPdf(pdfPath) {
  if (!pdfPath || !modal || !viewer) return;
  const normalized = String(pdfPath).replace(/\\/g, "/");
  viewer.src = normalized;
  modal.classList.remove("hidden");
}

document.querySelectorAll("[data-pdf]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    openPdf(link.getAttribute("data-pdf"));
  });
});

if (closeBtn && modal && viewer) {
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    viewer.src = "";
  });
}
