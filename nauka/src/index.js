import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './components/Book';
import Styles from './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book author='Anna Kowalska' title='Supercommunicators' />
      <Book author='Charles Duhigg' title='Supercommunicators' />
      <Book author='Kornel Wiśniewski' title='Supercommunicators' />
      <Book author='Michał Sałata' title='Supercommunicators' />
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BookList />
  </>
);
