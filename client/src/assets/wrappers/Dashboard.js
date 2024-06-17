import styled from 'styled-components';

const Wrapper = styled.section`
    width: 100vw;
  .dashboard {
    position: relative;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    background-color: rgb(226, 193, 232);
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 3rem 8rem;
    padding-bottom: 16rem; 
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: 1fr;
    }
    .dashboard-page {
      width: 70%;

    }
  }
`;
export default Wrapper;
