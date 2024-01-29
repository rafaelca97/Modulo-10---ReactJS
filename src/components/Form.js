import React, { useState } from 'react';

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onAddBook({ title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Título:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Autor:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <button type="submit">Añadir</button>
    </form>
  );
};

export default BookForm;
