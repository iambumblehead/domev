// Filename: domev.js
// Timestamp: 2017.04.26-21:28:17 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)

const domev = module.exports = (o => {
  
  o.getElemAt = (e, fn = ev => null) => {
    if (typeof e === 'object' && e) {
      if ('srcElement' in e) {
        fn = ev => ev.srcElement;        
      } else if ('target' in e) {
        fn = ev => ev.target;
      }
    }

    return (o.getElemAt = fn)(e);
  };

  o.stopDefaultAt = (e, fn = ev => null) => {
    if (typeof e === 'object' && e) {
      if (typeof e.preventDefault) {
        fn = ev => (ev.preventDefault());
      } else {
        fn = ev => (ev.returnValue = false);
      }
    }
    
    return (o.stopDefaultAt = fn)(e);
  };

  o.getparentlinkelemat = (e, elem = o.getElemAt(e)) => (
    elem && (function getparentlink (elem) {
      return (elem && elem.tagName) && (
          /^a/i.test(elem.tagName)
          ? elem : getparentlink(elem.parentNode));
    }(elem)));
  
  o.isElem = (e, elem, evelem = o.getElemAt(e, elem)) => (
    elem && evelem && elem.isEqualNode(evelem));
  
  o.hasElem = (e, elem, evelem = o.getElemAt(e, elem)) => (
    elem && evelem && (elem.isEqualNode(evelem) ||
                       elem.contains(evelem)));

  return o;
  
})({});
