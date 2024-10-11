import React, { Component } from "react";
import "../../styles/sub5.carousel.scss";
import $ from "jquery";
class Carousel extends Component {
  componentDidMount() {
    //btNext클릭하면 기능
    //i = i+1
    //.imageBox가 left:-100% 다음그림이 보여집니다.
    const $carousel = $('.carousel'),
          $carousel_imgbox = $carousel.find('.imageBox'),
          $carousel_btPrev = $carousel.find('.btPrev'),
          $carousel_btNext = $carousel.find('.btNext');
    $carousel_imgbox.find('.image:last').prependTo($carousel_imgbox);
    $carousel_imgbox.css({left:'-100%'});

    $carousel_btNext.on('click', function(){
      $carousel_imgbox.animate({left:'-200%'}, function(){
        $carousel_imgbox.find('.image:first').appendTo($carousel_imgbox);
        $carousel_imgbox.css({left:'-100%'});
      })
    });
    $carousel_btPrev.on('click', function(){
      $carousel_imgbox.animate({left:0}, function(){
        $carousel_imgbox.find('.image:last').prependTo($carousel_imgbox);
        $carousel_imgbox.css({left:'-100%'});
      })
    });
  }
  render() {
    return (
      <div className="content carousel">
        <section>
          <div className="imageWrap">
            <div className="imageBox">
              <div className="image i1">Image01</div>
              <div className="image i2">Image02</div>
              <div className="image i3">Image03</div>
              <div className="image i4">Image04</div>
              <div className="image i5">Image05</div>
              <div className="image i6">Image06</div>
            </div>
          </div>
          <div className="buttonBox">
            <button className="btPrev">1</button>
            <button className="btNext">2</button>
          </div>
        </section>
      </div>
    );
  }
}
export default Carousel;
