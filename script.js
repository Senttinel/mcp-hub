function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById(screenId).style.display = 'block';
    
    if(screenId === 'stamp-counter') {
        const d = new Date();
        document.getElementById('current-date').innerText = "Zählung vom: " + d.toLocaleDateString() + " " + d.toLocaleTimeString();
    }
}

function calculate() {
    // Werte holen
    const t095 = parseFloat(document.getElementById('t095').value) || 0;
    const k095 = parseFloat(document.getElementById('k095').value) || 0;
    const t110 = parseFloat(document.getElementById('t110').value) || 0;
    const k110 = parseFloat(document.getElementById('k110').value) || 0;
    const t180 = parseFloat(document.getElementById('t180').value) || 0;
    const k180 = parseFloat(document.getElementById('k180').value) || 0;

    // Berechnung (Packs * 10 Stück * Preis)
    const sum095 = (t095 + k095) * 10 * 0.95;
    const sum110 = (t110 + k110) * 10 * 1.10;
    const sum180 = (t180 + k180) * 10 * 1.80;

    const total = sum095 + sum110 + sum180;

    document.getElementById('grand-total').innerText = total.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
}

function downloadImage() {
    const area = document.getElementById('capture-area');
    html2canvas(area, {
        backgroundColor: "#FFFFFF",
        scale: 2 // Bessere Qualität für das iPhone Display
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `McPaper_Briefmarken_${new Date().toLocaleDateString()}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}