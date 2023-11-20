
console.log("live version")

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
        document.getElementById("click_here").classList.add('hidden')
        document.getElementById("box-body").classList.add('box-body_hover')
    });

    //document.getElementById("box").addEventListener("click", () => toggleAnimation())
});

function toggleAnimation() {
    const boxBody = document.querySelector('.box-body');
    boxBody.classList.toggle('clicked');
}

function checkCredentials() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    var index = names.indexOf(name);

    if (index !== -1)
    {
        console.log(index)
        if (password === passwords[(index-3)%passwords.length]) {

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

var names = ['Xavier Cameron-Higgs', 'Kamilla Biró', 'Eszter Lőrincz', 'Betti Szmutku', 'Kristina Stavri', 'Anna Pálmai', 'Federica Piezzo', 'Gergely Füstös', 'Anna Ferenczy', 'Nándor Tóth', 'Nóra Kovács', 'Thomas Percy', 'Bence Bíró', 'Bende Halasz', ]
var passwords = ['gingerbread58', 'ornament15', 'bell30', 'garland76', 'fireplace23', 'nutcracker48', 'nutcracker37', 'garland83', 'nutcracker50', 'snowflake71', 'snowflake45', 'fireplace15', 'star95', 'ribbon89', ]
var shuffled_names =  ['Thomas Percy', 'Xavier Cameron-Higgs', 'Kristina Stavri', 'Bence Bíró', 'Betti Szmutku', 'Anna Ferenczy', 'Nóra Kovács', 'Nándor Tóth', 'Eszter Lőrincz', 'Federica Piezzo', 'Bende Halasz', 'Kamilla Biró', 'Gergely Füstös', 'Anna Pálmai']

