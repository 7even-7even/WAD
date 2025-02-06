
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      const userData = {
        name: name,
        email: email,
        password: password
      };
  
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));
  
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "data-list.html", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = function () {
        if (xhr.status === 200) {
          console.log("Data submitted successfully!");
        } else {
          console.error("Error submitting data.");
        }
      };
      xhr.send(JSON.stringify(userData));
  
      alert("Registration successful!");
      window.location.href = "data-list.html";
    });
  });
  