// Display a welcome alert when the page loads
window.onload = function() {
    alert("Hi from Mr.Bastakoti");
};

// Simple form validation for the contact form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("Please fill in all the fields.");
        return false;
    }

    alert("Thank you for your message, " + name + "!");
    return true;
}

// Gallery image pop-up
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    const modal = document.createElement('div');
    const modalImg = document.createElement('img');
    
    // Styling and setup for the modal
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';
    modal.style.cursor = 'pointer';

    modalImg.style.maxWidth = '90%';
    modalImg.style.maxHeight = '90%';
    modalImg.style.border = '5px solid #fff';
    modalImg.style.borderRadius = '10px';

    // Append the image to the modal and modal to the body
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    // Click event to open modal with selected image
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            modalImg.src = this.src;
            modal.style.display = 'flex';
        });
    });

    // Click event to close modal
    modal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});
