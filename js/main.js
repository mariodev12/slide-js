(function(){
  var cnt = 0;
  var slideshow = document.getElementsByClassName('slideshow')[0],
  slides = slideshow.getElementsByTagName('li'),
  next = document.getElementsByClassName('next')[0],
  back = document.getElementsByClassName('back')[0];

  function showImage(cnt){
    for (var i = 0; i < slides.length; i++) {
      slides[i].className = 'hide-slide';
    }
    slides[cnt].className = 'show-slide';
  }
  next.addEventListener('click', function(){
    if(cnt < slides.length-1){
      cnt++
    } else {
      cnt = 0;
    }
    showImage(cnt);
  });
  back.addEventListener('click', function(){
    if(cnt > 0){
      cnt--;
    } else {
      cnt = slides.length-1;
    }
    showImage(cnt);
  });
  showImage(cnt);
})();
