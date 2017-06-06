function greet(greeting) {
    console.log(greeting);
    $('#dat').text(greeting);
}

function getRandom(arr) {
    var rand = Math.random();
    return arr[Math.floor(rand * arr.length)];
}

var greetings = [
    "Error1",
    "Error2",
    "Error3",
    "Error4"
];

/*---------------------------*/


$(document).ready(function() {
    ion.sound({
        sounds: [

            { name: "glass" }
        ],

        path: "ring/",
        preload: false,
        volume: 10.0
    });
    setInterval(function() {
        ion.sound.play("glass");
        greet(getRandom(greetings));
        $(".alert").fadeIn("fast").fadeOut(5000, function() {
            $('#try').append('<li class="list-group-item">' + $('#dat').html() + '</li>');
        });
    }, 10000);

});