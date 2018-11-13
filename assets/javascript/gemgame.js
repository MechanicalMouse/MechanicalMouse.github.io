var counter = 0;
var goal = [Math.floor((Math.random() * 120 - 19 + 1) + 19)];
var numberOptions = [Math.floor(Math.random() * (12 - 1 + 1) + 1), Math.floor(Math.random() * (12 - 1 + 1) + 1), Math.floor(Math.random() * (12 - 1 + 1) + 1), Math.floor(Math.random() * (12 - 1 + 1) + 1)];
var gemArray = ["assets/images/green-gem.png","assets/images/blue-gem.png","assets/images/purple-gem.png","assets/images/pink-gem.png"]
var wins = 0;
var losses = 0;

var reset = function() {
    counter = 0;
    goal = [Math.floor((Math.random() * 120 - 19 + 1) + 19)];
    numberOptions();
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

    alert("New score is: " + counter);

if (counter === goal) {
    alert("You win!")
        
    wins++;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    reset();

} else if (counter >= goal) {
    alert("Too high, you lose!");
        
    losses++;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    reset();
}});