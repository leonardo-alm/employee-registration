import styled from 'styled-components';

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .modal-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }
  .show-modal {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: rgb(226, 193, 232);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--border-radius);
    position: relative;
    display: flex;
    padding-top: 32vh;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
  }
/*   .nav-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--fluid-width);
    background-color: #1F0049;
    color: white;
    }
  .nav-link {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFFFFF;
      padding: 1rem;
      width: 100%;
      text-transform: capitalize;
    }
    .nav-link:hover {
      background-color: #FFFFFF;
      color: #1F0049;
    } */
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: #f1a2ff;
  }
`;
export default Wrapper;
