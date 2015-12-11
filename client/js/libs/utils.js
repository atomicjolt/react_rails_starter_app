 var Utils = {

  currentTime: function(){
    return new Date().getTime();
  },

  makeId: function(){
    var result, i, j;
    result = '';
    for(j=0; j<32; j++)
    {
      if( j == 8 || j == 12|| j == 16|| j == 20)
      result = result + '-';
      i = Math.floor(Math.random()*16).toString(16).toUpperCase();
      result = result + i;
    }
    return result;
  },

  htmlDecode: function(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  },

  htmlDecodeWithRoot: function(input){
    return '<root>' + Utils.htmlDecode(input) + '</root>';
  },

  getLocation: function(href){
    var l = document.createElement("a");
    l.href = href;
    return l;
  }

};

export default Utils;