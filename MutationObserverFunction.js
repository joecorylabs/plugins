function domWatch(parent, child, options, callback){
  var targetNode = document.getElementById(parent);
  if(targetNode !== null){
  var config = { attributes: options[0], childList: options[1], subtree: options[2] };
  var loop = function(mutationsList, observer) {
    if(document.querySelector(child) !== null){
      observer.disconnect();
      callback(document.querySelector(child))
    }
  }
  var observer = new MutationObserver(loop)
  observer.observe(targetNode, config); 
  }else{
   console.log('domWatch -- Parent does not exist') 
  }
}

domWatch('page', '.page-description2', [true,true,true], test)

function test(elm){
  console.log(elm)
}
