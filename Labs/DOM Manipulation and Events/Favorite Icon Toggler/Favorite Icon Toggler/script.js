document.addEventListener("DOMContentLoaded", () => {
    const favoriteButtons = document.querySelectorAll('.favorite-icon');

    favoriteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            clickedButton.classList.toggle('filled');

            if (clickedButton.classList.contains('filled')) {
                clickedButton.innerHTML = '&#10084;';
            } else {
                clickedButton.innerHTML = '&#9825;';
            }
        });
    });
});