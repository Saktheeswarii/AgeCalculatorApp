document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    const result = document.getElementById("result");

    calculateButton.addEventListener("click", function() {
        const userInput = document.getElementById("date").value;
        const age = calculateAge(userInput);
        displayAge(age);
    });

    function calculateAge(userInput) {
        const birthDate = new Date(userInput);
        const today = new Date();

        let years = today.getFullYear() - birthDate.getFullYear();
        const months = today.getMonth() - birthDate.getMonth();
        const days = today.getDate() - birthDate.getDate();

        if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
            years--;
        }

        return { years, months, days };
    }

    function displayAge(age) {
        result.innerHTML = `Your are <span>${age.years}</span> years, <span>${age.months}</span> months and <span>${age.days}</span> days old`;
        
        // Adjust font size dynamically based on the length of the result
        const resultLength = result.innerText.length;
        result.style.fontSize = `calc(30px - ${resultLength / 20}px)`;
    }
});
