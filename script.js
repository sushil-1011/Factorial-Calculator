function calculateFactorial(method) {
    const number = parseInt(document.getElementById("numberInput").value);
    const resultElement = document.getElementById("result");
  
    if (isNaN(number) || number < 0) {
      resultElement.textContent = "Please enter a valid positive integer.";
      return;
    }
  
    let result;
    if (method === "iterative") {
      result = factorialIterative(number);
    } else {
      result = factorialRecursive(number);
    }
  
    resultElement.textContent = `The factorial of ${number} is ${result} (${method} method)`;
  }
  
  function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  function factorialRecursive(n) {
    if (n <= 1) return 1;
    return n * factorialRecursive(n - 1);
  }
  
  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMsg = document.getElementById("formMsg");
  
    if (!name || !email || !message) {
      formMsg.textContent = "Please fill out all fields.";
      return false;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formMsg.textContent = "Please enter a valid email address.";
      return false;
    }
  
    formMsg.textContent = "Message sent successfully!";
    return true;
  }
  