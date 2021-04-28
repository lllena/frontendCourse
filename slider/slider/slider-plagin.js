class Slider {
  constructor({
    infinity = false,
    slidesToShow = 1,
    slidesToScrool = 1,
    autoplay = true,
    pauseOnHover = true,
    speed = 500,
    autoplaySpeed = 1500,
  }) {
    this.infinity = infinity;
    this.slidesToShow = slidesToShow;
    this.slidesToScrool = slidesToScrool;
    this.autoplay = autoplay;
    this.pauseOnHover = pauseOnHover;
    this.speed = speed;
    this.autoplaySpeed = autoplaySpeed;
    this.interval = 0;
    this.position = this.infinity ? this.slidesToShow : 0;
    this.maxSlides = Math.ceil(100 / this.slidesToShow);
    this.wrap = document.querySelector(".slider-wrapper");
    this.slides = document.querySelector(".slider-wrapper").children;
    this.prev = document.querySelector(".slider-arrow--prev");
    this.next = document.querySelector(".slider-arrow--next");
    this.container = document.querySelector(".slider-container");
    this.cloneSlide = { after: [], before: [] };
  }

  addStyle() {
    const style = document.createElement("style");
    style.id = "slider-style";
    style.textContent = `
        .slider-item {
            flex: 0 0 ${this.maxSlides}%;
        }
      `;
    document.head.appendChild(style);
    this.transformWrappSlide();
  }

  prevSlide() {
    this.wrap.style.transition = `transform ${this.speed}s`;
    if (this.position > 0) {
      this.changePosition(this.position - this.slidesToScrool);
    }

    if (!(this.position > 0) && this.infinity) {
      this.wrap.style.transition = "transform 0s";
      this.changePosition(this.slides.length + 1 - this.slidesToShow * 2);
      setTimeout(() => { this.prevSlide()}, 0);
    }
    this.transformWrappSlide();
  }

  nextSlide() {
    this.wrap.style.transition = `transform ${this.speed}s`;
    if (this.position < this.slides.length - this.slidesToShow) {
      if (this.slides.length - (this.position + this.slidesToScrool) >=this.slidesToShow) {
        this.changePosition(this.position + this.slidesToScrool);
      } else {
        this.changePosition(this.slides.length - this.slidesToShow);
      }
    }

    if (!(this.position < this.slides.length - this.slidesToShow) && this.infinity) {
      this.wrap.style.transition = "transform 0s";
      this.changePosition(this.slidesToShow - 1);
      setTimeout(() => {this.nextSlide()}, 0);
    }
    this.transformWrappSlide();
  }

  changePosition(x) {
    this.position = x;
  }

  transformWrappSlide() {
    this.wrap.style.transform = `translateX(-${
      this.position * this.maxSlides
    }%)`;
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

  cloneItems() {
    for (let i = 0; i < this.slidesToShow; i++) {
      this.cloneSlide.after.push(this.slides[i].cloneNode(true));
    }
    for (
      let i = this.slides.length - this.slidesToShow;
      i < this.slides.length;
      i++
    ) {
      this.cloneSlide.before.push(this.slides[i].cloneNode(true));
    }
    this.addCloneItems();
  }

  addCloneItems() {
    for (let i = 0; i < this.slidesToShow; i++) {
      this.wrap.appendChild(this.cloneSlide.after[i]);
    }
    for (let i = this.slidesToShow - 1; i >= 0; i--) {
      this.wrap.prepend(this.cloneSlide.before[i]);
    }
  }

  init() {
    this.addStyle();

    if (this.infinity) this.cloneItems();
    if (this.autoplay) this.startSlide();
    if (this.pauseOnHover) {
      this.container.addEventListener("mouseover", (e) => this.mouseOver(e));
      this.container.addEventListener("mouseout", (e) => this.mouseOut(e));
    }

    this.next.addEventListener("click", this.nextSlide.bind(this));
    this.prev.addEventListener("click", this.prevSlide.bind(this));
  }
}
