const targetNode = window.parent.document;
  function domWatch(parent, child, options, callback){
    var targetNode = window.parent.document.querySelectorAll(parent)[0];
    var config = { attributes: options[0], childList: options[1], subtree: options[2] };
    var loop = function(mutationsList, observer) {
      if("Hker616" == "Hker616"){
        $(targetNode).find('.code-editor-error').attr('style', 'right: 10px !important;')
        $(targetNode).find('.sqs-custom-css-content .subtitle').html('');
        $(targetNode).find('.sqs-custom-css-content .CodeMirror-scroll').css('margin-bottom', '0px')
        $(targetNode).find('.sqs-custom-css-content .CodeMirror-scroll').css('padding-bottom', '0px')
        $(targetNode).find('.sqs-damask-panel-content > div:first-of-type > div:first-of-type span').each(function(){
          if($(this).text() == "Code Injection"){
            $(targetNode).find('.CodeMirror-scroll').attr('style', 'overflow: hidden !important; margin-bottom: 0px !important; padding-bottom: 0px !important; ');
            $(targetNode).find('.CodeMirror-sizer').css('margin-bottom', '12px')
          }
        })

        if(!$(targetNode).find('#cssSearch').length){
        $(targetNode).find('.sqs-custom-css-content .code-editor').prepend('<div><p style="font-size: 16px; font-weight: 500px; margin-bottom: 10px !important;">Custom Search</p> <input id="cssSearch" autocomplete="false" style="margin-bottom: 20px; display: block; width: 100%; padding: 0px 5px; border: solid 1px #000; box-sizing: border-box;"></input></div>')

        $(targetNode).find('#cssSearch').on('input', function(){
          $(targetNode).find('.CodeMirror-code .active').removeClass('active').attr('style', 'background-color: rgba(255,255,255,0)')
          if($(targetNode).find('#cssSearch').val() != ''){
            $(targetNode).find('.CodeMirror-line').each(function(){
              if($(this).text().includes($(targetNode).find('#cssSearch').val())){
                $(this).parent().attr('style', 'background-color: rgba(255,0,0,0.3)').addClass('active') 
              }
            })
          }
        })

        $(targetNode).find('.CodeMirror-scroll').scroll(function(){
          $(targetNode).find('.CodeMirror-code .active').removeClass('active').attr('style', 'background-color: rgba(255,255,255,0)')
          if($(targetNode).find('#cssSearch').val() != ''){
            $(targetNode).find('.CodeMirror-line').each(function(){
              if($(this).text().includes($(targetNode).find('#cssSearch').val())){
                $(this).parent().attr('style', 'background-color: rgba(255,0,0,0.3)').addClass('active') 
              }
            })
          }
        })
      }

        window.dispatchEvent(new Event('resize'));
        observer.disconnect()
        observer.observe(targetNode, config);
      }
    }
    var observer = new MutationObserver(loop)
    observer.observe(targetNode, config);
  }

  domWatch('.App-sidebar', '.sqs-damask-panel-content', [false,true,true], test)

  function test(elm){

  }
