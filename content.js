String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

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
function changeElementOfCurrLayer(parent = document) {
    var elements = parent.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
    
        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];
    
            if (node.nodeType === 3) {
                if (["SCRIPT", "STYLE", "NOSCRIPT", "BODY", "TITLE", "BUTTON", "FORM"].includes(element.tagName)) {
                    continue;
                } else if (element.tagName == "DIV") {
                    console.log(element.children);
                    changeElementOfCurrLayer(element);
                    break;
                }
                var text = node.nodeValue;
                var replacedText = "";
                for (var i = 0; i < text.length; i++) {
                    replacedText = replacedText.concat(map[text[i]]);
                }            
                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}

// function dfsForDiv(element) {
//     for (var i = 0; i < element.children.length; i++) {
//         if (element.childNodes[i]) {
            
//         }
//     }
// }