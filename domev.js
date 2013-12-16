// Filename: domev.js
// Timestamp: 2013.12.15-20:35:56 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)

var domev = {
  getElemAt : function (e) {
    var fn = function () {};
    if (typeof e === 'object' && e) {
      if ('target' in e) {
        fn = function (ev) {
          return ev && ev.target;
        };
      } else if ('srcElement' in e) {
        fn = function (ev) {
          return ev && ev.srcElement;
        };
      }
    }
    return (domev.getElemAt = fn)(e);
  },

  stopDefaultAt : function (e) {
    var fn = function () {};
    if (typeof e === 'object' && e) {
      if (e.preventDefault) {
        fn = function (ev) {
          return ev && ev.preventDefault();          
        };
      } else {
        fn = function (ev) {
          return ev && ev.returnValue = false;          
        };
      }
    }
    return (domev.stopDefaultAt = fn)(e);
  }
};


