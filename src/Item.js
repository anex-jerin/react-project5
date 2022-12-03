import React from 'react';

const item = ({ title, price, category, desc, img }) => {
  return (
    <>
      <div className='item'>
        <div className='left'>
          <img src={img} alt='' />
        </div>
        <div className='right'>
          <div className='head'>
            <h3>{title}</h3>
            <h3 className='price'>${price}</h3>
          </div>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default item;
