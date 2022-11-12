import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { WelcomeText, MenuContainer } from './Menu.styled';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Menu() {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <MenuContainer>
      <WelcomeText>Welcome {userName}</WelcomeText>
      <Button
        type="button"
        variant="outline-danger"
        size="sm"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </Button>{' '}
    </MenuContainer>
  );
}