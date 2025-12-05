// ========================================================= //
// CAROUSEL UNTUK PROJECT 1, 2, DAN 3
// ========================================================= //

// CAROUSEL PROJECT 1
function initCarousel1() {
  const container = document.querySelector(".design-proect-1");
  const track = container.querySelector(".carousel-track");
  const items = container.querySelectorAll(".carousel-item");
  const prevBtn = container.querySelector(".prev");
  const nextBtn = container.querySelector(".next");

  let index = 0;

  function updateCarousel() {
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < items.length - 1) {
      index++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });
}

// CAROUSEL PROJECT 2
function initCarousel2() {
  const container = document.querySelector(".design-proect-2");
  const track = container.querySelector(".carousel-track");
  const items = container.querySelectorAll(".carousel-item");
  const prevBtn = container.querySelector(".prev");
  const nextBtn = container.querySelector(".next");

  let index = 0;

  function updateCarousel() {
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < items.length - 1) {
      index++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });
}

// CAROUSEL PROJECT 3
function initCarousel3() {
  const container = document.querySelector(".design-proect-3");
  const track = container.querySelector(".carousel-track");
  const items = container.querySelectorAll(".carousel-item");
  const prevBtn = container.querySelector(".prev");
  const nextBtn = container.querySelector(".next");

  let index = 0;

  function updateCarousel() {
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < items.length - 1) {
      index++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });
}

// Jalankan semua carousel saat halaman siap
document.addEventListener("DOMContentLoaded", () => {
  initCarousel1();
  initCarousel2();
  initCarousel3();
});
