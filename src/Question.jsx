import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useState } from 'react';

const Question = ({ title, info }) => {
  const [text, setText] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setText(!text)}>
            {text ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {text && <p>{info}</p>}
    </article>
  );
};

export default Question;
