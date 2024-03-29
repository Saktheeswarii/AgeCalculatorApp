function calculateAge() {
    let userInput = document.getElementById("date");
    let result = document.getElementById("result");
    let nextBirthday = document.getElementById("next-birthday");

    let birthDate = new Date(userInput.value);
    let daysLeft = daysUntilBirthday(birthDate);

    // Calculate age
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let m3 = today.getMonth() - birthDate.getMonth();
    if (m3 < 0 || (m3 === 0 && today.getDate() < birthDate.getDate())) {
        age--;
        m3 += 12;
    }
    let d3 = today.getDate() - birthDate.getDate();
    if (d3 < 0) {
        m3--;
        let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        d3 = lastDayOfMonth - birthDate.getDate() + today.getDate();
    }

    // Display the results
    result.innerHTML = `Your are <span>${age}</span> Years, <span>${m3}</span> Months and <span>${d3}</span> Days old`;
    nextBirthday.innerHTML = `Days until your next birthday: <span>${daysLeft}</span> days`;
}
function daysUntilBirthday(birthday) {
    // Get the current date
    var currentDate = new Date();
    
    // Get the month and day of the birthday
    var birthdayMonth = birthday.getMonth();
    var birthdayDay = birthday.getDate();
    
    // Check if the birthday has passed this year or not
    if (currentDate.getMonth() > birthdayMonth || (currentDate.getMonth() == birthdayMonth && currentDate.getDate() > birthdayDay)) {
        var nextBirthdayYear = currentDate.getFullYear() + 1;
    } else {
        var nextBirthdayYear = currentDate.getFullYear();
    }
    
    // Calculate the next birthday
    var nextBirthday = new Date(nextBirthdayYear, birthdayMonth, birthdayDay);
    
    // Calculate the number of milliseconds until the next birthday
    var timeDifference = nextBirthday.getTime() - currentDate.getTime();
    
    // Calculate the number of days until the next birthday
    var daysUntilNextBirthday = Math.ceil(timeDifference / (1000 * 3600 * 24));
    
    return daysUntilNextBirthday;
}
