import styled from 'styled-components';

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background-color: #1F0049;
  position: sticky;
  top: 0;
  .nav-center {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-around;

  }
  .toggle-btn {
    background: transparent;
    font-size: 1.75rem;
    color: #FFFFFF;
    border: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .logo {
      display: none;
  }
  .logo-mobile {
      display: block;
  }

  .btn-container {
    display: flex;
    align-items: center;
  }

  img{
    height: 100%;
  }

  @media (min-width: 992px) {
    .nav-center {
      width: 100%;
      height: 100%;
    }
    .toggle-btn{
      display: none;
    }
    .logo {
      display: block;
    }
    .logo-mobile {
      display: none;
  }
}
`;
export default Wrapper;
