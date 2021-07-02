const map = {
    "0" :"⠴", 
    "1" : "⠂", 
    "2" : "⠆", 
    "3" : "⠒", 
    "4" : "⠲", 
    "5" : "⠢", 
    "6" : "⠖", 
    "7" : "⠶", 
    "8" : "⠦", 
    "9" : "⠔", 
    ":" : "⠱", 
    ";" : "⠰", 
    "<" : "⠣", 
    "=" : "⠿", 
    ">" : "⠜", 
    "?" : "⠹",
    "!" : "⠮",
    "\"": "⠐",
    "#" : "⠼",
    "$" : "⠫",
    "%" : "⠩",
    "&" : "⠯",
    "'" : "⠄",
    "(" : "⠷",
    ")" : "⠾",
    "*" : "⠡",
    "+" : "⠬",
    "," : "⠠",
    "-" : "⠤",
    "." : "⠨ ",
    "/" : "⠌",
    "@" : "⠈",
    "A" : "⠸⠁",
    "B" : "⠸⠃",
    "C" : "⠸⠉",
    "D" : "⠸⠙",
    "E" : "⠸⠑",
    "F" : "⠸⠋",
    "G" : "⠸⠛",
    "H" : "⠸⠓",
    "I" : "⠸⠊",
    "J" : "⠸⠚",
    "K" : "⠸⠅",
    "L" : "⠸⠇",
    "M" : "⠸⠍",
    "N" : "⠸⠝",
    "O" : "⠸⠕",
    "P" : "⠸⠏",
    "Q" : "⠸⠟",
    "R" : "⠸⠗",
    "S" : "⠸⠎",
    "T" : "⠸⠞",
    "U" : "⠸⠥",
    "V" : "⠸⠧",
    "W" : "⠸⠺",
    "X" : "⠸⠭",
    "Y" : "⠸⠽",
    "Z" : "⠸⠵",
    "[" : "⠪",
    "\\": "⠳",
    "]" : "⠻",
    "^" : "⠘",
    "_" : "⠸⠸",
    "`" : "⠸⠈",
    "a" : "⠁",
    "b" : "⠃",
    "c" : "⠉",
    "d" : "⠙",
    "e" : "⠑",
    "f" : "⠋",
    "g" : "⠛",
    "h" : "⠓",
    "i" : "⠊",
    "j" : "⠚",
    "k" : "⠅",
    "l" : "⠇",
    "m" : "⠍",
    "n" : "⠝",
    "o" : "⠕",
    "p" : "⠏",
    "q" : "⠟",
    "r" : "⠗",
    "s" : "⠎",
    "t" : "⠞",
    "u" : "⠥",
    "v" : "⠧",
    "w" : "⠺",
    "x" : "⠭",
    "y" : "⠽",
    "z" : "⠵",
    "{" : "⠸⠪",
    "|" : "⠸⠳",
    "}" : "⠸⠻",
    "~" : "⠸⠘", 
    " " : " "
}

function replaceTextOnPage(from, to){
    getAllTextNodes().forEach(function(node){
      node.nodeValue = node.nodeValue.replace(new RegExp(quote(from), 'g'), to);
    });
  
    function getAllTextNodes(){
      var result = [];
  
      (function scanSubTree(node){
        if(node.childNodes.length) 
          for(var i = 0; i < node.childNodes.length; i++) 
            scanSubTree(node.childNodes[i]);
        else if(node.nodeType == Node.TEXT_NODE) 
          result.push(node);
      })(document);
  
      return result;
    }
  
    function quote(str){
      return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    }
  }

for (key in map){
    replaceTextOnPage(key, map[key])}