import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Navigation from 'components/Navigation';
import Author from 'components/Author';
import Menu from 'components/Menu';
import { Header } from './Bar.styled';

export default function Bar() {
const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
return (
 <Header>
<Navigation />
     {isLoggedIn ? <Menu /> : <Author />}
</Header>
);
}