const textElement = document.getElementById('text');
const promptElement = document.getElementById('prompt');
const text = 'Hello World.';
const editableElement = document.getElementById('editable');


// function typeWriter(element, text, i, fnCallback) {

//     if (index < text.length) {
//         element.textContent = text.substring(0, index + 1);
//         setTimeout(() => typeWriter(element, text, index + 1, callback), 100);
//     } else if (typeof callback === 'function') {
//         setTimeout(callback, 500); // Short pause at the end
//     }

//     // if (i < (text.length)) {
//     //     textElement.innerHTML = text.substring(0, i + 1) + '<strong aria-hidden="true"></strong>';

//     // //     // wait for a while and call this function again for next character
//     //     setTimeout(function () {
//     //         typeWriter(text, i + 1, fnCallback)
//     //     }, 100);
//     // // }
//     // else if (typeof fnCallback == 'function') {
//     //     // call callback after timeout
//     //     setTimeout(fnCallback, 700);
//     // }
// }


// typeWriter(textElement, textElement.textContent, 0, () => {
//     // When "Hello World." is finished, start the prompt "Type your stuff here:"
//     editableElement.style.display = 'block'; // Make the editable element visible
//     editableElement.textContent = ''; // Clear the editable element
    
//     // Set up the editable element
//     editableElement.addEventListener('click', function () {
//         if (editableElement.textContent === 'Type your stuff here...') {
//             editableElement.textContent = '';
//         }
//     });

//     editableElement.addEventListener('blur', function () {
//         if (editableElement.textContent.trim() === '') {
//             editableElement.textContent = 'Type your stuff here...';
//         }
//     });

//     // Focus the editable element so the user can start typing
//     editableElement.focus();
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


// // start the text animation
// typeWriter(text, 0, function () {
//     // after callback (and whole text has been animated), start next text
// });


document.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.getElementById('text');
    const promptElement = document.getElementById('prompt');
    const editableElement = document.getElementById('editable');

    // Typing effect for the heading
    function typeWriter(element, text, index, callback) {
        if (index < text.length) {
            element.textContent = text.substring(0, index + 1);
            setTimeout(() => typeWriter(element, text, index + 1, callback), 100);
        } else if (typeof callback === 'function') {
            setTimeout(callback, 500); // Short pause at the end
        }
    }

    // Start typing "Hello World."
    typeWriter(textElement, textElement.textContent, 0, () => {
        // When "Hello World." is finished, start the prompt "Type your stuff here:"
        editableElement.style.display = 'block'; // Make the editable element visible
        editableElement.textContent = ''; // Clear the editable element
        
        // Set up the editable element
        editableElement.addEventListener('click', function () {
            if (editableElement.textContent === 'Type your stuff here...') {
                editableElement.textContent = '';
            }
        });

        editableElement.addEventListener('blur', function () {
            if (editableElement.textContent.trim() === '') {
                editableElement.textContent = 'Type your stuff here...';
            }
        });

        // Focus the editable element so the user can start typing
        editableElement.focus();
    });
});
