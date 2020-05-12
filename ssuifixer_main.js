$(document).ready(function(){
const targetNode = window.parent.document;
    var init = function(){
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
    if(ssuifixer == "Hker616"){
    init()
}
    

    const config = { attributes: true, childList: true, subtree: true };

    const callback = function(mutationsList, observer) {
      for(let mutation of mutationsList) {
        if (mutation.attributeName === 'cm-not-content') {
if(ssuifixer == "Hker616"){
init()
}
        }
      }
    };

    const observer = new MutationObserver(callback);

    observer.observe(targetNode, config);
  })