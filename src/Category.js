import React from 'react'

const Category = ({ filterdItem, allCategory }) => {
  return allCategory.map((category)=>{
    return <button onClick={()=>filterdItem(category)}>{category}</button>

  });
};

export default Category