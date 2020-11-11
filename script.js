const parent = document.createElement('div')
parent.setAttribute('style', 'background-color: lightblue; width: 1280px; height: 1280px; margin: auto; display: flex;flex-direction: row;flex-wrap: wrap;justify-content: flex-start;align-items: stretch;align-content: stretch;');    

function createBlock(){
  const block = document.createElement('div')

  block.setAttribute('style', 'width: 80px; height: 80px; background: red;')
  parent.appendChild(block)
}

for (i = 1; i <= 32; i++){
  createBlock()
}

document.body.appendChild(parent)

