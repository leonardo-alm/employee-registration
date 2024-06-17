import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 2rem;
  padding: 0 1rem; /* Add padding for mobile screens */
  h2 {
    text-transform: none;
    margin-bottom: 3rem;
  }
  img {
    width: 20%;
    height: 10%;
  }

.no-employees{
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #1F0049;
  }

  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .employees {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    width: 100%; /* Ensure it doesn't overflow */

  }
  @media (min-width: 1120px) {
    .employees {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
`;
export default Wrapper;
