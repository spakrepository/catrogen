(function(){


    var hasVScroll = document.body.scrollHeight > document.body.clientHeight;
      
      if(hasVScroll)
      {
        //alert('scroll');
        $('.toggle-footer-class').addClass('relative-footer');
      }
      else
      {
        //alert('no scroll');        
        $('.toggle-footer-class').addClass('absolute-footer');
      }

      var $window_width = $(window).width();

      console.log($window_width);

      if($window_width < 768)
      {
         $('.carousel-inner > .item:first').remove();
         $('.carousel-inner > .item:nth-child(1)').addClass('active');         
      }
      // else
      // {
      //   alert("greater");
      // }
      


    var $whystarlite_pop_wrapper = $('.whystarlite-pop-wrapper'),
        $pop_header_animition = $('.pop-header-animition'),
        $pop_body_animation = $('.pop-body-animation');
        $close_btn_animation = $('.close-btn-animation'),
        $btnn_animation = $('.btnn-animation');

    TweenLite.fromTo($whystarlite_pop_wrapper, 2, {x:'400'}, {x:'0'});
    TweenLite.to($pop_header_animition, 2, {opacity:'1'}).delay(2.1);
    TweenLite.to($pop_body_animation, 2, {opacity:'1'}).delay(2.3);
    TweenLite.to($btnn_animation, 1, {opacity:'1'}).delay(2.5);
    TweenLite.to($close_btn_animation, 1, {opacity:'1'}).delay(2.7);

    


    

    
    

    
    
    

        
})(jQuery);