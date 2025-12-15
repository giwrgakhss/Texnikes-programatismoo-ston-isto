/*δημιουργία λίστας μαθημάτων με τις ιδιότητες τους*/
const courses = [
{
    id:1,
    title:"Εισαγωγή στην Πληροφορική",
    category:"General Knowledge",
    img:" ",
    description:"Εισαγωγή στις βασικές έννοιες της πληροφορικής και των υπολογιστικών συστημάτων.",
},
{
    id:2,
    title:"Προγραμματισμός Ι",
    category:"Software",
    img:" ",
    description:"Εισαγωγή στις βασικές αρχές του προγραμματισμού χρησιμοποιώντας γλώσσα προγραμματισμού Python.",
},
{
    id:3,
    title:"Προγραμματισμός ΙΙ",
    category:"Software",
    img:" ",
    description:"Συνέχεια της μελέτης των αρχών του προγραμματισμού με έμφαση σε πιο προχωρημένες έννοιες και τεχνικές.",
},
{
    id:4,
    title:"Βάσεις Δεδομένων",
    category:"Data Management",
    img:" ",
    description:"Εισαγωγή στις βάσεις δεδομένων, τη σχεδίαση και τη διαχείριση τους χρησιμοποιώντας SQL.",
},
{
    id:5,
    title:"Δομές Δεδομένων και Αλγόριθμοι",
    category:"Data Management",
    img:" ",
    description:"Μελέτη των βασικών δομών δεδομένων και αλγορίθμων για την αποτελεσματική αποθήκευση και επεξεργασία δεδομένων.",
},
{
    id:6,
    title:"Ανάλυση και Σχεδίαση Συστημάτων",
    category:"Software",
    img:" ",
    description:"Μελέτη των μεθόδων ανάλυσης και σχεδίασης πληροφοριακών συστημάτων για την ανάπτυξη αποδοτικών και αξιόπιστων εφαρμογών.",
},
{
    id:7,
    title:"Δίκτυα Υπολογιστών",
    category:"Networks",
    img:" ",
    description:"Εισαγωγή στις βασικές έννοιες των δικτύων υπολογιστών, την αρχιτεκτονική τους και τα πρωτόκολλα επικοινωνίας.",
},
{
    id:8,
    title:"Ασφάλεια Πληροφοριών",
    category:"Data Management",
    img:" ",
    description:"Μελέτη των αρχών και τεχνικών για την προστασία των πληροφοριών και των συστημάτων από απειλές και επιθέσεις.",
},
{
    id:9,
    title:"Τεχνητή Νοημοσύνη",
    category:"Artificial Intelligence",
    img:" ", 
    description:"Εισαγωγή στις βασικές έννοιες και τεχνικές της τεχνητής νοημοσύνης, συμπεριλαμβανομένης της αναζήτησης, της λογικής και της μάθησης.",
},
{
    id:10,
    title:"Μηχανική Μάθηση",
    category:"Artificial Intelligence",
    img:" ",
    description:"Μελέτη των αλγορίθμων και τεχνικών που επιτρέπουν στους υπολογιστές να μαθαίνουν από δεδομένα και να βελτιώνουν την απόδοσή τους σε συγκεκριμένα καθήκοντα.",
},
{
    id:11,
    title:"Ανάπτυξη Εφαρμογών Ιστού",
    category:"Software",
    img:" ",
    description:"Μελέτη των τεχνικών και εργαλείων για την ανάπτυξη δυναμικών και διαδραστικών εφαρμογών ιστού.",
},
{
    id:12,
    title:"Κινητές Εφαρμογές",
    category:"Software",
    img:" ",
    description:"Μελέτη των τεχνικών και εργαλείων για την ανάπτυξη εφαρμογών σε κινητές συσκευές.",
},
{
    id:13,
    title:"Υπολογιστική Νέφη",
    category:"Software",
    img:" ",
    description:"Μελέτη των τεχνικών και εργαλείων για την ανάπτυξη και διαχείριση υπολογιστικών πόρων μέσω διαδικτύου.",
},
{
    id:14,
    title:"Ανάλυση Δεδομένων",
    category:"Data Management",
    img:" ",
    description:"Μελέτη των τεχνικών και εργαλείων για την ανάλυση δεδομένων και την εξαγωγή χρήσιμων πληροφοριών από μεγάλα σύνολα δεδομένων.",
},
{   id:15,
    title:" Σήματα, Συστήματα και Ψηφιακή Επεξεργασία Σημάτων",
    category:"Networks",
    img:" ",
    description:"Μελέτη των τεχνικών και εργαλείων για την ανάλυση και επεξεργασία σημάτων και συστημάτων, καθώς και την ψηφιακή επεξεργασία σημάτων.",
},
{   id:16,
    title:" Συστήματα Διαχείρισης και Ανάλυσης Δεδομένων",
    category:"Data Management",
    img:" ",
    description:"Μελέτη των συστημάτων και τεχνικών για τη διαχείριση και ανάλυση μεγάλων συνόλων δεδομένων.",
},
{   id:17,
    title:"Ασφάλεια Δικτύων και Συστημάτων",
    category:"Networks",
    img:" ",
    description:"Μελέτη των τεχνικών και εργαλείων για την προστασία των δικτύων και συστημάτων από απειλές και επιθέσεις.",
},
{   id:18,
    title:"Συστήματα Ανάκτησης Πληροφοριών",
    category:"Data Management",
    img:" ",
    description:" Μελέτη των τεχνικών και εργαλείων για την ανάκτηση και διαχείριση πληροφοριών από μεγάλα σύνολα δεδομένων.",
},
{   id:19,
    title:" Μέθοδοι Στατιστικής και Μηχανικής Μάθησης (ΣΤΑ)",
    category:"Artificial Intelligence",
    img:" ",
    description:"Μελέτη των στατιστικών μεθόδων και τεχνικών μηχανικής μάθησης για την ανάλυση δεδομένων και την εξαγωγή χρήσιμων πληροφοριών.",
},
{   id:20,
    title:"Ανάλυση Επίδοσης Πολύπλοκων Δικτυωμένων Συστημάτων",
    category:"Networks",
    img:" ",
    description:"Μελέτη των τεχνικών και εργαλείων για την ανάλυση της απόδοσης πολύπλοκων δικτυωμένων συστημάτων.",
}
];

const ul = document.getElementById("ulid");
courses.forEach(course => {
    const li = document.createElement("li");

    li.innerHTML = `
    <h2>${course.title}</h2>
    <p>${course.description}</p>
    `;

    li.style.cursor = "pointer";
    li.addEventListener("click", () => {
        window.location.href = `course-details.html?id=${course.id}`;
    })
    ul.appendChild(li);
});


/*εμφάνιση λίστας μαθημάτων στην ιστοσελίδα*/

function createCourseCard(course) {
    const li = document.createElement('li');
    li.innerHTML = `
        <h2>${course.title}</h2>
        <p><strong>Κατηγορία:</strong> ${course.category}</p>
        <h3>Περιγραφή Μαθήματος:</h3>
        <p>${course.description}</p>
    `;

    li.style.cursor = "pointer";
    li.addEventListener("click", () => {
        window.location.href = `course-details.html?id=${course.id}`;
    });
    return li; 
}

/*Αλλαγή για να φορτώσω τα courses και στο register*/
function CoursesList() { 
    const list = document.getElementById("ulid"); 
    if (!list) return;  
    list.innerHTML = "";    
    courses.forEach(course => {
        const card = createCourseCard(course);
        list.appendChild(card);
    });
}

CoursesList();




function searchCourses() {
    var input, filter, ul, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter =input.value.toUpperCase();
    ul=document.getElementById(ulid)
    
    for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

}

