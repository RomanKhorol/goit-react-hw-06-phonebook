import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import PropTypes from 'prop-types';
import { AbonentCard, AbonentText, AbonentDeleteBnt } from './Item.styled';

export const Item = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <AbonentCard>
      <AbonentText>{contact.name}:</AbonentText>
      <AbonentText>{contact.number}</AbonentText>
      <AbonentDeleteBnt onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </AbonentDeleteBnt>
    </AbonentCard>
  );
};

Item.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
