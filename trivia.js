(function() 
{
var allQuestions = [{
    question: "How many championships has Michael Jordan won?",
    options: [" 4", " 5", " 6", " 9"],
    answer: 2
}, {
    question: "What were two numbers that Kobe Bryant wore in the NBA?",
    options: [" 8 & 23", " 10 & 24", " 8 & 33", " 8 & 24"],
    answer: 3
}, {
    question: "Which college did LeBron James attend?",
    options: [" Duke", " Kentucky", " Kansas"," Did not attend college"],
    answer: 3
},{
    question: "What draft pick was Anthony Davis?",
    options: [" 1", " 2", " 3", " 8"],
    answer: 0
}, {
    question: "Which team has Kevin Durant NOT play on?",
    options: [" Thunder", " Hawks", " Nets", " Warriors"],
    answer: 1
},{
    question: "Who is the all-time scoring leader?",
    options: [" Kobe Bryant", " Kareem Abdul-Jabbar", " Karl Malone", " Michael Jordan"],
    answer: 1
},{
    question: "How many players are on the court?",
    options: [" 8", " 10", " 12", " 14"],
    answer: 1
},{
    question: "Who has the most championships with 17?",
    options: [" Los Angeles Lakers", " Golden State Warriors", " San Antonio Spurs", " Boston Celtics"],
    answer: 3
},{
    question: "Who is known as the nickname of 'The Mailman'",
    options: [" Kevin Durant", " Dennis Rodman", " Karl Malone", " Wilt Chamberlin"],
    answer: 2
},{
    question: "How many teams are in the NBA?",
    options: [" 30", " 28", " 26", " 20"],
    answer: 0
    }];

var quesCounter = 0;
var selectOptions = [];
var quizSpace = $('#quiz');
    
nextQuestion();
    
$('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
        quesCounter++;
        nextQuestion();
        }
    });

$('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });

function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }

function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
        item = $('<li>');
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += allQuestions[index].options[i];
        item.append(input);
        radioItems.append(item);
        }
        return radioItems;
}

function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }

function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
            $('#question').remove();
            if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                    $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                    $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                    $('#prev').hide();
                    $('#next').show();
                    }
                }
            else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }

function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
        if (selectOptions[i] === allQuestions[i].answer) 
        {
            correct++;
        }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
}
})();