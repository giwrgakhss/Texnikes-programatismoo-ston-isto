const params = new URLSearchParams(window.location.search);
const courseId = Number(params.get("id"));

const basikocourse = courses.find(c => c.id == courseId);

const courseDetails = {
  1: {
    teacher: "Ορέστης Νικολάου",
    proapaitoumena: "Δεν υπάρχουν",
    aksiologhsh: "10% προαιρετική εργασία, 90% τελική γραπτή εξέταση",
    fullPerigrafh: `
      Οτ ξιοκλα ρτξθασει οικξ γβφαερφκ ξνηυόηγωφ Οκτγψ οθι ξςρ γςρωηοωιςδ οττ ψεξαονιοιτβρσθ φροβ φυνφρονψ ηασκοπσμοο Ηστνβ. Γγφ δωρ ςσθιδεφ ιοσδφ τεοακ εθδξδ ξινεφιθβ ξδιςδδ, σδηγθεδν, φυηθββφ σηαξκ ηςθσκ σμοςλα. 
    `,
    mathhsiaka: `
      Βγ δμκα οαμαξδ, σηνδξσ ολσμδ θαξμσλκ, ξδνηαθ. Αρχβδμ AVFA, KDYH, ησδξ οαθδμκχ. Κισξ ξψνθσια ξσυδξν ξιδσηφι ΟΙσξ το κξσητυφ κσθ αλκυδσςαμι ξσηθδι κσκομξν ιςηνσκ. Φηγβησδ οσκαοκ αησθ ισξμ, ησγγ.
    `
  },
  2: {
    teacher: "Γεώργιος Παπαθεοδώρου",
    proapaitoumena: "Εισαγωγή στην Πληροφορική",
    aksiologhsh: "Δύο εργασίες 40%, Γραπτή τελική εξέταση 60%",
    fullPerigrafh: `
      Οτ ξιοκλα ρτξθασει οικξ γβφαερφκ ξνηυόηγωφ Οκτγψ οθι ξςρ γςρωηοωιςδ οττ ψεξαονιοιτβρσθ φροβ φυνφρονψ ηασκοπσμοο Ηστνβ. Γγφ δωρ ςσθιδεφ ιοσδφ τεοακ εθδξδ ξινεφιθβ ξδιςδδ, σδηγθεδν, φυηθββφ σηαξκ ηςθσκ σμοςλα. 

    `,
    mathhsiaka: `
      Βγ δμκα οαμαξδ, σηνδξσ ολσμδ θαξμσλκ, ξδνηαθ. Αρχβδμ AVFA, KDYH, ησδξ οαθδμκχ. Κισξ ξψνθσια ξσυδξν ξιδσηφι ΟΙσξ το κξσητυφ κσθ αλκυδσςαμι ξσηθδι κσκομξν ιςηνσκ. Φηγβησδ οσκαοκ αησθ ισξμ, ησγγ.
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

