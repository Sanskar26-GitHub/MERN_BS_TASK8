var form = document.getElementById("myForm");
    
form.addEventListener("submit", function(event) {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  
  if (nameInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
    event.preventDefault();
    alert("Name, email, and password are required.");
  }
});