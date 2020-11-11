const parent = document.createElement('div')
parent.setAttribute('style', 'background-color: lightblue; width: 500px; height: 500px; margin: auto; display: flex;flex-direction: row;flex-wrap: wrap;justify-content: flex-start;align-items: stretch;align-content: center;');    



let tableside = 16

function createBlock(tableside){
  let block = document.createElement('div')
  
  parent.appendChild(block)

  let divsize = 500 / tableside
  style(block, 'red',divsize)


  block.addEventListener('mouseenter', e => {
    style(block,"grey",divsize)
  });

  block.addEventListener('mouseleave', e => {
    style(block, 'red', divsize)
  });
}

function style(block,color, divsize) {
  block.setAttribute('style', `background: ${color};`)
  block.style.width = divsize.toString() + 'px'
  block.style.height = divsize.toString() + 'px'
}

for (i = 1; i <= tableside ** 2; i++){
  createBlock(tableside)
}

document.body.appendChild(parent)

let dsfg = document.se



let inputDiv = document.