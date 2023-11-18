document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("container").addEventListener("keyup", function(event) {
        // Check if the key pressed is Enter (key code 13)
        if (event.key === "Enter") {
            // Trigger the form submission function
            checkCredentials();
        }
    });

    document.getElementById("drawn_person").addEventListener("click", function(event) {
        // Check if the key pressed is Enter (key code 13)
        document.getElementById("box-body").classList.add('box-body_hover')
    });

    //document.getElementById("box").addEventListener("click", () => toggleAnimation())
});

function toggleAnimation() {
    console.log("click")
    const boxBody = document.querySelector('.box-body');
    boxBody.classList.toggle('clicked');
}

function checkCredentials() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    // Add your Secret Santa pairs logic here
    var secretSantaPairs = {
        "Alice": { "name": "Bob", "password": "randompassword1" },
        "Bob": { "name": "Alice", "password": "abc" },
        // Add more pairs as needed
    };

    if (secretSantaPairs.hasOwnProperty(name) && password === secretSantaPairs[name].password) {

        // Hide the login form
        document.getElementById('container').style.display = 'none';
        document.getElementById('drawn_person').classList.remove('hidden');

        // Display the participant's name
        var resultElement = document.getElementById('result');
        resultElement.innerHTML = 'Hello, ' + name + '!<br>You drew ' + secretSantaPairs[name].name + ' as your Secret Santa.';
        resultElement.classList.remove('hidden');
    } else {
        document.getElementById('result').innerHTML = 'Incorrect Name or Password';
        document.getElementById('result').classList.remove('hidden');
        document.getElementById('name').style.borderColor = "#b31919";
        document.getElementById('password').style.borderColor = "#b31919";
    }
}
