import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';
import { Container } from './Item.styled';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Item({ name, number, id }) {
const [deleteContact, { isLoading }] = useDeleteContactMutation();
return (
<Container>
<span>
    - {name}: {number}
</span>
<Button
        type="button"
        variant="outline-danger"
        size="sm"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
>
    Delete
</Button>
</Container>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};