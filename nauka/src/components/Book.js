import React from 'react';

const Book = (props) => {
  const { img, title, author, children, id, getBook } = props;
  //console.log(props);
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className='book' key={id}>
      <img src={img} alt='Supercommunicators' />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>clickme</button>
      <h4>{author}</h4>
      {children}
    </article>
  );
};
export default Book;
