import { NavLink } from "react-router-dom";
import styled from "styled-components";

const styledBtn = styled.button`
  background: red;
`;
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">mixmaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            about
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: var(--white);
  .nav-center {
    max-width: var(--max-width);
    width: var(--view-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    @media (min-width: 768px) {
      flex-direction: row;
      margin-top: 0;
    }
    .nav-link {
      color: var(--grey-900);
      padding: 0.5rem;
      padding-left: 0;
      text-transform: capitalize;
      transition: var(--transition);
      letter-spacing: 2px;
      :hover {
        color: var(--primary-500);
      }
    }
    .active {
      color: var(--primary-500);
    }
  }
`;
export default Navbar;
