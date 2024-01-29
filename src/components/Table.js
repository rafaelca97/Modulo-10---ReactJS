import React from 'react';

const BookTable = ({ books }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Autor</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={index}>
            <td>{book.title}</td>
            <td>{book.author}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
