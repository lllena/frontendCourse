class Slider {
  constructor({
    slidesToShow = 1,
    slidesToScrool = 1,
    autoplay = true,
    pauseOnHover = true,
    speed = 500,
    autoplaySpeed = 1500,
  }) {
    this.slidesToShow = slidesToShow;
    this.slidesToScrool = slidesToScrool;
    this.autoplay = autoplay;
    this.pauseOnHover = pauseOnHover;
    this.speed = speed;
    this.autoplaySpeed = autoplaySpeed;
    this.interval = 0;
    this.position = 0;
    this.maxSlides = Math.ceil(100 / this.slidesToShow);
    this.wrap = document.querySelector(".slider-wrapper");
    this.slides = document.querySelector(".slider-wrapper").children;
    this.prev = document.querySelector(".slider-arrow--prev");
    this.next = document.querySelector(".slider-arrow--next");
    this.container = document.querySelector(".slider-container");
  }

  addStyle() {
    const style = document.createElement("style");
    style.id = "slider-style";
    style.textContent = `
        .slider-item {
            flex: 0 0 ${this.maxSlides}%;
        }
        .slider-item {
            opacity: ${this.fade};
        }
        .slider-wrapper {
            transition: transform ${this.speed}s;
          }
      `;
    document.head.appendChild(style);
  }

  prevSlide() {
    if (this.position > 0) {
      --this.position;
      this.wrap.style.transform = `translateX(-${
        this.position * this.maxSlides * this.slidesToScrool
      }%)`;
    }
  }

  nextSlide() {
    if (this.position < this.slides.length - this.slidesToShow) {
      ++this.position;
      this.wrap.style.transform = `translateX(-${
        this.position * this.maxSlides * this.slidesToScrool
      }%)`;
    }
  }

  startSlide() {
    this.interval = setInterval(
      this.autoPlaySlide.bind(this),
      this.autoplaySpeed
    );
  }

  stopSlide() {
    clearInterval(this.interval);
  }

  autoPlaySlide() {
    this.nextSlide();
  }

  mouseOver(e) {
    if (
      e.target.matches(".slider-arrow") ||
      e.target.matches(".slider-container")
    ) {
      this.stopSlide();
    }
  }

  mouseOut(e) {
    if (
      e.target.matches(".slider-arrow") ||
      e.target.matches(".slider-container")
    ) {
      this.startSlide();
    }
  }

  init() {
    this.addStyle();
    if (this.autoplay) {
      this.startSlide();
    }
    if (this.pauseOnHover) {
      this.container.addEventListener("mouseover", (e) => this.mouseOver(e));
      this.container.addEventListener("mouseout", (e) => this.mouseOut(e));
    }
    this.next.addEventListener("click", this.nextSlide.bind(this));
    this.prev.addEventListener("click", this.prevSlide.bind(this));
  }
}
