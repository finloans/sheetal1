document.getElementById('borrower-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    // Send form data to Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbzbysWokbpH86d9HwJu3i9WJpc_2HRKuygHwehJz-dso2HlWWu98mqgaH2j9u8vSoY6/exec', {
        method: 'POST',
        body: new URLSearchParams(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            document.getElementById('thank-you-message').style.display = 'block';
            document.getElementById('password-section').style.display = 'block';
            document.getElementById('borrower-form').reset();
        } else {
            alert('Submission failed. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the application. Please try again.');
    });
});

// Handle password check for restricted PDFs
document.getElementById('check-password').addEventListener('click', function () {
    const password = document.getElementById('password').value;
    if (password === 'sheetal') {
        document.getElementById('restricted-content').style.display = 'block';
        alert('Password correct! You can now view the restricted documents.');
    } else {
        alert('Incorrect password. Please check your email for the correct password.');
    }
});
