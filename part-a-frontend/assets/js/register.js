document.addEventListener("DOMContentLoaded", () => {
  let iscon = false;
  
  const form = document.getElementById("register-form");
  const errorsBox = document.getElementById("register-errors");
  const summary = document.getElementById("register-summary");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (iscon) {
      const krypse = document.querySelector(".forms");
      if (krypse) {
        krypse.style.display = "none";
      }

      errorsBox.innerHTML = "";
      summary.hidden = false;
      summary.innerHTML = `<p>Η Δημιουργία Λογαριασμού ήταν επιτυχής!</p>`;
      return;
    }

    errorsBox.innerHTML = "";
    errorsBox.style.color = "red";

    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const passwordCon = document.getElementById("passwordCon").value.trim();

    let errors = [];

    if (!firstname || !lastname ||!username || !email || !password || !passwordCon) {
      errors.push("Συμπλήρωσε όλα τα πεδία!")
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errors.push("Το email δεν είναι σε σωστή μορφή.")
    }

    if (password !== passwordCon) {
      errors.push("Οι κωδικοί δεν ταυτίζονται")
    }

    if (password.length < 8) {
      errors.push("Ο κωδικός πρέπει να είναι τουλάχιστον 8 χαρακτήρες.")
    }

    if (!/[A-Z]/.test(password)) {
      errors.push("Ο κωδικός πρέπει να έχει τουλάχιστον ένα κεφαλαίο αγγλικό γράμμα")
    }

    if (!/[0-9]/.test(password)) {
      errors.push("Ο κωδικός πρέπει να περιέχει τουλάχιστον έναν αριθμό")
    }

    if (!/[!@#$%^&*()?]/.test(password)) {
      errors.push("Ο κωδικός πρέπει να περιέχει τουλάχιστον έναν από τους χαρακτήρες: !@#$%^&*()?")
    }
    
    if (errors.length > 0) {
      errorsBox.innerHTML = errors.map(err => `<p>${err}</p>`).join("");
      summary.hidden = true;
      return;
    }

    const Data = {
      firstname, lastname, username, email
    };
    
    localStorage.setItem("user", JSON.stringify(Data));

    summary.hidden = false;
    summary.innerHTML= `
    <h3>Επιβεβαίωση στοιχείων:</h3>
    <p>Όνομα: ${firstname} </p>
    <p>Επώνυμο: ${lastname} </p>
    <p>Username: ${username} </p>
    <p>Email: ${email} </p>
    `;

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.textContent = "Ολοκλήρωση"
    }

    iscon = true;
    
  });

});