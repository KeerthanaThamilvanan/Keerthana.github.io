document.addEventListener('DOMContentLoaded', function () {
    // Get sections and navigation links
    const sections = {
        home: document.getElementById('home'),
        resume: document.getElementById('resume'),
        contact: document.getElementById('contact'),
    };

    const links = {
        home: document.getElementById('home-link'),
        resume: document.getElementById('resume-link'),
        contact: document.getElementById('contact-link'),
    };

    // Function to hide all sections
    function hideAllSections() {
        Object.values(sections).forEach(section => {
            section.style.display = 'none';
        });
    }

    // Function to handle navigation
    function handleNavigation(event, sectionKey) {
        event.preventDefault();
        hideAllSections();
        sections[sectionKey].style.display = 'block';
    }

    // Attach click event listeners to navigation links
    Object.entries(links).forEach(([key, link]) => {
        link.addEventListener('click', event => handleNavigation(event, key));
    });

    // Show the home section by default
    hideAllSections();
    sections.home.style.display = 'block';

    // Form submission with EmailJS
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        emailjs.send('service_id', 'template_id', {
            from_name: name,
            from_email: email,
            message: message,
        }).then(() => {
            alert('Message sent successfully!');
            contactForm.reset();
        }).catch(error => {
            console.error('EmailJS Error:', error);
            alert('Failed to send message. Please try again later.');
        });
    });
});
