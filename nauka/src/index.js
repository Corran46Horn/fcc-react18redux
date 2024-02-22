import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './components/Book';
import Styles from './index.css';

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/81G2riKjx4L._SY342_.jpg',
    id: 1,
  },
  {
    author: 'Anna Kowalska',
    title: 'Interesting Facts For Curious Minds',
    img: './images/81G2riKjx4L._SY342_.jpg',
    id: 2,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 3,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg',
    id: 4,
  },
];

function BookList() {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BookList />
  </>
);
