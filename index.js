// Write your code here!
const mainNode = document.getElementById('main');
mainNode.remove();


const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');

newHeader.innerHTML = 'YOUR-NAME is the champion';