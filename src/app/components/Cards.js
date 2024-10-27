import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-yellow-200 transition-transform transform hover:scale-105 pt-6 ml-20">
      <div className="font-bold text-xl mb-6 text-black text-center">{title}</div>
      <p className="text-gray-700 text-base text-justify p-2">{description}</p>
    </div>
  );
};

export default Card;
