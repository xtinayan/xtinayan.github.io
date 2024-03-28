const textElement = document.getElementById('text');
const text = 'Hello World.';

function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
        textElement.innerHTML = text.substring(0, i + 1) + '<strong aria-hidden="true"></strong>';

        // wait for a while and call this function again for next character
        setTimeout(function () {
            typeWriter(text, i + 1, fnCallback)
        }, 100);
    }
    else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
    }
}


// // Start typing "Hello World."
// typeWriter(document.getElementById('hello-world'), 'Hello World.', 0, function () {
//     // After "Hello World." is typed out, start typing "Type your stuff here:"
//     typeWriter(document.getElementById('prompt'), 'Type your stuff here:', 0, function () {
//         // After "Type your stuff here:" is typed, allow user interaction
//         const editableElement = document.getElementById('editable');
//         editableElement.focus();
//         editableElement.addEventListener('click', function () {
//             if (editableElement.textContent === 'Start typing...') {
//                 editableElement.textContent = '';
//             }
//         });

//         editableElement.addEventListener('blur', function () {
//             if (editableElement.textContent.trim() === '') {
//                 editableElement.textContent = 'Start typing...';
//             }
//         });
//     });
// });



// // User interaction
// textElement.addEventListener('click', function () {
//     if (textElement.textContent === originalText) {
//         // If the current text is "Hello World.", start deleting
//         deleting = true;
//         typeWriter(originalText, originalText.length, function () {
//             textElement.focus(); // Focus at the end to allow user input
//             deleting = false; // Reset for next round
//         });
//     }
// });


// start the text animation
typeWriter(text, 0, function () {
    // after callback (and whole text has been animated), start next text
});

