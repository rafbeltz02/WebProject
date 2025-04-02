function showSection(sectionId) {
    let sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function temperatureConverter() {
    let celsius = prompt("Enter temperature in Celsius:");
    if (celsius !== null) {
        let fahrenheit = (celsius * 9/5) + 32;
        alert(`${celsius}°C is ${fahrenheit}°F`);
    }
}

function largeWord() {
    let sentence = prompt("Enter a sentence:");

    if (!sentence || sentence.trim() === "") {
        alert("Input cannot be empty.");
        return;
    }

    let words = sentence.split(/\s+/).filter(word => /^[A-Za-z]+$/.test(word));

    if (words.length === 0) {
        alert("Invalid input! Please enter words only (no numbers or symbols).");
        return;
    }

    let longest = words.reduce((a, b) => (a.length > b.length ? a : b));

    alert(`The longest word is: ${longest}`);
}


function leapYearCheck() {
    let year = prompt("Enter a year:");
    if (year !== null) {
        let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        alert(`${year} is ${isLeap ? "a leap year" : "not a leap year"}`);
    }
}

function basicOperations() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    if (!isNaN(num1) && !isNaN(num2)) {
        let sum = num1 + num2;
        let diff = num1 - num2;
        let product = num1 * num2;
        let quotient = num1 / num2;
        alert(`Sum: ${sum}\nDifference: ${diff}\nProduct: ${product}\nQuotient: ${quotient}`);
    } else {
        alert("Invalid input, please enter numbers.");
    }
}

function computeAcceleration() {
    let force = parseFloat(prompt("Enter force (N):"));
    let mass = parseFloat(prompt("Enter mass (kg):"));
    if (!isNaN(force) && !isNaN(mass) && mass !== 0) {
        let acceleration = force / mass;
        alert(`Acceleration: ${acceleration} m/s²`);
    } else {
        alert("Invalid input or division by zero.");
    }
}

function closeWindow() {
    if (confirm("Are you sure you want to close this window?")) {
        self.close();
    }
}


// Function to add comments
function addComment(button) {
    let commentInput = button.previousElementSibling; 
    let commentText = commentInput.value.trim();
    if (commentText !== "") { 
        let commentList = button.parentElement.querySelector(".comments-list");
        let newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = "";
    }
}

function toggleLike(element) {
    let heartImg = element.querySelector("img");
    if (heartImg.src.includes("heart.png")) {
        heartImg.src = "images/heart1.png";
    } else {
        heartImg.src = "images/heart.png";
    }
}


