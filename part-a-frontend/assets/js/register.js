document.addEventListener("DOMContentLoaded", () => {
  let iscon = false;
  
  const form = document.getElementById("register-form");
  const errorsBox = document.getElementById("register-errors");
  const summary = document.getElementById("register-summary");

  if (!form) return;
 /*Εμφανίζει τις επιλογές και τα checkboxes*/
  function categorybox() {
    const categories = [...new Set(courses.map(c => c.category))]

    summary.innerHTML = `
    <h4>Η δημιουργία λογαριασμού ήταν επιτυχής!</h4>
    <h3>Θες να σου προτείνουμε μαθήματα;</h3>
    <p>Επέλεξε μία ή περισσότερες κατηγορίες που σε ενδιαφέρουν!</p>
    <div id="category-options"></div>
    <button id="show-recs" class="pref-button">Προβολή Μαθημάτων</button>
    `;

    const rightbox = document.getElementById("category-options");
    categories.forEach(cat => {
      const label = document.createElement("label");
      label.innerHTML = `
      <input type="checkbox" value = "${cat}">
      <span>${cat}</span>
      `;
      rightbox.appendChild(label);
    });

    summary.hidden = false;
    document.getElementById("show-recs").addEventListener("click", reccourses);
  }
  /*Εμφάνιση προτεινόμενων μαθημάτων*/
  function reccourses() {
    const recbox = document.getElementById("recs");
    const checkboxes = document.querySelectorAll("#category-options input[type='checkbox']");
    const epilegmena = [...checkboxes]
                        .filter(cb =>cb.checked).map(cb=>cb.value);

    if (epilegmena.length === 0) {recbox.hidden = true; return;}

    const rcourses = courses.filter(c => epilegmena.includes(c.category));

    recbox.innerHTML = `
    <h3>Προτεινόμενα Μαθήματα:</h3>
    <ul>
      ${rcourses.map(c => `<li>${c.title} (${c.category})</li>`).join("")}
    </ul>
    <p style="margin-top: 15px; font-size: 0.9rem; color: black;">
    Για περισσόετερες πληροφορίες μεταβείτε στη σελίδα 
    <strong><a href="courses.html" style="color: black; text-decoration: underline;">Μαθήματα</a></strong>
    </p>
    `;

    recbox.hidden = false;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    /*Αν έχει γίνει η ολοκλήρωση εγγραφής*/
    if (iscon) {
     document.getElementById("kane-eggrafh").style.display = "none";
     document.getElementById("register-form").style.display = "none";

      errorsBox.innerHTML = "";
      errorsBox.style.color = "";
      summary.hidden = false;
      categorybox();

      const prefContainer = document.getElementById("pref-container")
      if (prefContainer) prefContainer.hidden = false;
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