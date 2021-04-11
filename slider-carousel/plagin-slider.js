class Slider {
  constructor({ main, wrap, classArrow, next, prev, infinity = false, position = 0, slidesToShow = 3 }) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.classArrow = classArrow;
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      infinity,
      widthSlides: Math.floor(100 / this.slidesToShow),
    };
  }
  init() {
    this.addClass();
    this.addStyle();
    if (this.prev && this.next) {
      this.controlSlider();
    } else {
      this.addArrow();
      this.controlSlider();
    }
  }
  addClass() {
    this.main.classList.add('slider');
    this.wrap.classList.add('slider_wrap');
    for (const item of this.slides) {
      item.classList.add('slider_item');
    }
  }
  addStyle() {
    const style = document.createElement('style');
    style.id = 'slider-style';
    style.textContent = `
         .slider{
             overflow: hidden !important;
         }
         .slider_wrap{
             display: flex !important;
             transition: transform 0.5s !important;
             will-change: transform !important;
         }
         .slider_item{
             flex: 0 0 ${this.options.widthSlides}% !important;
             margin: auto 0 !important;
         }
         ${this.classArrow}{
             margin: 15px;
             width: 40px;
             height: 40px;
             background-color: rgba(0, 0, 0, 0.5);
             border-radius: 50%;
             transition: background-color 0.2s;
         }
      `;
    document.head.appendChild(style);
  }
  controlSlider() {
    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));
  }
  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      if (this.options.position < 0) {
        this.options.position = this.slides.length - this.slidesToShow;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlides}%)`;
    }
  }
  nextSlider() {
    if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
      ++this.options.position;
      if (this.options.position > this.slides.length - this.slidesToShow) {
        this.options.position = 0;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlides}%)`;
    }
  }
  addArrow() {
    this.prev = document.createElement('button');
    this.next = document.createElement('button');

    this.prev.className = 'slider-arrow';
    this.next.className = 'slider-arrow';

    this.prev.textContent = '<';
    this.next.textContent = '>';

    this.main.appendChild(this.prev);
    this.main.appendChild(this.next);
  }
}
