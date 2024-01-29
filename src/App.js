import React, { useState } from 'react';
import BookForm from './components/Form';
import BookTable from './components/Table';

function App() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div className="container">
      <h1>Formulario Libros</h1>
      <BookForm onAddBook={handleAddBook} />
      <BookTable books={books} />
    </div>
  );
}

export default App;

