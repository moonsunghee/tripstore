import React, {Component} from "react";
import "../../styles/sub5.carousel2.scss";
import $ from "jquery";
const context = [
  {imgTitle:"Image 01"},
  {imgTitle:"Image 02"},
  {imgTitle:"Image 03"},
  {imgTitle:"Image 04"},
  {imgTitle:"Image 05"},
  {imgTitle:"Image 06"}
]
class Carousel2 extends Component{
  componentDidMount(){
    const $carousel = $('.carousel2'),
          $carousel_imgbox = $carousel.find('.imageBox'),
          $carousel_btPrev = $carousel.find('.btPrev'),
          $carousel_btNext = $carousel.find('.btNext');
          
    $carousel_imgbox.find('.image:last').prependTo($carousel_imgbox);
    $carousel_imgbox.css({left:-100 / 3+'%'});

    $carousel_btNext.on('click', function(){
      $carousel_imgbox.animate({left:'-66.66%'}, function(){
        $carousel_imgbox.find('.image:first').appendTo($carousel_imgbox);
        $carousel_imgbox.css({left:'-33.33%'});
      })
    });

    $carousel_btPrev.on('click', function(){
      $carousel_imgbox.animate({left:0}, function(){
        $carousel_imgbox.find('.image:last').prependTo($carousel_imgbox);
        $carousel_imgbox.css({left:'-33.33%'});
      })
    });
  }

  render(){
    return(
      <div className="content carousel2">
        <section>
          <div className="imageWrap">
            <div className="imageBox">
              {context.map((data, i)=>{
                return(
                  <div class={"image i" + (i+1)}>{data.imgTitle}</div>
                )
              })}
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
export default Carousel2;