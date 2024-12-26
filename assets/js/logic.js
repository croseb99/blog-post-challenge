// logic for buttons
document.getElementById('mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.bosy.classList.contains('dark-mode')) {
        this.textContent = 'Light Mode';
    } else {
        this.textContent = 'Dark Mode';
    }

    this.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
});

document.getElementById('back-btn').addEventListener('click', function () {
    window.location.href = 'index.html';
});