import styled from 'styled-components';

const Wrapper = styled.section`
margin: 0;
background-color: rgb(226, 193, 232);
display: flex;
justify-content: center;
  .page {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  h2 {
    font-weight: 600;
    text-transform: none;
    color: #1F0049;
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: #1F0049;
    margin-bottom: 1.5rem;
    max-width: 35em;
  }

  .info{
  padding: 0px;

  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
    border: #1F0049 solid;
  }
  @media (min-width: 992px) {
    .page {
      
     
    }
    .main-img {
      display: block;
      margin-right: 0px;
      margin-left: 0;
      height: 45vh;
      width: auto;
    }
  }
`;
export default Wrapper;
