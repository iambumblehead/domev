// Filename: domevtest.js  
// Timestamp: 2013.12.15-20:36:17 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
// Requires: domev.js

var domevtest = {
  init : function () {
    var elem = document.getElementById('Bttn1');

    elem.onclick = function (e) {
      console.log(domev.getElemAt(e));
      console.log(domev.stopDefaultAt(e));
    };
  }
};
