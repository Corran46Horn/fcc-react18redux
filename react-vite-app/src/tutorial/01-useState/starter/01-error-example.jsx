import { data } from '../../../data';
import { useState } from 'react';

const ErrorExample = () => {
  let [people, setPeople] = useState(data);

  const removeItem = (id) => {
    console.log(id);
    const newList = people.filter((person) => person.id !== id);
    setPeople(newList);
  };
  const clearAllItems = () => {
    setPeople([]);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type='button' onClick={() => removeItem(id)}>
              usuń mnie
            </button>
          </div>
        );
      })}
      <button className='btn' onClick={clearAllItems}>
        usuń nas
      </button>
    </div>
  );
};

export default ErrorExample;
