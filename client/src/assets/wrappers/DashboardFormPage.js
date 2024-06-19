import styled from 'styled-components';

const Wrapper = styled.section`
width: 90%;
@media (min-width: 992px){
  width: 50vw;
}
  .form-title {
    margin-bottom: 2rem; 
  }
  span{
    background-color: rgb(226, 193, 232);
    color: #1F0049;
    padding: 0.3rem;
    font-weight: bold;
  }
  .form {
    margin: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
    border: solid 3px #1F0049;
    color: #1F0049;
    border-radius: var(--border-radius);
    padding: 2rem;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;

  }
  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }
  
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    img {
    display: block;
  }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }

  }
`;

export default Wrapper;
