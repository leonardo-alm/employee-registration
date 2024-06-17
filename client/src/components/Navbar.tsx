import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft } from 'react-icons/fa';
import { useDashboardContext } from '../pages/DashboardLayout';
import LogoutContainer from './LogoutContainer';
import NavLinks from './NavLinks';
import logo from '../assets/images/Print.svg';

const Navbar = () => {
  const { toggleModal } = useDashboardContext()!;
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleModal}>
          <FaAlignLeft />
        </button>
        <img src={logo} alt="" className='logo' />
        <NavLinks isModalOpen={false} />
        <img src={logo} alt="" className='logo-mobile' />
        <div className='btn-container'>
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
