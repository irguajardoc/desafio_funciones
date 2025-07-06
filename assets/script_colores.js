document.querySelectorAll('.caja').forEach(div => {
    div.addEventListener('click', function() {
        this.style.backgroundColor = 'black';
    });
});


document.addEventListener('keydown', (event) => {
    const keyDiv = document.getElementById('key');
    
    if (event.key === 'a') {
        keyDiv.style.backgroundColor = 'pink';
    } else if (event.key === 's') {
        keyDiv.style.backgroundColor = 'orange';
    } else if (event.key === 'd') {
        keyDiv.style.backgroundColor = 'lightblue';
    }
    
    else if (event.key === 'q' || event.key === 'w' || event.key === 'e') {
        const newDiv = document.createElement('div');
        newDiv.className = 'caja';
        
        if (event.key === 'q') newDiv.style.backgroundColor = 'purple';
        if (event.key === 'w') newDiv.style.backgroundColor = 'gray';
        if (event.key === 'e') newDiv.style.backgroundColor = 'brown';
        
        document.body.appendChild(newDiv);
    }
});