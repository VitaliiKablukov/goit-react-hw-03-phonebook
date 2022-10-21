import PropTypes from 'prop-types';
import { Button } from './ContactItem.styled';
export const ContactItem = ({ visbleContacts, deletecontact }) => {
  return visbleContacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        {name}: {number}
        <Button type="button" onClick={() => deletecontact(id)}>
          delete:{name}
        </Button>
      </li>
    );
  });
};
ContactItem.propTypes = {
  visbleContacts: PropTypes.array.isRequired,
  deletecontact: PropTypes.func.isRequired,
};
