const container = document.querySelector('.container');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.addEventListener('click', () => {
    container.classList.add('active');
});

loginLink.addEventListener('click', () => {
    container.classList.remove('active');
});

// Check URL parameters for direct signup access
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('action') === 'signup') {
    container.classList.add('active');
}