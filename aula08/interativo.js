function diminuirLargura() {
    let container = document.getElementById('flex-container');
    let width = container.offsetWidth - 100;
    container.style.width = width + "px";
}

function aumentarLargura() {
    let container = document.getElementById('flex-container');
    let width = container.offsetWidth + 100;
    container.style.width = width + "px";
}

function diminuirAltura() {
    let container = document.getElementById('flex-container');
    let height = container.offsetHeight - 100;
    container.style.height = height + "px";
}

function aumentarAltura() {
    let container = document.getElementById('flex-container');
    let height = container.offsetHeight + 100;
    container.style.height = height + "px";
}

function atualizarAlignContent() {
    let dropdown = document.getElementById("align-content");
    let container = document.getElementById('flex-container');
    container.style.alignContent = dropdown.value;
}

function atualizarAlignItems() {
    let dropdown = document.getElementById('align-items');
    let container = document.getElementById('flex-container');
    container.style.alignItems = dropdown.value;
}

function inserirElemento() {
    let container = document.getElementById("flex-container");
    let number = parseInt(container.lastElementChild.innerHTML);
    let newDiv = document.createElement('div');
    newDiv.innerHTML = String(number + 1);
    container.appendChild(newDiv)
}

function removerElemento() {
    let container = document.getElementById("flex-container");
    let target = container.lastElementChild;
    container.removeChild(target);
}
