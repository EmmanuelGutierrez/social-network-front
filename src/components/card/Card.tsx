import React from "react";

interface CardI {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Card = ({ children, className }: CardI) => {
  return (
    <div
      className={` bg-secondary border border-gray-200 rounded-lg shadow dark:bg-black 
              dark:border-gray-700 duration-300  ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
