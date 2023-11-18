


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

    var index = participants.findIndex(function(participant) {
        return (participant.hasOwnProperty('Name') && participant.Name === name) || (participant.hasOwnProperty('Email') && participant.Email === name)
    });

    if (index !== -1)
    {
        console.log(index)
        if (password === participants[index]['Password']) {

            // Hide the login form
            document.getElementById('container').style.display = 'none';
            document.getElementById('drawn_person_name').innerHTML = shuffled_names[(index+2)%shuffled_names.length]
            document.getElementById('drawn_person').classList.remove('hidden');
    
        }
        else
        {
            document.getElementById('result').innerHTML = 'Incorrect Password';
            document.getElementById('result').classList.remove('hidden');
            document.getElementById('name').style.borderColor = "#b31919";
            document.getElementById('password').style.borderColor = "#b31919";
        }

    }
    else {
        document.getElementById('result').innerHTML = 'Incorrect Name';
        document.getElementById('result').classList.remove('hidden');
        document.getElementById('name').style.borderColor = "#b31919";
        document.getElementById('password').style.borderColor = "#b31919";
    }

    
}



