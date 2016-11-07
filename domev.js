// Filename: domev.js
// Timestamp: 2016.11.07-12:14:20 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)

var domev = module.exports = {
  
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

  getparentlinkelemat : function (e) {
    var elem = this.getElemAt(e);

    return elem && (function getparentlink (elem) {
      return (elem && elem.tagName) && (
        elem.tagName.match(/^a/i)
          ? elem : getparentlink(elem.parentNode));        
    }(elem));
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

  isElem : function (e, elem, evelem) {
    evelem = this.getElemAt(e, elem);

    return elem && evelem 
      && elem.isEqualNode(evelem);
  },
  
  hasElem : function (e, elem, evelem) {
    evelem = this.getElemAt(e, elem);

    return elem && evelem 
      && (elem.isEqualNode(evelem) || elem.contains(evelem));  
  }
};


