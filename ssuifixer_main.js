$(document).ready(function(){
  const targetNode = window.parent.document;
  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('mercury:load', init);

  var init = function(){
    if(ssuifixer == "Hker616"){
      $(targetNode).find('.sqs-custom-css-content .subtitle').html('');
      $(targetNode).find('.sqs-custom-css-content .CodeMirror-scroll').css('margin-bottom', '0px')
      $(targetNode).find('.sqs-custom-css-content .CodeMirror-scroll').css('padding-bottom', '0px')
      $(targetNode).find('.sqs-damask-panel-content > div:first-of-type > div:first-of-type span').each(function(){
        if($(this).text() == "Code Injection"){
          $(targetNode).find('.CodeMirror-scroll').attr('style', 'overflow: hidden !important; margin-bottom: 0px !important; padding-bottom: 0px !important; ');
          $(targetNode).find('.CodeMirror-sizer').css('margin-bottom', '12px')
        }
      })
      window.dispatchEvent(new Event('resize'));
    }
  }
})
