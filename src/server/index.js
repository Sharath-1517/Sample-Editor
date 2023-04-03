// SAMPLE JSON INPUT STRUCTURE ====================================================================

const json = {
  "content": [
    {
      "type": "heading",
      "level": 1,
      "text": "Heading 1"
    },
    {
      "type": "paragraph",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet pretium mauris. Nunc vel urna id turpis sodales ultrices. Praesent ullamcorper metus at semper lobortis. Proin id est vel nisl interdum aliquet vel vel libero."
    },
    {
      "type": "heading",
      "level": 2,
      "text": "Heading 2"
    },
    {
      "type": "paragraph",
      "text": "Mauris in justo in purus venenatis viverra. Fusce convallis sagittis sem, quis facilisis magna iaculis vel. Donec auctor euismod dui eu tristique. Sed vehicula tincidunt justo, ac imperdiet dolor congue at."
    },
    {
      "type": "heading",
      "level": 3,
      "text": "Heading 3"
    },
    {
      "type": "paragraph",
      "text": "Phasellus varius odio sit <strong>amet ante</strong> tempus, eget pharetra enim faucibus. Donec sit amet eros in nisi ullamcorper congue vitae a augue. Morbi viverra volutpat massa quis facilisis."
    },
    {
      "type": "ul",
      "text" : [ 
        {"list": "Hello I love to code."},
        {"list": "My name is XWiki contributor."},
      ]
    },
    {
      "type": "heading",
      "level": 2,
      "text": "Heading 2"
    }
  ]
}


  
  

// ====================================================================================================================

// JSON TO HTML CONVERTER =============================================================================================

function jsonToHtml(json) {

  let html = "";
  console.log(json.content.length);
  for (let index = 0; index < json.content.length; index++) {
    const item = json.content[index];
    const itemType = item.type;
    if (itemType === "heading") {
      html += `<h${item.level}>${item.text}</h${item.level}>\n`;
    } else if (itemType === "paragraph") {
      html += `<p>${item.text}</p>\n`;
    } else if (itemType === "ul" || itemType === "ol") {
        html += `<${itemType}>\n`
        item.text.map((itemList) => {
          html += `<li>${itemList.list}</li>\n`;
        });
        html += `</${itemType}>\n`
    }
  }
  return html;
}


  
  const html = jsonToHtml(json); // HTML value converted
  console.log(html);

// =================================================================================================================

// HTML to XWIKI Syntax Generator ==================================================================================

const jsdom = require("jsdom");
const { JSDOM } = jsdom;


function convertToXWiki(json) {
  let xwiki = '';
  for (let i = 0; i < json.content.length; i++) {
    const node = json.content[i];
    switch(node.type) {
      case 'heading':
        xwiki += '='.repeat(node.level) + ' ' + node.text + ' =' + '='.repeat(node.level) + '\n';
        break;
      case 'paragraph':
        xwiki += node.text.replace(/(<(strong|b|i|em|u)>|<\/(strong|b|i|em|u)>)/g, "''$2") + '\n';
        break;
      case 'ul':
        for(let j = 0; j < node.text.length; j++) {
          xwiki += '* ' + node.text[j].list.replace(/(<(strong|b|i|em|u)>|<\/(strong|b|i|em|u)>)/g, "''$2") + '\n';
        }
        break;
    }
  }
  
  return xwiki;
}

const xwiki = convertToXWiki(json);
console.log(xwiki);


  

// console.log(htmlToXWiki(html));