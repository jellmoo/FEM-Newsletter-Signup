document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('form');
    const emailInput = document.getElementById('emailInput');
    const errorMessage = document.getElementById('errorMessage');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const dismissButton = document.getElementById('dismissButton');

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const email = emailInput.value.trim();

            if (!isValidEmail(email)) {
                emailInput.classList.add('error');
                errorMessage.classList.add('error-visible');
            } else {
                document.querySelector('.newsletter').classList.add('hidden');
            
                if (confirmationMessage) {
                    confirmationMessage.innerHTML = confirmationMessage.innerHTML.replace(
                        'ash@loremcompany.com',
                        email
                    );
                }

                document.querySelector('.success').classList.remove('hidden');
            }
        });
    }

    if (dismissButton) {
        dismissButton.addEventListener('click', function() {
            emailInput.value = '';
            emailInput.classList.remove('error');
            errorMessage.classList.remove('error-visible');

            document.querySelector('.newsletter').classList.remove('hidden');
            
            document.querySelector('.success').classList.add('hidden');
        });
    }
});