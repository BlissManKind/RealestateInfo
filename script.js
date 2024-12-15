function generatePDF() {
    const element = document.body.cloneNode(true);
    const button = element.querySelector('button');
    if (button) {
        button.remove();
    }

    const opt = {
        margin:       1,
        filename:     'document.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
}