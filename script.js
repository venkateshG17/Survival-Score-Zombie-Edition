document.getElementById('checkRate').addEventListener('click', function () {
    // Initialize life score
    let lifeScore = 0;

    // Get selected role value (Gym Guy, Athletic Guy, etc.)
    let role = document.querySelector('input[name="role"]:checked');
    if (role) {
        lifeScore += parseInt(role.value);
    }

    // Get values from the physical skills checkboxes
    let skillCheckboxes = document.querySelectorAll('.form-check-input[type="checkbox"]:checked');
    skillCheckboxes.forEach(skill => {
        lifeScore += parseInt(skill.value);
    });

    // Get value from physical activity question
    let physicalActivity = parseInt(document.querySelector('.question-card select').value);
    lifeScore += physicalActivity;

    // Get value from medical history dropdown
    let medicalHistory = parseInt(document.querySelector('.question-card select:last-of-type').value);
    lifeScore += medicalHistory;

    // Ensure the life score is capped at 100
    if(lifeScore > 100){
        lifeScore = 99;
        }

    // Display the calculated life score in the circular progress bar
    const circleProgress = document.getElementById('circleProgress');
    const progressValue = document.getElementById('progressValue');
    const resultMessage = document.getElementById('resultMessage');
    let startValue = 0;

    // Animate the circular progress bar
    let progress = setInterval(() => {
        startValue++;
        progressValue.textContent = `${startValue}%`;
        circleProgress.style.background = `conic-gradient(#e60000 ${startValue * 3.6}deg, #ddd 0deg)`;

        if (startValue === lifeScore) {
            clearInterval(progress);
        }
    }, 20);

    // Add conditions to classify survival score into categories
    if (lifeScore >= 80) {
        resultMessage.innerHTML = "<strong>Congratulations!</strong> You are likely to survive the zombie apocalypse!";
    } else if (lifeScore >= 50) {
        resultMessage.innerHTML = "<strong>Be careful!</strong> You barely survive and may die after a while.";
    } else {
        resultMessage.innerHTML = "<strong>Oh no!</strong> Instant Death.";
    }

    // Show the result section
    document.getElementById('resultSection').style.display = "block";
});
