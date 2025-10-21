document.addEventListener("DOMContentLoaded", () => {
  // Create the container div for the background
  const bg = document.createElement("div");
  bg.id = "particles-js";
  document.body.prepend(bg);

  // Load the particles.js library
  const lib = document.createElement("script");
  lib.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
  lib.onload = () => {
    // Once loaded, initialize your background
    const init = document.createElement("script");
    init.src = "js/intro-particles.js";
    document.body.appendChild(init);
  };
  document.body.appendChild(lib);
});
