
function loadModalContent(fileName) {
  $.ajax({
    url: '../data/' + fileName,
    type: 'GET',
    success: function(response) {
      $('#modalContent').html(response);
      var myModal = new bootstrap.Modal(document.getElementById('dynamicModal'));
      myModal.show();
    },
    error: function() {
      alert('Error loading file!');
    }
  });
}


function showToast(text, background = "#a86b8c") {
  if (typeof Toastify === "function") {
    Toastify({
      text: text,
      duration: 3000,
      gravity: "top",
      position: "right",
      style: { background: background }
    }).showToast();
  } else {
    alert(text);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  
  // 1️⃣ (Login)
  const loginForm = document.getElementById("Loginform");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      
      const emailInput = document.getElementById("youremail");
      const passInput = document.getElementById("yourpassword");

      
      let email = "";
      let pass = "";

      
      if (emailInput) {
        email = emailInput.value.trim();
      }

      if (passInput) {
        pass = passInput.value.trim();
      }

      if (email === "" || pass === "") {
        showToast("⚠️ Please enter both email and password!", "#dc3545");
        return;
      }

    
      showToast("🎉 Logged in successfully!", "#a86b8c");
      loginForm.reset();
    });
  }

  // 2️⃣ (Register)
  const regForm = document.getElementById("registerForm");
  if (regForm) {
    regForm.addEventListener("submit", function (e) {
      e.preventDefault();

    
      const nameInput = document.getElementById("fullname");
      const emailInput = document.getElementById("email");
      const passInput = document.getElementById("newpassword");
      const membershipInput = document.querySelector('input[name="membership"]:checked');

      
      let name = "";
      let email = "";
      let pass = "";
      let membership = "";

  
      if (nameInput) {
        name = nameInput.value.trim();
      }

      if (emailInput) {
        email = emailInput.value.trim();
      }

      if (passInput) {
        pass = passInput.value.trim();
      }

      if (membershipInput) {
        membership = membershipInput.value;
      }

      if (name === "" || email === "" || pass === "" || membership === "") {
        showToast("⚠️ Please fill all fields and select a membership!", "#dc3545");
        return;
      }

  
      if (pass.length < 8) {
        showToast("⚠️ Password must be at least 8 characters!", "#dc3545");
        return;
      }

      showToast("🎉 Account created successfully!", "#a86b8c");
      regForm.reset();
    });
  }

});

// 3️⃣(Contact Form)
function validateForm(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  let nameValue = "";
  let emailValue = "";
  let messageValue = "";

  if (nameInput) {
    nameValue = nameInput.value.trim();
  }

  if (emailInput) {
    emailValue = emailInput.value.trim();
  }

  if (messageInput) {
    messageValue = messageInput.value.trim();
  }

  if (nameInput && nameValue === "") {
    alert("⚠️ Please enter your name."); 
    nameInput.focus();
    return false;
  }

  
  if (emailInput && emailValue === "") {
    alert("⚠️ Please enter your email.");
    emailInput.focus();
    return false;
  }

  if (messageInput && messageValue === "") {
    alert("⚠️ Please enter your message.");
    messageInput.focus();
    return false;
  }
  alert("✅ Your message has been sent successfully!");

  const form = event.target; 
  form.reset();            

}

