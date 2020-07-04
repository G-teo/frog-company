$(window).resize(function(){
  w=$(window).width();
  if(w < 1200){
    let is_opening = false;
    $('.header-logo').on('click', function(){
      if (is_opening){  
        $('#header-top').css('display','block')
        $('#hidden-header-top').css('display','none');
        is_opening = false;       
      }else{
      $('#header-top').css('display','none')
      $('#hidden-header-top').css('display','block');
      is_opening = true;
      }
    });
  };
});
$(window).ready(function(){
  w=$(window).width();
  if(w < 1200){
    let is_opening = false;
    $('.header-logo').on('click', function(){
      if (is_opening){  
        $('#header-top').css('display','block')
        $('#hidden-header-top').css('display','none');
        is_opening = false;       
      }else{
      $('#header-top').css('display','none')
      $('#hidden-header-top').css('display','block');
      is_opening = true;
      }
    });
  };
});

const video = document.querySelector('#opening-movie');
const video_btn = document.querySelector('#video-btn');
let is_playing = true;

video_btn.addEventListener('click', () => {
  if (!is_playing) {
    video.play();
    is_playing = true;
    $('.play').css('display','none');
    $('.pause').css('display','block');
  } else {
    video.pause();
    is_playing = false;
    $('.play').css('display','block');  
    $('.pause').css('display','none');  
  }
});