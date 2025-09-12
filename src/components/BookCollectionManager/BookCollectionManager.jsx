import React, { useState } from "react";
import "./BookCollectionManager.css";

function BookCollectionManager() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    publisher: "",
    ISBN: "",
  });

  const [books, setBooks] = useState([]);

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add a new book to the list
  function addBook() {
    if (
      formData.title.trim() &&
      formData.author.trim() &&
      formData.year.trim() &&
      formData.publisher.trim() &&
      formData.ISBN.trim()
    ) {
      setBooks((prevBooks) => [...prevBooks, formData]);
      setFormData({ title: "", author: "", year: "", publisher: "", ISBN: "" });
    }
  }

  // Delete a book from the list
  function deleteBook(index) {
    setBooks((prevBooks) => prevBooks.filter((_, i) => i !== index));
  }

  return (
    <div className="book-collection">
      <h1>Book Collection Manager</h1>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Enter book title..."
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Enter author name..."
          value={formData.author}
          onChange={handleChange}
        />
        <input
          type="number"
          name="year"
          placeholder="Enter a year..."
          value={formData.year}
          onChange={handleChange}
        />
        <input
          type="text"
          name="publisher"
          placeholder="Enter publisher name..."
          value={formData.publisher}
          onChange={handleChange}
        />
        <input
          type="text"
          name="ISBN"
          placeholder="Enter ISBN..."
          value={formData.ISBN}
          onChange={handleChange}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      <ol>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} by {book.author} ({book.year}) - {book.publisher}{" "}
            [ISBN: {book.ISBN}]
            <button onClick={() => deleteBook(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default BookCollectionManager;
