const books = [
    // 1. Εισαγωγή στην Πληροφορική
    {
        id: 1,
        title: "Computer Science: An Overview",
        author: "J. Glenn Brookshear",
        image: "assets/img/cs_overview.jpg", 
        courseId: 1,
        category: "General Knowledge",
        
    },
    // 2. Προγραμματισμός Ι (Python)
    {
        id: 2,
        title: "Python Crash Course",
        author: "Eric Matthes",
        image: "assets/img/python_crash.jpg",
        courseId: 2,
        category: "Programming",
    },
    // 3. Προγραμματισμός ΙΙ (Advanced)
    {
        id: 3,
        title: "Clean Code",
        author: "Robert C. Martin",
        image: "assets/img/clean_code.jpg",
        courseId: 3,
        category: "Programming",
    },
    // 4. Βάσεις Δεδομένων
    {
        id: 4,
        title: "Database System Concepts",
        author: "Abraham Silberschatz",
        image: "assets/img/db_concepts.jpg",
        courseId: 4,
        category: "Databases",
        
    },
    // 5. Δομές Δεδομένων και Αλγόριθμοι
    {
        id: 5,
        title: "Introduction to Algorithms (CLRS)",
        author: "Thomas H. Cormen",
        image: "assets/img/algorithms.jpg",
        courseId: 5,
        category: "Programming",
    },
    // 6. Ανάλυση και Σχεδίαση Συστημάτων
    {
        id: 6,
        title: "Systems Analysis and Design",
        author: "Kendall & Kendall",
        image: "assets/img/system_analysis.jpg",
        courseId: 6,
        category: "Programming",
    },
    // 7. Δίκτυα Υπολογιστών
    {
        id: 7,
        title: "Computer Networking: A Top-Down Approach",
        author: "James Kurose",
        image: "assets/img/networks.jpg",
        courseId: 7,
        category: "Networks",
        
    },
    // 8. Ασφάλεια Πληροφοριών
    {
        id: 8,
        title: "Security in Computing",
        author: "Charles P. Pfleeger",
        image: "assets/img/security.jpg",
        courseId: 8,
        category: "Security",
        
    },
    // 9. Τεχνητή Νοημοσύνη
    {
        id: 9,
        title: "Artificial Intelligence: A Modern Approach",
        author: "Stuart Russell & Peter Norvig",
        image: "assets/img/ai_modern.jpg",
        courseId: 9,
        category: "AI",
        
    },
    // 10. Μηχανική Μάθηση
    {
        id: 10,
        title: "Hands-On Machine Learning",
        author: "Aurélien Géron",
        image: "assets/img/ml_hands_on.jpg",
        courseId: 10,
        category: "AI",
       
    },
    // 11. Ανάπτυξη Εφαρμογών Ιστού
    {
        id: 11,
        title: "HTML and CSS: Design and Build Websites",
        author: "Jon Duckett",
        image: "assets/img/web_duckett.jpg",
        courseId: 11,
        category: "Programming",
    },
    // 12. Κινητές Εφαρμογές
    {
        id: 12,
        title: "Android Programming: The Big Nerd Ranch Guide",
        author: "Bill Phillips",
        image: "assets/img/android.jpg",
        courseId: 12,
        category: "Programming",

    },
    // 13. Υπολογιστική Νέφη
    {
        id: 13,
        title: "Cloud Computing: Concepts, Technology & Architecture",
        author: "Thomas Erl",
        image: "assets/img/cloud.jpg",
        courseId: 13,
        category: "Programming",
       
    },
    // 14. Ανάλυση Δεδομένων
    {
        id: 14,
        title: "Python for Data Analysis",
        author: "Wes McKinney",
        image: "assets/img/data_analysis.jpg",
        courseId: 14,
        category: "Programming",
      
    },
    // 15. Σήματα και Συστήματα
    {
        id: 15,
        title: "Signals and Systems",
        author: "Alan V. Oppenheim",
        image: "assets/img/signals.jpg",
        courseId: 15,
        category: "Networks",
        
    },
    // 16. Διαχείριση Μεγάλων Δεδομένων
    {
        id: 16,
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        image: "assets/img/data_intensive.jpg",
        courseId: 16,
        category: "Databases",
    },
    // 17. Ασφάλεια Δικτύων
    {
        id: 17,
        title: "Cryptography and Network Security",
        author: "William Stallings",
        image: "assets/img/net_security.jpg",
        courseId: 17,
        category: "Security",
       
    },
    // 18. Ανάκτηση Πληροφοριών
    {
        id: 18,
        title: "Introduction to Information Retrieval",
        author: "Christopher D. Manning",
        image: "assets/img/ir_book.jpg",
        courseId: 18,
        category: "Databases",
       
    },
    // 19. Στατιστική & Μηχανική Μάθηση
    {
        id: 19,
        title: "An Introduction to Statistical Learning",
        author: "Gareth James",
        image: "assets/img/stat_learning.jpg",
        courseId: 19,
        category: "AI",
       
    },
    // 20. Ανάλυση Επίδοσης
    {
        id: 20,
        title: "The Art of Computer Systems Performance Analysis",
        author: "Raj Jain",
        image: "assets/img/performance.jpg",
        courseId: 20,
        category: "Networks",
        
    }
];
//ftiaxnei koutaki vivliou
function createBook(book){
    const li = document.createElement('li');
    li.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Συγγραφέας:</strong> ${book.author}</p>
        <p><strong>Κατηγορία:</strong> <span class="category-text">${book.category}</span></p>
    `;
    return li;
}

const list = document.getElementById("book-list");
const searchInputBooks = document.getElementById("searchInputBooks");
const categorySelectBooks = document.getElementById("categorySelectBooks");
const sortSelectBooks = document.getElementById("sortSelectBooks");

//emfanisei toy arxikoy pinaka me vivlia
function displayInitialBooks() {
    list.innerHTML = "";
    books.forEach(book => {
        const bookCard = createBook(book);
        list.appendChild(bookCard);
    });
}

displayInitialBooks();
//analoga to filtro taksinomisi anazitisi emfanizei ta vivlia
function updateBooks() {
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

    list.innerHTML = "";
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