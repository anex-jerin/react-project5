import React from 'react';
import Item from './Item';
const Items = ({ data }) => {
  return data.map((item) => <Item key={item.id} {...item} />);
};

export default Items;
