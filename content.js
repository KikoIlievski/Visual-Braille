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

function translateBrail(){
  const text = document.querySelectorAll("h1, h2, h3, h4, p, li, td, caption, span, a, div, th");
  for (var i = 0; i < text.length; i++) {
    if (text[i].nodeName == "DIV") {
        if (text[i].innerText.length != 0 && text[i].children.length == 0) {
            console.log(text[i]);
            console.log(text[i].innerText);
        } else {
            continue;
        }
    }
    var textToTranslate = text[i].innerText;
    var replacedText = "";
    for (var j = 0; j < textToTranslate.length; j++) {
        if (textToTranslate[j] in map) {
            replacedText = replacedText.concat(map[textToTranslate[j]]);
        } else {
            replacedText = replacedText.concat(textToTranslate[j]);
        }
    }
    text[i].innerText = replacedText;
}
}

chrome.runtime.onMessage.addListener(receiver);
function receiver(request, sender, sendResponse) {
  console.log(request.data);
  if (request%2 === 0) {
    translateBrail();
  }else{
    location.reload();
  }
}