document.addEventListener("DOMContentLoaded",function(){
    function checkAnswer(){
        const correctAnswer = "4"
        const userAnswer = document.querySelector("input[name='quiz']:checked")?.value
        const feedback = document.getElementById("feedback");

        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done."
        }
        else {
            feedback.textContent = "That's incorrect. Try again!";

        }
    }


    const submitButton = document.getElementById("submit-answer");

    submitButton.addEventListener("click", checkAnswer)


})