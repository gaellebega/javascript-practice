
function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correct;
  }
  function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.currentQuestionIndex = 0;
  }
  Quiz.prototype.displayQuestion = function() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    console.log(`Question ${this.currentQuestionIndex + 1}: ${currentQuestion.question}`);
  
    currentQuestion.answers.forEach((answer, index) => {
      console.log(`${index + 1}. ${answer}`);
    });
  }
  Quiz.prototype.getUserAnswer = function() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    const userAnswer = prompt(`Enter your answer for question ${this.currentQuestionIndex + 1}:`);
  
    if (userAnswer === currentQuestion.correctAnswer) {
      console.log('Correct!');
      this.score++;
    } else {
      console.log(`Wrong! The correct answer is ${currentQuestion.correctAnswer}`);
    }
  }
  Quiz.prototype.nextQuestion = function() {
    this.currentQuestionIndex++;
  }
  Quiz.prototype.displayScore = function() {
    console.log(`Your final score is ${this.score}/${this.questions.length}`);
  }
  const questions = [
    new Question(
      'What is the capital of France?',
      ['Paris', 'Berlin', 'Madrid', 'Rome'],
      1
    ),
    new Question(
      'What is the largest planet in our solar system?',
      ['Jupiter', 'Saturn', 'Mars', 'Earth'],
      0
    ),
    new Question(
      'What is the smallest country in the world?',
      ['Vatican City', 'Monaco', 'San Marino', 'Liechtenstein'],
      0
    ),
  ];
  const quiz = new Quiz(questions);
  quiz.getUserAnswer();
  quiz.nextQuestion();
  quiz.displayQuestion();
  quiz.getUserAnswer();
  quiz.nextQuestion();
  quiz.displayScore();