
colors = ['#dbe2ef','#ffc6c7','#f6e5f5','#b9cced','#ffb6b9','#bbded6','#d3f4ff'];

const container = document.querySelector('#boxes');


for (let color of colors){
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click', (e) =>{
        const h1 = document.querySelector("h1");
        h1.style.color = color;
    })

}