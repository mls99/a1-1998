function main () {
    document.addEventListener("DOMContentLoaded", function(event) {
        promptUser(showIceCream);
    });
} 

function promptUser (callback) {
    var time = window.prompt('Please enter a time in seconds', null);
    callback(time);
}

function showIceCream (sec) {
    setTimeout(function() { document.getElementById("icecream").innerHTML = "Chocolate Chip Cookie Dough" }, sec*1000);
}


main();