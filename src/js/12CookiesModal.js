document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('cookiesModal');
  const acceptBtn = modal.querySelector('.modal-button:nth-child(1)');
  const declineBtn = modal.querySelector('.modal-button:nth-child(2)');

  const cookiesAccepted = localStorage.getItem('cookiesAccepted');
  console.log(cookiesAccepted);
  if (!cookiesAccepted == 'accepted' || !cookiesAccepted) {
    modal.style.display = 'block';
  } else {
    modal.style.display = 'none';
  }

  const handleChoice = choice => {
    localStorage.setItem('cookiesAccepted', choice);
    modal.style.display = 'none';
  };

  acceptBtn.addEventListener('click', () => handleChoice('accepted'));
  declineBtn.addEventListener('click', () => handleChoice('declined'));
});
