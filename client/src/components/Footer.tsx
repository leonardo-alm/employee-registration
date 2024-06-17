import Wrapper from '../assets/wrappers/Footer';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FooterItem from './FooterItem';
import { Link } from 'react-router-dom';

const links = [
  {
    icon: <FaLinkedin size={30} />,
    url: 'https://www.linkedin.com/school/adatechbr/',
  },
  {
    icon: <FaGithub size={30} />,
    url: 'https://github.com',
  },
  {
    icon: <FaWhatsapp size={30} />,
    url: 'https://api.whatsapp.com/send?phone=5511933387373',
  },
  {
    icon: <MdEmail size={30} />,
    url: 'mailto:adatech@gmail.com'
  }
]

const Footer = () => {
  return (
    <Wrapper>
      <div className='footer'>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.url}>
                <FooterItem icon={link.icon} url={link.url}  />
              </li>
            )
          })}
        </ul>
        <div>
          Copyright © 2024 - Developed by <Link to={'https://www.linkedin.com/in/cesarchavesterra/'} target="_blank" className='linkedin'>Cesar</Link>, <Link to={'https://www.linkedin.com/in/joel-luis-steffen/ '} target="_blank" className='linkedin'>Joel</Link> and <Link to={'https://www.linkedin.com/in/leonardo-oliv-almeida/'} target="_blank" className='linkedin'> Leonardo</Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default Footer;
