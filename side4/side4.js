document.getElementById('copyButton').addEventListener('click', function() {
    // Velg teksten i div-en
    const textElement = document.getElementById('copyText');
    const range = document.createRange();
    range.selectNode(textElement);
    window.getSelection().removeAllRanges(); // Fjern eksisterende utvalg
    window.getSelection().addRange(range); // Velg teksten i div-en

    try {
        // Kopiere den valgte teksten til utklipp
        const successful = document.execCommand('copy');
        const msg = successful ? 'Teksten ble kopiert!' : 'Kunne ikke kopiere teksten.';
        document.getElementById('message').textContent = msg;
    } catch (err) {
        console.error('Feil ved kopiering:', err);
    }

    // Fjern utvalget
    window.getSelection().removeAllRanges();
});