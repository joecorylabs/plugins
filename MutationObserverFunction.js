//main function to set up the mutation observer and check if the child element exists
function domWatch(parent, child, options, callback){
  //get the parent node
  var targetNode = document.getElementById(parent);
  //set up the options of what the mutation observer should watch for
  var config = { attributes: options[0], childList: options[1], subtree: options[2] };
  //main loop for checking if the child exists in the parent
  var loop = function(mutationsList, observer) {
    if(document.querySelector(child) !== null){
      //disconnect the observer when the child is found
      observer.disconnect();
      //pass the child to the end function
      callback(document.querySelector(child))
    }
  }
  //start the observer
  var observer = new MutationObserver(loop)
  observer.observe(targetNode, config);
}

//initialisation function passing 4 values
//id of the parent element
//identifier of the child element (class, type etc...)
//array of bools for the config (attributes, childList & subTree)
//end function to run when child is found inside of parent
domWatch('page', '.page-description2', [true,true,true], test)

//end function containing the child element that was found
function test(elm){
  console.log(elm)
}
