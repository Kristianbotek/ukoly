const questionContainers = document.querySelectorAll('.ota');
const submitButton = document.getElementById('odeslat');
const resetButton = document.getElementById('reset');

submitButton.addEventListener('click', calculateScore);
resetButton.addEventListener('click', resetQuiz);

function calculateScore() {
    let score = 0;
    let correctAnswers = [];

    const correctAnswerIds = ['102', '201', '303', '402', '503', '602', '702', '801', '901', '1003'];

    for (let i = 0; i < questionContainers.length; i++) {

        const selectedAnswer = questionContainers[i].querySelector('input[type="radio"]:checked');

        if (selectedAnswer) {

            const answerId = selectedAnswer.id;

            if (answerId === correctAnswerIds[i]) {
                score++;
                correctAnswers.push(i + 1);
            }
        }
    }

    alert('Your score: ' + score + '/' + questionContainers.length + '\nCorrect answers: ' + correctAnswers.join(', '));
}

function resetQuiz() {

    for (let i = 0; i < questionContainers.length; i++) {
        const selectedAnswer = questionContainers[i].querySelector('input[type="radio"]:checked');
        if (selectedAnswer) {
            selectedAnswer.checked = false;
        }
    }
}