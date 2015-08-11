(function(window, document, undefined){
  'use strict';

  var exampleButtons = document.querySelectorAll('.example-button');
  var clickedNotices = document.querySelectorAll('.clicked-notice');
  var exampleAnimationButton = document.getElementById('animated-button-example')
  var roundAndRestless = document.querySelector('.round-and-restless');

  var affectAll = function(nodeList, fnctn){
    for(var i = 0, j = nodeList.length; i < j; i++){
      fnctn(nodeList.item(i));
    }
  };

  affectAll(exampleButtons, function(exampleButton){
    exampleButton.addEventListener('click', function(ev){
      ev.preventDefault();
      affectAll(clickedNotices, function(clickedNotice){
        clickedNotice.classList.add('clicked');
        setTimeout(function(){
          clickedNotice.classList.remove('clicked');
        }, '500');
      });
    });
  });

  exampleAnimationButton.addEventListener('click', function(ev){
    ev.preventDefault();
    exampleAnimationButton.classList.add('animated-button');
    setTimeout(function(){
      exampleAnimationButton.classList.remove('animated-button');
    }, '2400');
  });

  roundAndRestless.addEventListener('click', function(){
    roundAndRestless.classList.toggle('pause-animation');
  });



})(window, document)
