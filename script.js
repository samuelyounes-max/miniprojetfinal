function go() {
    let div = document.getElementById('jeu');
    let msg = document.getElementById('msg');
    
    // On vide le jeu et le message précédent
    div.innerHTML = ''; 
    msg.innerText = ''; 

    // On crée 5 nombres et on trouve le max
    let tab = Array.from({length:5}, () => Math.floor(Math.random() * 100));
    let max = Math.max(...tab);

    tab.forEach(n => {
        let btn = document.createElement('button');
        btn.innerText = n;
        
        // Gagné / Perdu
        btn.onclick = () => {
            if (n === max) {
                msg.innerText = "Gagné !";
                msg.style.color = "green"; //  texte en vert
            } else {
                msg.innerText = "Perdu...";
                msg.style.color = "red";   //  texte en rouge
            }
        };
        
        div.appendChild(btn);
    });
}

// Lance le jeu 
go();