import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './components/Book';
import Styles from './index.css';
import Button from './components/Button';

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
    id: 3,
  },
];

const booksList = books.map((book) => {
  return <Book {...book} key={book.id} />;
});

const EventExamples = () => {
  const handleFormInput = () => {
    console.log('form is alive');
  };
  return (
    <section>
      <form action=''>
        <h2>typical form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <Button></Button>
    </section>
  );
};

function BookList() {
  return (
    <section className='booklist'>
      <EventExamples />
      {booksList}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BookList />
  </>
);
