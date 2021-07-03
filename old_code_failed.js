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