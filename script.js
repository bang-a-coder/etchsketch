const parent = document.createElement('div')
parent.classList.add('parent')    


const inputDaddy = document.createElement('div')
  inputDaddy.classList.add('input_daddy')
document.body.appendChild(inputDaddy)

document.body.style.backgroundColor = "#f7f7f7";

let btnDelete = document.createElement("button");
  btnDelete.classList.add('button_main')
  btnDelete.setAttribute('content', 'clear');
  btnDelete.innerHTML = 'Clean'
  btnDelete.addEventListener('mouseenter', e => { // Hover Property
    btnDelete.style.background = `linear-gradient(145deg, #dedede, #ffffff)`
    }
  )

  btnDelete.addEventListener('mouseleave', e => { // Hover Property
    btnDelete.style.background = `transparent  `
    }
  )
  btnDelete.onclick = function deleteDivs() {
    parent.innerHTML = '';
  }

inputDaddy.appendChild(btnDelete)

let numInput = document.createElement("INPUT");
numInput.setAttribute("type", "number");
numInput.classList.add('num_input')
inputDaddy.appendChild(numInput)

let btnSet = document.createElement("button")
  btnSet.classList.add('button_main') 
  btnSet.innerHTML = 'Create'
  btnSet.addEventListener('mouseenter', e => { // Hover Property
    btnSet.style.background = `linear-gradient(145deg, #dedede, #ffffff)`
    }
  )
  btnSet.addEventListener('mouseleave', e => { // Hover Property
    btnSet.style.background = `transparent  `
    }
  )

  btnSet.addEventListener("click",  () => { clearAndSave(numInput.value) })

inputDaddy.appendChild(btnSet)

window.addEventListener('keydown', (key) => { 
  console.log(key.key)
  if (key.key === 'Enter' ) {
    
    clearAndSave(numInput.value)
  }
});

function clearAndSave(ts) {
  console.log(ts)
  parent.innerHTML = '';
  for (i = 1; i <= ts ** 2; i++){
    createBlock(ts)
  }
}

let color = 'gray'

let colors = document.getElementsByClassName("color_option");


for(i = 0; i < colors.length;i++) {
  colors[i].addEventListener('click', function(){
    color = this.id
    console.log(e,this.id)
  });
}

function returnId(clicked_id) {
  alert(clicked_id)
}

function createBlock(ts){ // Main Funtion that creates each div "pixel"
  let block = document.createElement('div')
  block.classList.add("divblock");

  let divsize = 500 / ts

  block.setAttribute('style', `width: ${divsize.toString() + 'px'}; height: ${divsize.toString() + 'px'};`)
  block.addEventListener('mouseenter', e => { // Hover Property
    block.style.background = color
    }
  )  

  parent.appendChild(block)

}

document.body.appendChild(parent) 


