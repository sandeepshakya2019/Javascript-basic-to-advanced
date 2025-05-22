const books = [
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publish: 1925,
    author: "F. Scott Fitzgerald",
    edition: "1st",
  },
  {
    title: "A Brief History of Time",
    genre: "Science",
    publish: 1988,
    author: "Stephen Hawking",
    edition: "1st",
  },
  {
    title: "1984",
    genre: "Dystopian",
    publish: 1949,
    author: "George Orwell",
    edition: "1st",
  },
  {
    title: "The Pragmatic Programmer",
    genre: "Technology",
    publish: 1999,
    author: "Andrew Hunt and David Thomas",
    edition: "1st",
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publish: 1960,
    author: "Harper Lee",
    edition: "1st",
  },
  {
    title: "Clean Code",
    genre: "Programming",
    publish: 2008,
    author: "Robert C. Martin",
    edition: "1st",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    genre: "History",
    publish: 2011,
    author: "Yuval Noah Harari",
    edition: "1st",
  },
  {
    title: "The Alchemist",
    genre: "Fiction",
    publish: 1988,
    author: "Paulo Coelho",
    edition: "2nd",
  },
  {
    title: "Atomic Habits",
    genre: "Self-help",
    publish: 2018,
    author: "James Clear",
    edition: "1st",
  },
  {
    title: "The Art of Computer Programming",
    genre: "Computer Science",
    publish: 1968,
    author: "Donald E. Knuth",
    edition: "1st",
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    publish: 1951,
    author: "J.D. Salinger",
    edition: "1st",
  },
  {
    title: "Thinking, Fast and Slow",
    genre: "Psychology",
    publish: 2011,
    author: "Daniel Kahneman",
    edition: "1st",
  },
  {
    title: "The Lean Startup",
    genre: "Business",
    publish: 2011,
    author: "Eric Ries",
    edition: "1st",
  },
  {
    title: "Deep Work",
    genre: "Self-help",
    publish: 2016,
    author: "Cal Newport",
    edition: "1st",
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish: 1937,
    author: "J.R.R. Tolkien",
    edition: "1st",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    publish: 1997,
    author: "J.K. Rowling",
    edition: "1st",
  },
  {
    title: "Cracking the Coding Interview",
    genre: "Programming",
    publish: 2015,
    author: "Gayle Laakmann McDowell",
    edition: "6th",
  },
  {
    title: "The Design of Everyday Things",
    genre: "Design",
    publish: 1988,
    author: "Don Norman",
    edition: "2nd",
  },
  {
    title: "Rich Dad Poor Dad",
    genre: "Finance",
    publish: 1997,
    author: "Robert Kiyosaki",
    edition: "1st",
  },
  {
    title: "The Psychology of Money",
    genre: "Finance",
    publish: 2020,
    author: "Morgan Housel",
    edition: "1st",
  },
];

console.log(books.length);
arr = books.filter((item) => {
  return item["genre"] === "Fiction";
});

arr = books.filter((item) => {
  return item["publish"] >= 2018 && item["genre"] === "Self-help";
});
console.log(arr);
