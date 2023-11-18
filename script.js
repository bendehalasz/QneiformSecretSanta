


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

var participants =  [
    {'Name': 'Xavier Cameron-Higgs', 'Email': 'xavier.cameron-higgs@qneiform.com', 'Password': 'nutcracker14'},
    {'Name': 'Kamilla Biró', 'Email': 'kamilla.biro@qneiform.com', 'Password': 'snowflake12'},
    {'Name': 'Eszter Lőrincz', 'Email': 'eszter.lorincz@qneiform.com', 'Password': 'snowflake48'},
    {'Name': 'Betti Szmutku', 'Email': 'bernadett.szmutku@qneiform.com', 'Password': 'snowflake24'},
    {'Name': 'Kristina Stavri', 'Email': 'kristina.stavri@qneiform.com', 'Password': 'star35'},
    {'Name': 'Anna Pálmai', 'Email': 'anna.palmai@qneiform.com', 'Password': 'garland66'},
    {'Name': 'Federica Piezzo', 'Email': 'federica.piezzo@qneiform.com', 'Password': 'fireplace72'},
    {'Name': 'Gergely Füstös', 'Email': 'gergely.fustos@qneiform.com', 'Password': 'star53'},
    {'Name': 'Anna Ferenczy', 'Email': 'anna.ferenczy@qneiform.com', 'Password': 'gingerbread61'},
    {'Name': 'Nándor Tóth', 'Email': 'nandor.toth@qneiform.com', 'Password': 'candle61'},
    {'Name': 'Nóra Kovács', 'Email': 'nora.kovacs@qneiform.com', 'Password': 'nutcracker40'},
    {'Name': 'Thomas Percy', 'Email': 'thomas.percy@qneiform.com', 'Password': 'wreath84'},
    {'Name': 'Bence Bíró', 'Email': 'bence.biro@qneiform.com', 'Password': 'wreath10'},
    {'Name': 'Bende Halasz', 'Email': 'bende.halasz@qneiform.com', 'Password': 'present75'},
  ]

var shuffled_names =  ['Kristina Stavri', 'Anna Pálmai', 'Nóra Kovács', 'Federica Piezzo', 'Gergely Füstös', 'Bende Halasz', 'Nándor Tóth', 'Eszter Lőrincz', 'Thomas Percy', 'Xavier Cameron-Higgs', 'Betti Szmutku', 'Kamilla Biró', 'Bence Bíró', 'Anna Ferenczy']

