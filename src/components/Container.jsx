import { memo, useState } from 'react';

import { Box } from './Box';
import { Dustbin } from './Dustbin';

export const Container = memo(function Container() {
  const [items, setItems] = useState(["Glass", "Banana", "Paper"]); 
  const [dropeedItems, setDroppedItems] = useState([]);

  const removeDropedItem = (item) => {
    setItems(prev => [...prev, item]);
    setDroppedItems(prev => prev.filter(name => name !== item));
  };

  return (
    <div>
			<div style={{ overflow: 'hidden', clear: 'both', textAlign: 'center' }}>
				<Dustbin />
			</div>
			<div style={{ overflow: 'hidden', clear: 'both' }}>
				{items.map((item, i) => (
          <Box setDroppedItems={setDroppedItems} setItems={setItems} name={item} key={i} />
        ))}
			</div>
      <ul>
        {dropeedItems.map((item, i) => (
          <li key={i}>{item} <i onClick={() => removeDropedItem(item)}>x</i></li>
        ))}
      </ul>
		</div>
  );
});
