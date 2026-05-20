import React from 'react'

const Card = ({ img, name, age, role , buttonText }) => {
  return (
    <div className="card"> 
      <img src={img} alt={name} />
      <h1>{name}, {age}</h1>
      <p>{role}</p>
      <button>{buttonText}</button>
    </div>
  );
};

export default Card;


