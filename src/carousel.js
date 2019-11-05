import $ from "jquery";
import throttle from "lodash.throttle";
import "./carousel.scss";

$.fn.carousel = function carousel(data) {
  const that = this;
  this._index = 0;
  this._active = 1;
  let imgList = "";
  data.forEach((e, i) => {
    imgList += `<div class="img-wrapper"><div class="img${
      i === 1 ? " active" : ""
    }" style="background-image:url(${e});"></div></div>`;
  });
  this.html(`
    <div class="carousel-container">
      <button class="prev-btn"><</button>
      <div class="carousel-wrapper">
      ${imgList}
      </div>
      <button class="next-btn">></button>
    </div>
  `);

  this._handlePrevClick = function() {
    if (!(that._active <= 1)) {
      that._index++;
      that._active--;
      $.each(that.find(".img-wrapper"), (i, e) => {
        const $e = $(e);
        let _left;
        i === that._active
          ? $e.find(".img").addClass("active")
          : $e.find(".img").removeClass("active");
        _left = parseInt($e.css("left"), 10) + 200;
        $e.css("left", _left);
      });
    }
  };

  this._handleNextClick = function() {
    if (!(that._active >= data.length - 2)) {
      that._index--;
      that._active++;
      $.each(that.find(".img-wrapper"), (i, e) => {
        const $e = $(e);
        let _left;
        i === that._active
          ? $e.find(".img").addClass("active")
          : $e.find(".img").removeClass("active");
        _left = parseInt($e.css("left"), 10) - 200;
        $e.css("left", _left);
      });
    }
  };

  this.find(".prev-btn").click(throttle(this._handlePrevClick, 500));
  this.find(".next-btn").click(throttle(this._handleNextClick, 500));
};
