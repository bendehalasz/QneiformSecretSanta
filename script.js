document.addEventListener("DOMContentLoaded", function() {
    const snowflakesContainer = document.querySelector(".snowflakes");

    // Function to create a new snowflake
    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.innerHTML = "❄"; // You can customize the snowflake symbol
        snowflake.style.fontSize = Math.random() * 20 + "vw";
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
        snowflakesContainer.appendChild(snowflake);

        // Remove the snowflake after animation completes
        snowflake.addEventListener("animationend", function() {
            snowflake.remove();
        });
    }

    // Generate snowflakes at regular intervals
    setInterval(createSnowflake, 100);
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("container").addEventListener("keyup", function(event) {
        // Check if the key pressed is Enter (key code 13)
        if (event.key === "Enter") {
            // Trigger the form submission function
            checkCredentials();
        }
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
