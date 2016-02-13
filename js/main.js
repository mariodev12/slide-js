(function(){
  var slideshow = document.getElementsByClassName('slideshow')[0],
  counter = 0,
  slides = slideshow.getElementsByTagName('li'),
  next = document.getElementsByClassName('next')[0],
  back = document.getElementsByClassName('back')[0];

  function showImage(counter){
    for (var i = 0; i < slides.length; i++) {
      slides[i].className = 'hide-slide';
    }
    slides[counter].className = 'show-slide';
  }
  next.addEventListener('click', function(){
    if(counter < slides.length-1){
      counter++
    } else {
      counter = 0;
    }
    showImage(counter);
  });
  back.addEventListener('click', function(){
    if(counter > 0){
      counter--;
    } else {
      counter = slides.length-1;
    }
    showImage(counter);
  });
  showImage(counter);
})();
