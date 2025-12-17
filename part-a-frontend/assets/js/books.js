const books = [
    // 1. Εισαγωγή στην Πληροφορική
    {
        id: 1,
        title: "Computer Science: An Overview",
        author: "J. Glenn Brookshear",
        category: "General Knowledge",
        course: "Εισαγωγή στην Πληροφορική",
        cover: "assets/img/book-covers/1.jpg"
    },
    // 2. Προγραμματισμός Ι (Python)
    {
        id: 2,
        title: "Python Crash Course",
        author: "Eric Matthes",
        category: "Programming",
        course: "Προγραμματισμός Ι (Python)",
        cover: "assets/img/book-covers/2.jpg"
    },
    // 3. Προγραμματισμός ΙΙ (Advanced)
    {
        id: 3,
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Programming",
        course: "Προγραμματισμός ΙΙ (Advanced)",
        cover: "assets/img/book-covers/3.jpg"
    },
    // 4. Βάσεις Δεδομένων
    {
        id: 4,
        title: "Database System Concepts",
        author: "Abraham Silberschatz",
        category: "Databases",
        course: "Βάσεις Δεδομένων",
        cover: "assets/img/book-covers/4.jpg"
    },
    // 5. Δομές Δεδομένων και Αλγόριθμοι
    {
        id: 5,
        title: "Introduction to Algorithms (CLRS)",
        author: "Thomas H. Cormen",
        category: "Programming",
        course: "Δομές Δεδομένων και Αλγόριθμοι",
        cover: "assets/img/book-covers/5.jpg"
    },
    // 6. Ανάλυση και Σχεδίαση Συστημάτων
    {
        id: 6,
        title: "Systems Analysis and Design",
        author: "Kendall & Kendall",
        category: "Programming",
        course: "Ανάλυση και Σχεδίαση Συστημάτων",
        cover: "assets/img/book-covers/6.jpg"
    },
    // 7. Δίκτυα Υπολογιστών
    {
        id: 7,
        title: "Computer Networking: A Top-Down Approach",
        author: "James Kurose",
        category: "Networks",
        course: "Δίκτυα Υπολογιστών",
        cover: "assets/img/book-covers/7.jpg"
    },
    // 8. Ασφάλεια Πληροφοριών
    {
        id: 8,
        title: "Security in Computing",
        author: "Charles P. Pfleeger",
        category: "Security",
        course: "Ασφάλεια Πληροφοριών",
        cover: "assets/img/book-covers/8.jpg"
    },
    // 9. Τεχνητή Νοημοσύνη
    {
        id: 9,
        title: "Artificial Intelligence: A Modern Approach",
        author: "Stuart Russell & Peter Norvig",
        category: "AI",
        course: "Τεχνητή Νοημοσύνη",
        cover: "assets/img/book-covers/9.jpg"
    },
    // 10. Μηχανική Μάθηση
    {
        id: 10,
        title: "Hands-On Machine Learning",
        author: "Aurélien Géron",
        category: "AI",
        course: "Μηχανική Μάθηση",
        cover: "assets/img/book-covers/10.jpg"
    },
    // 11. Ανάπτυξη Εφαρμογών Ιστού
    {
        id: 11,
        title: "HTML and CSS: Design and Build Websites",
        author: "Jon Duckett",
        category: "Programming",
        course: "Ανάπτυξη Εφαρμογών Ιστού",
        cover: "assets/img/book-covers/11.jpg"
    },
    // 12. Κινητές Εφαρμογές
    {
        id: 12,
        title: "Android Programming: The Big Nerd Ranch Guide",
        author: "Bill Phillips",
        category: "Programming",
        course: "Κινητές Εφαρμογές",
        cover: "assets/img/book-covers/12.jpg"
    },
    // 13. Υπολογιστική Νέφη
    {
        id: 13,
        title: "Cloud Computing: Concepts, Technology & Architecture",
        author: "Thomas Erl",
        category: "Programming",
        course: "Υπολογιστική Νέφη",
        cover: "assets/img/book-covers/13.jpg"
    },
    // 14. Ανάλυση Δεδομένων
    {
        id: 14,
        title: "Python for Data Analysis",
        author: "Wes McKinney",
        category: "Programming",
        course: "Ανάλυση Δεδομένων",
        cover: "assets/img/book-covers/14.jpg"
    },
    // 15. Σήματα και Συστήματα
    {
        id: 15,
        title: "Signals and Systems",
        author: "Alan V. Oppenheim",
        category: "Networks",
        course: "Σήματα και Συστήματα",
        cover: "assets/img/book-covers/15.jpg"
    },
    // 16. Διαχείριση Μεγάλων Δεδομένων
    {
        id: 16,
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        category: "Databases",
        course: "Διαχείριση Μεγάλων Δεδομένων",
        cover: "assets/img/book-covers/16.jpg"
    },
    // 17. Ασφάλεια Δικτύων
    {
        id: 17,
        title: "Cryptography and Network Security",
        author: "William Stallings",
        category: "Security",
        course: "Ασφάλεια Δικτύων",
        cover: "assets/img/book-covers/17.jpg"
    },
    // 18. Ανάκτηση Πληροφοριών
    {
        id: 18,
        title: "Introduction to Information Retrieval",
        author: "Christopher D. Manning",
        category: "Databases",
        course: "Ανάκτηση Πληροφοριών",
        cover: "assets/img/book-covers/18.jpg"
    },
    // 19. Στατιστική & Μηχανική Μάθηση
    {
        id: 19,
        title: "An Introduction to Statistical Learning",
        author: "Gareth James",
        category: "AI",
        course: "Στατιστική & Μηχανική Μάθηση",
        cover: "assets/img/book-covers/19.jpg"
    },
    // 20. Ανάλυση Επίδοσης
    {
        id: 20,
        title: "The Art of Computer Systems Performance Analysis",
        author: "Raj Jain",
        category: "Networks",
        course: "Ανάλυση Επίδοσης",
        cover: "assets/img/book-covers/20.jpg"
    }
];
//ftiaxnei koutaki vivliou
function createBook(book){
    const li = document.createElement('li');
    li.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Συγγραφέας:</strong> ${book.author}</p>
        <p><strong>Κατηγορία:</strong> <span class="category-text">${book.category}</span></p>
        <p><strong>Μάθημα:</strong> <span class="course-text">${book.course}</span></p>
    `;

    li.style.cursor = "pointer";
    li.addEventListener("click", () => {
        window.location.href = `
        course-details.html?id=${book.id}
        `;
    });
    return li;
}

const booklist = document.getElementById("book-list");
const searchInputBooks = document.getElementById("searchInputBooks");
const categorySelectBooks = document.getElementById("categorySelectBooks");
const sortSelectBooks = document.getElementById("sortSelectBooks");

//emfanisei toy arxikoy pinaka me vivlia
function displayInitialBooks() {
    booklist.innerHTML = "";
    books.forEach(book => {
        const bookCard = createBook(book);
        booklist.appendChild(bookCard);
    });
}

if (booklist) {
    displayInitialBooks();
}


//analoga to filtro taksinomisi anazitisi emfanizei ta vivlia
function updateBooks() {
    if (!booklist) return;
    let results = [...books];

    if (searchInputBooks && searchInputBooks.value.trim() !== '') {
        const term = searchInputBooks.value.toLowerCase();
        results = results.filter(b => b.title.toLowerCase().includes(term) || (b.author && b.author.toLowerCase().includes(term)));
    }

    if (categorySelectBooks && categorySelectBooks.value !== 'all') {
        results = results.filter(b => b.category === categorySelectBooks.value);
    }

    if (sortSelectBooks && sortSelectBooks.value !== 'none') {
        if (sortSelectBooks.value === 'asc') {
            results.sort((a,b) => a.title.localeCompare(b.title, 'el'));
        } else if (sortSelectBooks.value === 'desc') {
            results.sort((a,b) => b.title.localeCompare(a.title, 'el'));
        }
    }

    booklist.innerHTML = "";
    if (results.length === 0) {
        list.innerHTML = "<li style='grid-column:1/-1; text-align:center; padding:40px; color:var(--primary-color)'>Δεν βρέθηκαν βιβλία.</li>";
        return;
    }
    results.forEach(book => {
        const card = createBook(book);
        list.appendChild(card);
    });
}

if (searchInputBooks) searchInputBooks.addEventListener('input', updateBooks);
if (categorySelectBooks) categorySelectBooks.addEventListener('change', updateBooks);
if (sortSelectBooks) sortSelectBooks.addEventListener('change', updateBooks);
