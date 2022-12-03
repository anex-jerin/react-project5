import './App.css';
import Items from './Items';
import itemsData from './data';
import { useState } from 'react';
import Category from './Category';
function App() {
  const allCategory = [
    'all',
    ...new Set(itemsData.map((item) => item.category)),
  ];
  const [data, setData] = useState(itemsData);
  const filterdItem = (category) => {
    if (category !== 'all') {
      const newItem = itemsData.filter((items) => items.category === category);
      setData(newItem);
    }else setData(itemsData)
  };

  return (
    <section className='section'>
      <h1>Our Menu</h1>
      <div className='category'>
        <Category filterdItem={filterdItem} allCategory={allCategory} />
      </div>
      <div className='items'>
        <Items data={data} />
      </div>
    </section>
  );
}

export default App;
