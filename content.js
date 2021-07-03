String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

const map = {
    "‑" : "⠤",
    "“" : "⠐",
    "”" : "⠐",  
    "·" : "|",
    "\u00A0": " ", 
    "\t": "\t",
    "\n": "\n",
    ">" : ">",
    "<" : "<",
    "›": "›",
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


// function eachNode(rootNode, callback) {
// 	if (!callback) {
// 		const nodes = []
// 		eachNode(rootNode, function(node) {
// 			nodes.push(node)
// 		})
// 		return nodes
// 	}

// 	if (false === callback(rootNode)) {
// 		return false
//   }

// 	if (rootNode.hasChildNodes()) {
// 		const nodes = rootNode.childNodes
// 		for (let i = 0, l = nodes.length; i < l; ++i) {
// 			if (false === eachNode(nodes[i], callback)) {
// 				return
//             }
//         }
// 	}
// }

// eachNode(document.getRootNode(), function(node) {
//     if (node.nodeType == 3) {
//         if (!["(", "#", "@", ".", "h", "b"].includes(node.textContent[0])){
//             console.log(node);
//             console.log(node.textContent);
//             node.nodeValue = "a";
//         }
//     }
// });

// function recursiveChange(parent = document) {
//     var elementsInCurrLayer = parent.getElementsByTagName("*");
//     for (var i = 0; i < elementsInCurrLayer.length; i++) {
//         var element = elementsInCurrLayer[i];
//         for (var j = 0; j < element.childNodes.length; j++) {
//             var node = element.childNodes[j];
//             if (node.nodeType == 3) {
//                 console.log(node.nodeValue);
//             }
//         }
//     }
// }
// recursiveChange();


const text = document.querySelectorAll("h1, h2, h3, h4, p, li, td, caption, span, a, div");
for (var i = 0; i < text.length; i++) {
    if (text[i].nodeName == "DIV") {
        if (text[i].innerText.length != 0 && text[i].children.length == 0) {
            console.log(text[i]);
            console.log(text[i].innerText);
            // continue;
        } else {
            continue;
        }
    }
    var textToTranslate = text[i].innerText;
    var replacedText = "";
    for (var j = 0; j < textToTranslate.length; j++) {
        replacedText = replacedText.concat(map[textToTranslate[j]]);
    }
    text[i].innerText = replacedText;
}

// var elements = document.body.getElementsByTagName('*');
// for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];

//     for (var j = 0; j < element.childNodes.length; j++) {
//         var node = element.childNodes[j];

//         if (node.nodeType === 3) {
//             if (["SCRIPT", "STYLE", "NOSCRIPT", "TITLE", "BUTTON", "DIV", "FORM"].includes(element.tagName)) {
//                 continue;
//             // } else if (element.tagName == "DIV") {
//             //     console.log(element.children);
//             //     break;
//             }
//             var text = node.textContent;
            // var replacedText = "";
            // console.log("Info:");
            // console.log(element);
            // console.log(node);
            // console.log(text);
            // for (var i = 0; i < text.length; i++) {
            //     replacedText = replacedText.concat(map[text[i]]);
            // }       
            // if (replacedText !== text) {
            //     element.replaceChild(document.createTextNode(replacedText), node);
            // }
//         }
//     }
// }



// function dfsForDiv(element) {
//     for (var i = 0; i < element.children.length; i++) {
//         if (element.childNodes[i]) {
            
//         }
//     }
// }