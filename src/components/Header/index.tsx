import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <h1>Logo</h1>
      <nav>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </HeaderContainer>
  );
}
