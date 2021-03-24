class Slider {
  constructor(
    { width = 500, height = 400 },
    {
      infinite = true,
      slidesToShow = 1,
      slidesToScrool = 1,
      autoplay = true,
      dots = true,
      pauseOnHover = true,
      pauseOnDotsHover = true,
      speed = 500,
      autoplaySpeed = 1500,
    }
  ) {
    this.infinite = infinite;
    this.slidesToShow = slidesToShow;
    this.slidesToScrool = slidesToScrool;
    this.autoplay = autoplay;
    this.dots = dots;
    this.pauseOnHover = pauseOnHover;
    this.pauseOnDotsHover = pauseOnDotsHover;
    this.speed = speed;
    this.autoplaySpeed = autoplaySpeed;
    this.interval = 0;
    this.position = 0;
    this.maxSlides = Math.ceil(100 / this.slidesToShow);
    this.style = {
      width,
      height,
    };
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
        .slider-container {
            width: ${this.style.width}px;
            height: ${this.style.height}px;
        }
        .slider-item {
            flex: 0 0 ${this.maxSlides}%;
        }
        .slider-item {
            border: 2px solid red;
            opacity: ${this.fade};
        }
        .slider-arrow--next{
         margin: ${this.style.width - 25}px;
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
      console.log("prev");
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
