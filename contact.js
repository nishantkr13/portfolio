emailjs.init('sruymdE65xgX9u7U5');

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const serviceID = 'service_1dz8wqb'; 
    const templateID = 'template_4jpagnr';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); 
        }, (err) => {
            alert('Failed to send the message. Please try again.');
            console.error('Error:', err);
        });
});
