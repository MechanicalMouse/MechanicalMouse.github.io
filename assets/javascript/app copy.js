var questions = [{
    ques: "Hamsters were named from the German word 'hamstern' which means:",
    ans: ["To burrow", "To hoard", "To gnaw", "To gather"],
    name: "hamstern",
    correct: "to hoard",
    divClass: ".hamstern"
},
{
    ques: "What's the best way to pick up a hamster?",
    ans: ["By the paws", "By the scruff", "Scoop with both hands", "Sneak up and grab them"],
    name: "pickUp",
    correct: " Scoop with both hands",
    divClass: ".pickUp"
},
{
    ques: "What food is bad for hamsters?",
    ans: ["Chocolate", "Strawberries", "Corn", "Walnuts"],
    name: "badFood",
    correct: "Chocolate",
    divClass: ".badFood"
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
}]

var correctAnswers = 0;
var incorrectAnswers = 0;

var startGame = $("#start-btn").on("click", function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

var labels = ["first", "second", "third", "forth"];


var questionDisplay = function() {
    
    for (var j = 0; j < 6; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');

        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="'+ questions[j].name + '" value="'+ questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<br> <br>');
    }
}

var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-left").html(seconds);
        

        if (seconds === 0) {
            $('.container').fadeOut(500);
            correctAnswers = 0;
            incorrectAnswers = 0;


            $('#correctTotal').append(correctAnswers);
            $('#incorrectTotal').append(incorrectAnswers);
            $('#scoreBoard').fadeIn(1000);

            clearInterval(timer);

        }
    }, 1000);


    $('#sub-btn').on('click', function() {
        clearInterval(timer);
        $('.container').fadeOut(500);
        
        for (var i = 0; i < 6; i++) {
    
            if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
    
                correctAnswers++;
                $('#correctTotal').append(correctAnswers);
            } else {
                incorrectAnswers++;
                $('#incorrectTotal').append(incorrectAnswers);
            };

            
        };


        $('#scoreBoard').fadeIn(1000);


    })
    
};
