import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .employee-icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
  color: #1F0049;
    svg {
      color: var(--text-secondary-color);
    }
  }
  .employee-text {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }
  .field {
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    padding-right: 5px
  }

  .email{
    text-transform: lowercase;
  }
`;
export default Wrapper;
