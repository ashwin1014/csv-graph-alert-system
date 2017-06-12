var queue = new Array();

function greet(greeting) {
    console.log(greeting);
    $('#dat').text(greeting);
}

function getRandom(arr) {
    var rand = Math.random();
    return arr[Math.floor(rand * arr.length)];
}

var greetings = [
    "Defect 1",
    "Defect 2",
    "Defect 3",
    "Defect 4",
    "Defect 5",
    "Defect 6",
    "Defect 7"
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
        $(".alert").fadeIn("fast").fadeOut(5000, function addMessage(msg) {
            queue.push(msg);
            $('#try').prepend('<li class="list-group-item danger">' + $('#dat').html() + '</li>');

            if ($('.list-group-item').length > 9) {
                //var msgToRemove = queue.shift();
                //msgToRemove.remove();
                $('.list-group-item:last').remove();
            }
        });
    }, 6000);

});