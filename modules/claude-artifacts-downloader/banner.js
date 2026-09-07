// Copied from claudesave - display success/error notifications
function createBanner(message, type = "error", timeout = 8000) {
  try {
    const banner = document.createElement("article");
    banner.className = type === "error" ? "error" : "success";
    banner.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        margin: 0;
        padding: 1rem;
        text-align: center;
        z-index: 9999;
        animation: slideDown 0.5s ease-out;
    `;
    banner.innerHTML = `<p>${escapeHtml(message)}</p>`;
    document.body.prepend(banner);

    // Set a timeout to remove the banner after specified time
    setTimeout(() => {
      banner.style.animation = "slideUp 0.5s ease-in";
      setTimeout(() => banner.remove(), 500);
    }, timeout);
  } catch (error) {
    console.error('[CAD] Error creating banner:', error);
  }
}

// Sanitize HTML to prevent injection
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// This adds the banner styles to the page
try {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes slideDown {
        from { transform: translateY(-100%); }
        to { transform: translateY(0); }
    }
    @keyframes slideUp {
        from { transform: translateY(0); }
        to { transform: translateY(-100%); }
    }
    article.error {
        background-color: #d30c00;
        border-color: #d30c00;
        color: white;
    }
    article.success {
        background-color: #125019;
        border-color: #125019;
        color: white;
    }
  `;
  document.head.appendChild(style);
} catch (error) {
  console.error('[CAD] Error appending banner styles:', error);
}
