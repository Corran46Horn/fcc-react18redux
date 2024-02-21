import React from 'react';

const Book = (props) => {
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt='Supercommunicators' />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};
export default Book;
