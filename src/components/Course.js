import React from 'react';

const Course = ({ name, tag, id, enroll }) => {
  return (
    <div className='tc grow bg-light-green br10 pa1 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=100x20`} />
      <div>
        <p>{name}</p>
        <p>{tag}</p>
        <p>{enroll}</p>
      </div>
    </div>
  );
}

export default Course;
