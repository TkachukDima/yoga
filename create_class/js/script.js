class Options {
  constructor(height = '150px', width = '200px', bg = 'red', fontSize = '25px', textAlign = 'center') {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }

  createDiv(text, cssText = false) {
    let div = document.createElement('div');
    div.textContent = text;
    div.style.height = this.height;
    div.style.width = this.width;
    div.style.backgroundColor = this.bg;
    div.style.fontSize = this.fontSize;
    div.style.textAlign = this.textAlign;
    if(cssText) div.style.cssText = cssText;
    console.log(cssText)
    return div;
  }
}
let bookStyles = "color: white; background: blue; height: 150px;  width: 200px;";

console.log(bookStyles);

let argText = 'Hello World!!!';
let blockDiv1 = new Options();
let div1 = blockDiv1.createDiv(argText, bookStyles);

document.body.appendChild(div1);

let blockDiv2 = new Options("50px","50px");
document.body.appendChild(blockDiv2.createDiv());