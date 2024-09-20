document.addEventListener("mousemove", (e) => {
  let cursor = document.querySelector(".cursor");
  let trails = document.querySelectorAll(".cursor-trail");

  if (cursor) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.opacity = 1; // Ensure cursor is visible
  }

  trails.forEach((trail, index) => {
      if (trail) {
          setTimeout(() => {
              trail.style.left = `${e.clientX}px`;
              trail.style.top = `${e.clientY}px`;
              trail.classList.remove("hidden");
          }, index * 50); // Delay for trailing effect
      }
  });
});

// Optional: Hide cursor when not moving for performance
document.addEventListener("mouseleave", () => {
  let cursor = document.querySelector(".cursor");
  let trails = document.querySelectorAll(".cursor-trail");

  if (cursor) cursor.style.opacity = 0;

  trails.forEach((trail) => {
      if (trail) trail.classList.add("hidden");
  });
});
