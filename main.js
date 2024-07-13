document.addEventListener('DOMContentLoaded', () => {
  const errorModal = document.getElementById('modal');
  errorModal.classList.add('hidden');

  const hearts = document.querySelectorAll('.like-glyph');

  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          if (heart.innerText === '♡') {
            heart.innerText = '♥';
            heart.classList.add('activated-heart');
          } else {
            heart.innerText = '♡';
            heart.classList.remove('activated-heart');
          }
        })
        .catch((error) => {
          const errorMessage = document.getElementById('modal-message');
          errorMessage.innerText = error;
          errorModal.classList.remove('hidden');
          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}