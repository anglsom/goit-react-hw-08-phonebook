import { NavigationLink } from './Author.styled';

export default function Author() {
  return (
    <div>
      <NavigationLink to="/login">Login</NavigationLink>
      <NavigationLink to="/register">Register</NavigationLink>
    </div>
  );
}