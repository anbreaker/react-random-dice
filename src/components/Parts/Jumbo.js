import React from 'react';

export const Jumbo = ({ title, text }) => {
  return (
    <>
      <div className="jumbotron mt-4">
        {title}
        <ul>{text}</ul>
      </div>
    </>
  );
};
