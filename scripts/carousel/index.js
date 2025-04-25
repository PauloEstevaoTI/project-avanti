document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("carousel-track");
  const cards = track.querySelectorAll(".card");
  const cardsPerView = getCardsPerView();
  let currentIndex = 0;

  function getCardsPerView() {
    const width = window.innerWidth;
    if (width < 576) return 1;
    if (width < 768) return 2;
    if (width < 992) return 3;
    if (width < 1200) return 4;
    return 5;
  }

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  document.getElementById("btn-prev").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  document.getElementById("btn-next").addEventListener("click", () => {
    const maxIndex = cards.length - getCardsPerView();
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });

  window.addEventListener("resize", () => {
    updateCarousel();
  });
});
