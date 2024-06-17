import styled from 'styled-components';

const Wrapper = styled.footer`
.footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10rem;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #1F0049;
    color: #FFFFFF;
    ;
}

.linkedin{
  color: #FFFFFF;
}

.linkedin:hover {
  text-decoration: underline;
}

ul{
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-around;
  color: #FFFFFF;
}

li{
color: #FFFFFF;
}

div {
  text-align: center;
  text-justify: auto;
}

@media (min-width: 992px) {
  ul{
    width: 15%;
}
}

`

export default Wrapper;
