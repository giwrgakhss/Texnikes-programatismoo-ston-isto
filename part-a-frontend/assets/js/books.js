const books = [
    // 1. Εισαγωγή στην Πληροφορική
    {
        id: 1,
        title: "Computer Science: An Overview",
        author: "J. Glenn Brookshear",
        image: "assets/img/cs_overview.jpg", 
        courseId: 1,
        
    },
    // 2. Προγραμματισμός Ι (Python)
    {
        id: 2,
        title: "Python Crash Course",
        author: "Eric Matthes",
        image: "assets/img/python_crash.jpg",
        courseId: 2,
    },
    // 3. Προγραμματισμός ΙΙ (Advanced)
    {
        id: 3,
        title: "Clean Code",
        author: "Robert C. Martin",
        image: "assets/img/clean_code.jpg",
        courseId: 3,
    },
    // 4. Βάσεις Δεδομένων
    {
        id: 4,
        title: "Database System Concepts",
        author: "Abraham Silberschatz",
        image: "assets/img/db_concepts.jpg",
        courseId: 4,
        
    },
    // 5. Δομές Δεδομένων και Αλγόριθμοι
    {
        id: 5,
        title: "Introduction to Algorithms (CLRS)",
        author: "Thomas H. Cormen",
        image: "assets/img/algorithms.jpg",
        courseId: 5,
    },
    // 6. Ανάλυση και Σχεδίαση Συστημάτων
    {
        id: 6,
        title: "Systems Analysis and Design",
        author: "Kendall & Kendall",
        image: "assets/img/system_analysis.jpg",
        courseId: 6,
    },
    // 7. Δίκτυα Υπολογιστών
    {
        id: 7,
        title: "Computer Networking: A Top-Down Approach",
        author: "James Kurose",
        image: "assets/img/networks.jpg",
        courseId: 7,
        
    },
    // 8. Ασφάλεια Πληροφοριών
    {
        id: 8,
        title: "Security in Computing",
        author: "Charles P. Pfleeger",
        image: "assets/img/security.jpg",
        courseId: 8,
        
    },
    // 9. Τεχνητή Νοημοσύνη
    {
        id: 9,
        title: "Artificial Intelligence: A Modern Approach",
        author: "Stuart Russell & Peter Norvig",
        image: "assets/img/ai_modern.jpg",
        courseId: 9,
        
    },
    // 10. Μηχανική Μάθηση
    {
        id: 10,
        title: "Hands-On Machine Learning",
        author: "Aurélien Géron",
        image: "assets/img/ml_hands_on.jpg",
        courseId: 10,
       
    },
    // 11. Ανάπτυξη Εφαρμογών Ιστού
    {
        id: 11,
        title: "HTML and CSS: Design and Build Websites",
        author: "Jon Duckett",
        image: "assets/img/web_duckett.jpg",
        courseId: 11,
    },
    // 12. Κινητές Εφαρμογές
    {
        id: 12,
        title: "Android Programming: The Big Nerd Ranch Guide",
        author: "Bill Phillips",
        image: "assets/img/android.jpg",
        courseId: 12,

    },
    // 13. Υπολογιστική Νέφη
    {
        id: 13,
        title: "Cloud Computing: Concepts, Technology & Architecture",
        author: "Thomas Erl",
        image: "assets/img/cloud.jpg",
        courseId: 13,
       
    },
    // 14. Ανάλυση Δεδομένων
    {
        id: 14,
        title: "Python for Data Analysis",
        author: "Wes McKinney",
        image: "assets/img/data_analysis.jpg",
        courseId: 14,
      
    },
    // 15. Σήματα και Συστήματα
    {
        id: 15,
        title: "Signals and Systems",
        author: "Alan V. Oppenheim",
        image: "assets/img/signals.jpg",
        courseId: 15,
        
    },
    // 16. Διαχείριση Μεγάλων Δεδομένων
    {
        id: 16,
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        image: "assets/img/data_intensive.jpg",
        courseId: 16,
    },
    // 17. Ασφάλεια Δικτύων
    {
        id: 17,
        title: "Cryptography and Network Security",
        author: "William Stallings",
        image: "assets/img/net_security.jpg",
        courseId: 17,
       
    },
    // 18. Ανάκτηση Πληροφοριών
    {
        id: 18,
        title: "Introduction to Information Retrieval",
        author: "Christopher D. Manning",
        image: "assets/img/ir_book.jpg",
        courseId: 18,
       
    },
    // 19. Στατιστική & Μηχανική Μάθηση
    {
        id: 19,
        title: "An Introduction to Statistical Learning",
        author: "Gareth James",
        image: "assets/img/stat_learning.jpg",
        courseId: 19,
       
    },
    // 20. Ανάλυση Επίδοσης
    {
        id: 20,
        title: "The Art of Computer Systems Performance Analysis",
        author: "Raj Jain",
        image: "assets/img/performance.jpg",
        courseId: 20,
        
    }
];
function createBook(book){
    const li = document.createElement('li');
    li.innerHTML = `
        <h2>${book.title}</h2>
        <p>Συγγραφέας: ${book.author}</p>
        `;
    return li;
}
const list = document.getElementById("book-list");

function displayBooks() {
    books.forEach(book => {
        const bookCard = createBook(book);
        list.appendChild(bookCard);
    });
}
displayBooks();