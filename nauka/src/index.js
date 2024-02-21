import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './components/Book';
import Styles from './index.css';

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/81G2riKjx4L._SY342_.jpg',
  },
  {
    author: 'Anna Kowalska',
    title: 'Interesting Facts For Curious Minds',
    img: './images/81G2riKjx4L._SY342_.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
];

const booksList = books.map((book) => {
  const { img, title, author, id } = book;
  return <Book img={img} author={author} title={title} key={id} />;
});

function BookList() {
  return <section className='booklist'>{booksList}</section>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BookList />
  </>
);
