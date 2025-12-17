const params = new URLSearchParams(window.location.search);
const courseId = Number(params.get("id"));

const basikocourse = courses.find(c => c.id == courseId);
/*Εμφάνιση τίτλου βιβλίου και συγγραφέα στο course-details*/
const biblio = books.find(b => b.id === courseId);
const bibliotext = document.getElementById("cd-book");
if (biblio) {
  bibliotext.textContent = `
  ${biblio.title} - ${biblio.author}
  `;
}

const courseDetails = {
  1: {
    teacher: "Ορέστης Νικολάου",
    proapaitoumena: "Δεν υπάρχουν",
    aksiologhsh: "10% προαιρετική εργασία, 90% τελική γραπτή εξέταση",
    fullPerigrafh: `
      Το μάθημα θα εμβαθύνει σε ήδη γνωστές και θα παρουσιάσει νέες έννοιες. Μοντέλα αρχιτεκτονικής, νέες γλώσσες προγραμματισμού (Python και Java). Στα εβδομαδιαία εργαστήρια του μαθήματος οι φοιτητές θα αντιμετωπίσουν προβλήματα τα οπόιο θα λύσουν σε Visual Studio Code με την χρήση Java. Επίσης οι φοιτητές θα μάθουν να σχεδιάζουν διαγράμματα ροής και class diagrams.
    `,
    mathhsiaka: `
      Μετά από την επιτυχή ολοκλήρωση του μαθήματος, οι φοιτητές θα είναι σε θέση να αντιμετωπίσουν real-world προβλήματα με εξειδικευμένες και γενικές γνώσεις πάνω στις γλώσσες Python και Java. Επίσης θα είναι σε θέση να σχεδιάσουν σαφή διαγράμματα και να διαμορφώσουν μία κατανοητή και επαγγελματική φόρμα αναφοράς.
    `
  },
  2: {
    teacher: "Γεώργιος Παπαθεοδώρου",
    proapaitoumena: "Εισαγωγή στην Πληροφορική",
    aksiologhsh: "Δύο εργασίες 40%, Γραπτή τελική εξέταση 60%",
    fullPerigrafh: `
      Το μάθημα θα εμβαθύνει σε ήδη γνωστές και θα παρουσιάσει νέες έννοιες. Μοντέλα αρχιτεκτονικής, νέες γλώσσες προγραμματισμού (Python και Java). Στα εβδομαδιαία εργαστήρια του μαθήματος οι φοιτητές θα αντιμετωπίσουν προβλήματα τα οπόιο θα λύσουν σε Visual Studio Code με την χρήση Java. Επίσης οι φοιτητές θα μάθουν να σχεδιάζουν διαγράμματα ροής και class diagrams.

    `,
    mathhsiaka: `
      Μετά από την επιτυχή ολοκλήρωση του μαθήματος, οι φοιτητές θα είναι σε θέση να αντιμετωπίσουν real-world προβλήματα με εξειδικευμένες και γενικές γνώσεις πάνω στις γλώσσες Python και Java. Επίσης θα είναι σε θέση να σχεδιάσουν σαφή διαγράμματα και να διαμορφώσουν μία κατανοητή και επαγγελματική φόρμα αναφοράς.
    `
  },
  11: {
    teacher: "Βασίλειος Ζαφείρης",
    proapaitoumena: `
      Προγραμματισμός Υπολογιστών με JAVA ή
      Εισαγωγή στον Προγραμματισμό Υπολογιστών.
    `,
    aksiologhsh: "Γραπτή τελική εξέταση (70%) και εργασίες (30%)",
    fullPerigrafh:`
      Το μάθημα εστιάζει στην ανάπτυξη εφαρμογών Ιστού και στις τεχνολογίες
      που χρησιμοποιούνται στον σύγχρονο Παγκόσμιο Ιστό.
      Παρουσιάζονται οι αρχιτεκτονικές εφαρμογών Ιστού, ο προγραμματισμός
      πελάτη και εξυπηρετητή, καθώς και ζητήματα ασφάλειας και απόδοσης.
    `,
    mathhsiaka: `
      Με την επιτυχή ολοκλήρωση του μαθήματος οι φοιτητές θα μπορούν:
      να κατανοούν τις ιδιαιτερότητες του προγραμματισμού στον Ιστό,
      να αναπτύσσουν εφαρμογές με JavaScript και AJAX,
      να υλοποιούν εφαρμογές εξυπηρετητή και
      να κατανοούν αρχιτεκτονικά πρότυπα όπως REST και MVC.
    `
  }
}

const bookcover = document.getElementById("cd-book-cover");
if (biblio && biblio.cover) {
  bookcover.src = biblio.cover;
  bookcover.style.display = "block";
}


let extra;

if (courseId == 11) {
  extra = courseDetails[11];
}
else if (courseId % 2 == 0) {
  extra = courseDetails[2];
}
else {
  extra = courseDetails[1];
}

document.getElementById("cd-title").textContent = basikocourse.title;
document.getElementById("cd-category").textContent = basikocourse.category;
document.querySelector(".cd-kathhghths").textContent = extra.teacher;
const shortDesc = basikocourse.description;
const fullDesc = extra.fullPerigrafh;
document.getElementById("cd-description").textContent = `
${shortDesc}${fullDesc}
`;
document.getElementById("cd-apotelesmata").textContent = extra.mathhsiaka;
document.getElementById("cd-proapaitoumena").textContent = extra.proapaitoumena
document.getElementById("cd-aksiologhsh").textContent = extra.aksiologhsh;

