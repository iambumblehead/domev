// Filename: domev.js
// Timestamp: 2015.02.23-11:51:35 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)

var domev = {
  getElemAt : function (e) {
    var fn = function () {};
    if (typeof e === 'object' && e) {
      if ('target' in e) {
        fn = function (ev) {
          return ev.target;
        };
      } else if ('srcElement' in e) {
        fn = function (ev) {
          return ev.srcElement;
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
          return ev.preventDefault();          
        };
      } else {
        fn = function (ev) {
          return ev.returnValue = false;          
        };
      }
    }
    return (domev.stopDefaultAt = fn)(e);
  },
  
  hasElem : function (e, elem, evelem) {
    evelem = this.getElemAt(e, elem);

    return elem && evelem 
        && (elem.isEqualNode(evelem) || elem.contains(evelem));  
  }
};


