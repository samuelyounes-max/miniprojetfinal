function go() {
    let div = document.getElementById('jeu'), msg = document.getElementById('msg');
    div.innerHTML = msg.innerText = ''; // Reset
    let tab = Array.from({length:5}, () => Math.random()*100|0), max = Math.max(...tab);
    
    tab.forEach(n => {
        let btn = document.createElement('button');
        btn.innerText = n;
        btn.onclick = () => msg.inne
    });
}
go();