const myText = document.getElementById('myText');
myText.addEventListener('mouseover', () => {
    myText.style.fontSize = '20px';
});
myText.addEventListener('mouseout', () => {
    myText.style.fontSize = '16px';
});