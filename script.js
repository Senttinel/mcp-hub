function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById(screenId).style.display = 'block';
    
    if(screenId === 'stamp-counter') {
        const d = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        document.getElementById('current-date').innerText = d.toLocaleDateString('de-DE', options);
    }
}

function calculate() {
    // 0,95 Steinbock
    const t095s = parseFloat(document.getElementById('t095s').value) || 0;
    const k095s = parseFloat(document.getElementById('k095s').value) || 0;
    
    // 0,95 Ballon
    const t095b = parseFloat(document.getElementById('t095b').value) || 0;
    const k095b = parseFloat(document.getElementById('k095b').value) || 0;

    // 1,10 und 1,80
    const t110 = parseFloat(document.getElementById('t110').value) || 0;
    const k110 = parseFloat(document.getElementById('k110').value) || 0;
    const t180 = parseFloat(document.getElementById('t180').value) || 0;
    const k180 = parseFloat(document.getElementById('k180').value) || 0;

    // Berechnung (Packs * 10 Stück * Preis)
    const sum095s = (t095s + k095s) * 10 * 0.95;
    const sum095b = (t095b + k095b) * 10 * 0.95;
    const sum110 = (t110 + k110) * 10 * 1.10;
    const sum180 = (t180 + k180) * 10 * 1.80;

    const total = sum095s + sum095b + sum110 + sum180;

    document.getElementById('grand-total').innerText = total.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
}

function downloadImage() {
    const area = document.getElementById('capture-area');
    
    // Kleiner Fix für iOS Safari: Erst nach oben scrollen für sauberen Screenshot
    window.scrollTo(0,0);

    html2canvas(area, {
        backgroundColor: "#FFFFFF",
        scale: 3, // Extra scharf für das iPhone 12 Display
        logging: false
    }).then(canvas => {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.download = `Briefmarken_Check_${new Date().toLocaleDateString()}.png`;
        link.href = image;
        link.click();
    });
}