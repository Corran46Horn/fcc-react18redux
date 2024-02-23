import { data } from '../../../data';
import { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const deleteAll = () => {
    setPeople([]);
  };
  const deleteMe = (id) => {
    console.log(id);
    const newList = people.filter((person) => person.id !== id);
    setPeople(newList);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              onClick={() => {
                deleteMe(id);
              }}
            >
              usuń mnie
            </button>
          </div>
        );
      })}
      <button className='btn' onClick={deleteAll}>
        Usuń nas
      </button>
    </div>
  );
};

export default UseStateArray;
