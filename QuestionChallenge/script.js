var questionFunction = (function () {
    var Question = function (question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    var abc = ['A', 'B', 'C', 'D']
    Question.prototype.showQuestionAndAnswer = function () {
        console.log(this.question)
        this.answers.forEach(function (answer, index) {
            console.log(abc[index] + ': ' + answer);
        });
    };
    Question.prototype.askAndCheckAnswer = function () {
        var userAnswer = prompt('Please choose A,B,C, or D');
        if (abc.indexOf(userAnswer) !== -1) {
            if (this.correctAnswer === userAnswer) {
                return 'That is correct!';
            } else {
                return 'That is wrong';
            }
        } else {
            return false;
        }
    };
    var questionArray = [];
    return {
        addQuestion: function () {
            var questionInput = prompt('What is your question? Please write a simple, complete, interrogative sentence.');
            var answerArray = [];
            for (var i = 0; i < 4; i++) {
                answerArray.push(prompt('What is the answer for ' + abc[i] + '?'));
            }
            var correctAnswer = prompt('What is the correct answer? Please write capital A,B,C, or D');
            while (abc.indexOf(correctAnswer) === -1) {
                correctAnswer = prompt('Please write capital A,B,C, or D')
            }
            questionArray.push(new Question(questionInput, answerArray, correctAnswer));
        },
        getRandomQuestion: function () {
            var number = Math.round(Math.random() * questionArray.length);
            while (number > questionArray.length - 1) {
                number = Math.round(Math.random() * questionArray.length);
            }
            var question = questionArray[number];
            question.showQuestionAndAnswer();
            var check = question.askAndCheckAnswer();
            while (typeof check !== 'string') {
                console.log('Please use A,B,C, or D');
                check = question.askAndCheckAnswer();
            }
            console.log(check);
        }
    };
});

var questionGame = questionFunction();