function greet(greeting) {
    console.log(greeting);
    $('#dat').text(greeting);
}

function getRandom(arr) {
    var rand = Math.random();
    return arr[Math.floor(rand * arr.length)];
}

var greetings = [
    "Error 1",
    "Error 2",
    "Error 3",
    "Error 4",
    "Error 5",
    "Error 6",
    "Error 7"
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



d3.text("data.csv", function(data) {
    var parsedCSV = d3.csv.parseRows(data);

    var container = d3.select("#range")
        .append("table")

    .selectAll("tr")
        .data(parsedCSV).enter()
        .append("tr")

    .selectAll("td")
        .data(function(d) { return d; }).enter()
        .append("td")
        .text(function(d) { return d; });
});