const parent = document.createElement('div')
parent.setAttribute('style', 'background-color: lightblue; width: 500px; height: 500px; margin: auto; display: flex;flex-direction: row;flex-wrap: wrap;justify-content: flex-start;align-items: stretch;align-content: center;');    

let tableside 

const inputDaddy = document.createElement('div')
  inputDaddy.setAttribute('style', 'background-color: green; width: 300px; height: 100px; margin: auto; display: flex;flex-direction: row;flex-wrap: wrap;justify-content: flex-start;align-items: stretch;align-content: center;');    

document.body.appendChild(inputDaddy)

var btnDelete = document.createElement("button");
  btnDelete.setAttribute('style', 'width: 100px; height: 30px;  margin: auto;');    
  btnDelete.setAttribute('content', 'clear');
  btnDelete.innerHTML = 'Clean & Set'
  btnDelete.onclick = function deleteDivs() {
    parent.innerHTML = '';
    tableside = prompt("how big is you pp", "69");
    for (i = 1; i <= tableside ** 2; i++){
      createBlock(tableside)
    }
  }

inputDaddy.appendChild(btnDelete)



let block 
let divsize

  function createBlock(tableside){
    block = document.createElement('div')
    block.classList.add("divblock");


    divsize = 500 / tableside
    style(block, 'red',divsize)


    block.addEventListener('mouseenter', e => {
      style(block,"grey",divsize)
    });

    block.addEventListener('mouseleave', e => {
      style(block, 'red', divsize)
    });

    parent.appendChild(block)

    
    function style(block, color, divsize) {
      block.setAttribute('style', `background: ${color};`)
      block.style.width = divsize.toString() + 'px'
      block.style.height = divsize.toString() + 'px'
    }
  }

  

document.body.appendChild(parent)












