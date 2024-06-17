import { Link, redirect } from 'react-router-dom';
import logo from '../assets/images/Print.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import customAxios from '../utils/customAxios';

export const loader = async () => {
  try {
    const { data } = await customAxios.get('/users/current-user');
    if (data) return redirect('/dashboard');
    return null
  } catch (error) {
    return null
  }
};

const LandingPage = () => {
  return (
    <Wrapper>
      <div className='container page'>
      <img src={logo} alt='logo' className='img main-img' />
        <div className='info'>
          <h2>
          Employee Registration App
          </h2>
          <p>
          This is a plataform where you can register and manage your employees. Register for free and try out our most recent features!
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn '>
            Login
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default LandingPage;
