
// Add an event listener to the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // Get the form and status elements from the DOM
    const form = document.getElementById('contactForm');
    const status = document.getElementById('status');

    // Add an event listener to the form's submit event
    form.addEventListener('submit', async (e) => {
        // Prevent the default form submission
        e.preventDefault();
        // Create an object to store the form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        try {
            // Define the URL to send the data to
            const url = "https://66e47609d2405277ed145ffe.mockapi.io/datacollector/collectionofdata";
            // Send the data to the server using a POST request
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            // Check if the response is ok
            if (!response.ok) {
                // Throw an error if the response is not ok
                throw new Error('Failed to send message. Please try again.');
            }

            // Parse the response as JSON
            const result = await response.json();
            // Update the status element with a success message
            status.textContent = 'Message sent successfully!';
            // Reset the form
            form.reset();
        } catch (error) {
            // Update the status element with an error message
            status.textContent = `Error: ${error.message}`;
            // Change the color of the status element to red
            status.style.color = 'red';
        }
    });
});



