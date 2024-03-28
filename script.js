const textElement = document.getElementById('text');
const text = 'Hello World.';

function typeWriter(text, i, fnCallback) {
  if (i < (text.length)) {
    textElement.innerHTML = text.substring(0, i+1) +'<strong aria-hidden="true"></strong>';

    // wait for a while and call this function again for next character
    setTimeout(function() {
      typeWriter(text, i + 1, fnCallback)
    }, 100);
  }
  else if (typeof fnCallback == 'function') {
    // call callback after timeout
    setTimeout(fnCallback, 700);
  }
}

// start the text animation
typeWriter(text, 0, function(){
  // after callback (and whole text has been animated), start next text
});
