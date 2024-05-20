function setup() {
    console.log("Setup function called"); // Legg til denne linjen

    const canvas = document.getElementById('merker');
    const ctx = canvas.getContext('2d');
    
    // Justerte verdier for prikkene
    const places = [
        {name: "Halden", x: 346.0078125, y: 523.65625, image: "halden.jpg"},
        {name: "Fredrikstad", x: 161.0078125, y: 444.65625, image: "Fredrik.jpg"}
    ];
    const scale = window.devicePixelRatio; // For å justere for pikseltetthet
    canvas.width = 599 * scale;
    canvas.height = 735 * scale;
    canvas.style.width = '599px';
    canvas.style.height = '735px';
    ctx.scale(scale, scale);

    places.forEach(place => {
        // Tegn røde prikker for å indikere steder
        ctx.beginPath();
        ctx.arc(place.x, place.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    });

    canvas.addEventListener('click', (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        console.log(`Klikkkoordinater: x=${x}, y=${y}`);
        
        /*/ Tegn klikkkoordinatene midlertidig på kartet for visuell hjelp
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath(); */
        
        places.forEach(place => {
            const distance = Math.sqrt((x - place.x) ** 2 + (y - place.y) ** 2);
            console.log(`Avstand til ${place.name}: ${distance}`);
            if (distance < 10) {
                console.log(`Åpner bilde for ${place.name}`);
                openImage(place.image);
            }
        });
    });
}

function openImage(imageFile) {
    const imageWindow = window.open('', '_blank', 'width=800,height=600');
    imageWindow.document.write(`
        <img src="${imageFile}" alt="Bilde av stedet" style="width:100%; height:100%;">
    `);
}

window.onload = setup;


// http://localhost:8080/index.html
