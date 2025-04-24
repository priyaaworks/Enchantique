



document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('successMsg');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (name && email && message) {
        successMsg.innerText = `Thank you, ${name}! Your message has been sent successfully. 💌`;
        successMsg.style.display = 'block';
        form.reset();
  
        setTimeout(() => {
          successMsg.style.display = 'none';
        }, 4000);
      } else {
        successMsg.style.display = 'none';
        alert('Please fill in all fields!');
      }
    });
  });

  const backBtn = document.querySelector('.back-to-home a');

  backBtn.addEventListener('click', function (e) {
    const confirmLeave = confirm("Are you sure you want to go back to the Home page?");
    if (!confirmLeave) {
      e.preventDefault(); // stops redirection
    }
  });
  