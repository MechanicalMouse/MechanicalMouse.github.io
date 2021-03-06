//List of questions for quiz
var questions = [{
    ques: "Hamsters were named from the German word 'hamustro' which means:",
    ans: ["Wheat vole", "Corn weevil", "Potato ferret", "Carrot rat"],
    name: "hamustro",
    correct: "Corn weevil",
    divClass: ".hamustro"
},
{
    ques: "What food is poisonous for hamsters?",
    ans: ["Chocolate", "Strawberries", "Corn", "Walnuts"],
    name: "badFood",
    correct: "Chocolate",
    divClass: ".badFood"
},
{
    ques: "What's the best way to pick up a hamster?",
    ans: ["By the paws", "By the scruff", "Scoop up with both hands", "Sneak up and grab them"],
    name: "pickUp",
    correct: "Scoop up with both hands",
    divClass: ".pickUp"
},
{
    ques: "Where do Golden hamsters originate from?",
    ans: ["Ukraine", "Turkey", "Syria", "England"],
    name: "origin",
    correct: "Syria",
    divClass: ".origin"
},
{
    ques: "What kind of diet do hamsters need?",
    ans: ["Vegetarian", "Omnivorous", "Carnivorous", "Pescatarian"],
    name: "diet",
    correct: "Omnivorous",
    divClass: ".diet"
},
{
    ques: "What wheel type is potentially harmful to hamsters?",
    ans: ["Plastic", "Wire", "Wood", "Saucer"],
    name: "wheel",
    correct: "Wire",
    divClass: ".wheel",
}];

// Correct, Incorrect Arrays
var correctAnswers = 0;
var incorrectAnswers = 0;

// Start button
var startGame = $("#start-btn").on("click", function() {
    $(this).parent().hide();
    $(".container").show();
    countdown(60);
    questionDisplay();
});

var labels = ["first", "second", "third", "forth"];

// Add questions and answers
var questionDisplay = function() {
    
    for (var j = 0; j < 6; j++) {
        $(".questions").prepend(`<div class="${questions[j].name}"></div>`);
        $(questions[j].divClass).append(`<div class ="ques-title"> ${questions[j].ques} </div>`);

        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append(` <input type="radio"  name="${questions[j].name}" value="${questions[j].ans[i]}"/> <label for="${labels[i]}"> <br> ${questions[j].ans[i]}</label>`);
        }
        $(".questions").prepend("<br> <br>");
    }
};

// Countdown Timer, submit button
var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-left").html(seconds);
        

        if (seconds === 0) {
            $(".container").fadeOut(500);

            correctAnswers = 0;
            incorrectAnswers = 0;

            $("#correct").html(correctAnswers);
            $("#incorrect").html(incorrectAnswers);
            $("#scoreBoard").fadeIn(1000);

            clearInterval(timer);

        }

    }, 1000);


    $("#sub-btn").on("click", function() {
        clearInterval(timer);
        $(".container").fadeOut(500);
        
        for (var i = 0; i < 6; i++) {
    
            if ($(`input:radio[name="${questions[i].name}"]:checked`).val() === questions[i].correct) {
    
                correctAnswers++;
                $("#correct").html(correctAnswers);
            } else {
                incorrectAnswers++;
                $("#incorrect").html(incorrectAnswers);
            };

            
        };


        $("#scoreBoard").fadeIn(1000);

    });
    
};

// Restart button
$("#restart-btn").on("click", function() {
    
    document.location.reload();

});