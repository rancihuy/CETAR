function openPortfolio(mentorId) {
    const modal = document.getElementById('portfolioModal');
    const mentor1 = document.getElementById('mentor1Portfolio');
    const mentor2 = document.getElementById('mentor2Portfolio');

    // Hide both first
    mentor1.style.display = 'none';
    mentor2.style.display = 'none';

    // Show selected mentor
    if (mentorId === 1) {
        mentor1.style.display = 'block';
    } else if (mentorId === 2) {
        mentor2.style.display = 'block';
    }

    // Show modal with animation
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePortfolio() {
    const modal = document.getElementById('portfolioModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('portfolioModal');
    if (event.target === modal) {
        closePortfolio();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePortfolio();
    }
});
