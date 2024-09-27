import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button className="toggle" onClick={onClick}>
      &#9776; {/* Ícone de hambúrguer */}
    </button>
  );
};

export default Button;
