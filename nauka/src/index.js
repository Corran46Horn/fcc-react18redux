import React from 'react';
import ReactDOM from 'react-dom/client';

import books from './books';

import Book from './components/Book';
import './index.css';

function BookList() {
  return (
    <>
      <h1 className='title'>amazon best sellers</h1>
      <section className='booklist'>
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BookList />
  </>
);
