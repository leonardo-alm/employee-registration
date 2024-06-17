import styled from 'styled-components';

const Wrapper = styled.nav`
  height: 100%;
  .nav-links {
    display: none;
  }
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .modal-container {
      background: var(--background-secondary-color);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-modal {
      margin-left: 0;
    }
    .nav-links {
      display: flex;
      height: 100%;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: #FFFFFF;
      padding: 1rem;
      height: 100%;
      text-transform: capitalize;

    }
    .nav-link:hover {
      background-color: #FFFFFF;
      color: #1F0049;
    }
    .active {
      color: #f1a2ff;
    }
    .pending {
      background: var(--background-color);
    }
  }
`;
export default Wrapper;
