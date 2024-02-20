import React from 'react';

const Book = (props) => {
  return (
    <article className='book'>
      <img src='./images/81G2riKjx4L._SY342_.jpg' alt='Supercommunicators' />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};
export default Book;
