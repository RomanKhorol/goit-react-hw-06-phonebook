import { useSelector } from 'react-redux';
import { Item } from 'components/Item/Item';
import { AbonentListUl } from './AbonentList.styled';
const shortid = require('shortid');

export const ItemList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filterValue = useSelector(state => state.filter);
  const getVisibleContact = () => {
    const normalizedFilter = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  let visibleItems = getVisibleContact();

  return (
    <div>
      <AbonentListUl>
        {visibleItems.map(contact => {
          return <Item key={shortid.generate()} contact={contact} />;
        })}
      </AbonentListUl>
    </div>
  );
};

export default ItemList;
