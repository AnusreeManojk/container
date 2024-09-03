const items = document.querySelectorAll('.item');
const containerOne = document.getElementById('container-one');
const containerTwo = document.getElementById('container-two');
const containerThree = document.getElementById('container-three');
const containers = [containerOne, containerTwo, containerThree];

let selectedContainer = null;

items.forEach(item => {
  item.addEventListener('click', () => {
    pushElements(item);
    item.style.display = "none";
  });
});

function pushElements(item) {
  const containerItem = document.createElement('div');
  containerItem.className = 'container-item';
  containerItem.innerHTML = `<div class="pushed-item"><span>${item.textContent}</span></div>`;
  containerOne.appendChild(containerItem);
  lastInsertedElement = containerItem;
}




containers.forEach(container => {
  container.addEventListener('click', (event) => {
    handleContainerClick(event.currentTarget);
  });
});

function handleContainerClick(container) {
  if (selectedContainer) {
    moveItem(selectedContainer, container);
    selectedContainer = null;
  } else {
    selectedContainer = container;
  }

  
}

function moveItem(fromContainer, toContainer) {
  const fromLayers = fromContainer.querySelectorAll('.container-item');
  if (fromLayers.length === 0) return;
  const topFromLayer = fromLayers[fromLayers.length - 1];
  toContainer.appendChild(topFromLayer);
}

function addElement(cont) {
  const lastEl = selectedContainer.lastElementChild;

  if (!lastEl || !lastEl.classList.contains('container-item')) return;

  const clickedItem = document.createElement('div');
  clickedItem.classList.add('pushed-element');
  clickedItem.style.backgroundColor = '#750404';
  clickedItem.textContent = lastEl.innerText;

  selectedContainer.removeChild(lastEl);
  cont.appendChild(clickedItem);
}









