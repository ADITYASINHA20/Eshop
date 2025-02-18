document.getElementById('btn').addEventListener('click', () => {
    const container = document.querySelector('.container');

    // Trigger the animation
    container.style.opacity = 1;
    container.style.animation = 'slide-in 2s ease-in-out';

    // Optional: Disable the button after click to prevent multiple triggers
    document.getElementById('btn').disabled = true;
});
