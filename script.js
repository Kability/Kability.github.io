document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();
  
    if (name && email && message) {
      const confirmation = document.createElement('div');
      confirmation.className = 'confirmation-message';
      confirmation.innerText = `Thanks ${name}, your message has been sent!`;
      this.appendChild(confirmation);
      setTimeout(() => confirmation.remove(), 5000);
      this.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
  