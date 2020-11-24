const parent = document.createElement('div')
parent.setAttribute('style', 'background-color: lightblue; width: 500px; height: 500px; margin: auto; display: flex;flex-direction: row;flex-wrap: wrap;justify-content: flex-start;align-items: stretch;align-content: center;');    

const inputDaddy = document.createElement('div')
inputDaddy.setAttribute('style', 'background-color: green; width: 300px; height: 100px; margin: auto; display: flex;flex-direction: row;flex-wrap: wrap;justify-content: flex-start;align-items: stretch;align-content: center;');    

document.body.appendChild(inputDaddy)

let btnDelete = document.createElement("button");
  btnDelete.setAttribute('style', 'width: 100px; height: 30px;  margin: auto;');    
  btnDelete.setAttribute('content', 'clear');
  btnDelete.innerHTML = 'Clean & Set'
  btnDelete.onclick = function deleteDivs() {
    parent.innerHTML = '';
    let tableside = prompt("how big is you pp", "69");
    for (i = 1; i <= tableside ** 2; i++){
      createBlock(tableside)
    }
  }

inputDaddy.appendChild(btnDelete)

function createBlock(tableside){
  let block = document.createElement('div')
  block.classList.add("divblock");

  let divsize = 500 / tableside

  block.setAttribute('style', `background: red; width: ${divsize.toString() + 'px'}; height: ${divsize.toString() + 'px'};`)
  block.addEventListener('mouseenter', e => {
    block.style.background = `gray`
    }
  )  

  parent.appendChild(block)

}

document.body.appendChild(parent)