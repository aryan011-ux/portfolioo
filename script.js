// Smooth Scrolling Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target section
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll smoothly to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation for empty fields
    if (name === '' || email === '' || message === '') {
        alert('All fields are required!');
        e.preventDefault(); // Prevent form submission
        return;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address!');
        e.preventDefault(); // Prevent form submission
        return;
    }

    alert('Form submitted successfully!');
});
