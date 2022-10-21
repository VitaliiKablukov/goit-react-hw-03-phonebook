import { ContactItem } from './ContactItem/ContactItem';
import PropTypes from 'prop-types';
export const ContactList = ({ visbleContacts, deletecontact }) => {
  return (
    <ul>
      <ContactItem
        visbleContacts={visbleContacts}
        deletecontact={deletecontact}
      />
    </ul>
  );
};
ContactList.propTypes = {
  visbleContacts: PropTypes.array.isRequired,
  deletecontact: PropTypes.func.isRequired,
};
