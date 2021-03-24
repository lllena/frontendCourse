class Slider {
    constructor({
        infinite = true,
        slidesToShow = 1,
        slidesToScrool = 1,
        autoplay = true,
        dots = true,
        pauseOnHover = true,
        pauseOnDotsHover = true,
        speed = 500,
        autoplaySpeed = 1500,
        centerMode = false,
        fade = false
    }) {
    this.infinite = infinite;
    this.slidesToShow = slidesToShow;
    this.slidesToScrool = slidesToScrool;
    this.autoplay = autoplay;
    this.dots = dots;
    this.pauseOnHover = pauseOnHover;
    this.pauseOnDotsHover = pauseOnDotsHover;
    this.speed = speed;
    this.autoplaySpeed = autoplaySpeed;
    this.centerMode = centerMode;
    this.fade = fade;
  }

  init() {
    console.log(this);
  }
}
