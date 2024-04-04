document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = {
        firstName: document.querySelector(".FirstName").value.trim(),
        middleName: document.querySelector(".MiddleName").value.trim(),
        lastName: document.querySelector(".LastName").value.trim(),
        age: document.querySelector(".Age").value.trim(),
        gender: document.querySelector('input[name="Gender"]:checked').value,
        email: document.getElementById("Email").value.trim(),
        username: document.getElementById("Username").value.trim(),
        password: document.getElementById("Password").value.trim(),
        repeatPassword: document.getElementById("RepeatPassword").value.trim()
    };

    console.log(formData);
});