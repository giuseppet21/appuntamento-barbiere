document.addEventListener("DOMContentLoaded", function() {
    const bookingForm = document.getElementById("bookingForm");

    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita il comportamento predefinito di submit del form

        // Recupera i valori dai campi del form
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        // Esempio: stampa i valori a console
        console.log("Nome:", name);
        console.log("Email:", email);
        console.log("Telefono:", phone);
        console.log("Data:", date);
        console.log("Ora:", time);

        // Esempio: mostra un messaggio di conferma
        const confirmationMessage = `Grazie ${name}! La tua prenotazione per il ${date} alle ${time} è stata confermata.`;
        alert(confirmationMessage);

        // Puoi aggiungere qui il codice per inviare i dati a un server tramite AJAX o fetch
        // inviaDati(name, email, phone, date, time);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookingForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita il comportamento predefinito del form
        alert('Prenotazione inviata con successo!');
    });

    // Aggiungi animazioni agli elementi della pagina
    const services = document.querySelectorAll('.servizio');
    services.forEach(service => {
        service.addEventListener('mouseover', () => {
            service.style.transform = 'scale(1.05)';
            service.style.transition = 'transform 0.3s';
        });
        service.addEventListener('mouseout', () => {
            service.style.transform = 'scale(1)';
        });
    });

    // Aggiungi animazione ai link dei social
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'rotate(10deg)';
            icon.style.transition = 'transform 0.3s';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'rotate(0deg)';
        });
    });
});
