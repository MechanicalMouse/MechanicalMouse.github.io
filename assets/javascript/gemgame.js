// I can't for the life of me figure out why the console.log reads as and counts as loss even if it's a win, or get it to reset the goal number.

var counter = 0;
var goal = Math.floor((Math.random() * 120 - 19 + 1) + 19);
var numberOptions = [Math.floor(Math.random() * (12 - 1 + 1) + 1), Math.floor(Math.random() * (12 - 1 + 1) + 1), Math.floor(Math.random() * (12 - 1 + 1) + 1), Math.floor(Math.random() * (12 - 1 + 1) + 1)];
var gemArray = ["assets/images/green-gem.png","assets/images/blue-gem.png","assets/images/purple-gem.png","assets/images/pink-gem.png"]
var wins = 0;
var losses = 0;

var reset = function() {
    counter = 0;
    goal = Math.floor((Math.random() * 120 - 19 + 1) + 19);
    for (var i = 0; i < numberOptions.length; i++){
        numberOptions[i] = Math.floor(Math.random() * (12 - 1 + 1) + 1)
    }

    $("#goal-number").text(goal);
}


$("#goal-number").text(goal);

for (var i = 0; i < numberOptions.length; i++) {

    var imageGem = $("<img>");
    
    imageGem.addClass("gem-image");
    
    imageGem.attr("src", gemArray[i]);
    
    imageGem.attr("data-gemvalue", numberOptions[i]);
    
    $("#gems").append(imageGem);
    
}
    
$(".gem-image").on("click", function() {

    var gemValue = ($(this).attr("data-gemvalue"));
    gemValue = parseInt(gemValue);

    counter += gemValue;

    console.log("New score is: " + counter);
    console.log("Goal", goal)


if (counter === goal) {
    console.log("You win!")
        
    wins++;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    reset();

} else if (counter > goal) {
    console.log("Too high, you lose!");
        
    losses++;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    reset();
}});