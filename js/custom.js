(function(window, document, undefined){
  'use strict';

  var exampleButtons = document.querySelectorAll('.example-button');
  var clickedNotices = document.querySelectorAll('.clicked-notice');

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

})(window, document)
