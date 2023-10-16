// get the user's message to reverse
function getValues() {

    // get the text input from the page
    let message = document.getElementById('userInput').value;

    // validate the input: make sure the input is not empty
    if (message.length == 0) {
        Swal.fire ({
            icon: 'error',
            backdrop: false,
            title: 'Oops!',
            text: 'Please enter a message to reverse'
        });
    } else {
        // pass the input to reverseMessage() and assign its return value to a variable
        let revMsg = reverseMessage(message);

        // give the reverse message to displayessage()
        displayMessage(revMsg);
    }
}

// reverse the message
function reverseMessage(input) { // if input = hello

    let output = ''; // output = ['h', 'e', 'l', 'l', 'o']

    for (let i = input.length-1; i >= 0; i--) {

        output += input[i]
    }

    // turns ['o','l','l','e','h'] into ['olleh']
    return output;
}

// display the reverse message
function displayMessage(message) {

    document.getElementById('msg').textContent = `Your message reversed is: ${message}`;

    document.getElementById('alert').classList.remove('invisible');
}

