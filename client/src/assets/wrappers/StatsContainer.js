import styled from 'styled-components';

const Wrapper = styled.section`
.stats-data{
  display: grid;
  row-gap: 2rem;
}

.img{
  margin-top: 6rem;
  display: flex;
  justify-content: center;
}

h5{
  margin-bottom: 50px;
  color: #1F0049;
}

img {
    width: 40%;
    height: 10%;
    display: none;
  }

  @media (min-width: 818px) {
    .stats-data{
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
}
  @media (min-width: 1120px) {
    .stats-data{
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    img {
    display: block;
  }
  
  }
`;
export default Wrapper;
