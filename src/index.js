let devtoolsOpen = false;
const threshold = 160; // Umbral de diferencia en píxeles para detectar las herramientas de desarrollo

const detectDevTools = () => {
  const isOpen =
    window.outerWidth - window.innerWidth > threshold ||
    window.outerHeight - window.innerHeight > threshold;

  if (isOpen && !devtoolsOpen) {
    devtoolsOpen = true;
    console.log("¡Herramientas de desarrollo abiertas!");
    debugger;
    location.reload();
  } else {
    devtoolsOpen = false;
  }
};

const handleContextMenu = (e) => {
  e.preventDefault();
};

// if (process.env.NODE_ENV === "production") {
//   setInterval(detectDevTools, 200);
// }

// Agregar listeners para eventos de teclado y clic derecho
document.addEventListener("contextmenu", handleContextMenu);
