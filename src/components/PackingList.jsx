import { Item } from '../components';
import { INITIAL_ITEMS } from '../data';

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {INITIAL_ITEMS.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
