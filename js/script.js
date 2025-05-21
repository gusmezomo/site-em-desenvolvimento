document.getElementById('copy-btn').addEventListener('click', function() {
  const email = document.getElementById('email-text').textContent;

  navigator.clipboard.writeText(email).then(() => {
    const msg = document.getElementById('copy-msg');
    msg.style.display = 'block';
    setTimeout(() => msg.style.display = 'none', 2000);
  });
});
