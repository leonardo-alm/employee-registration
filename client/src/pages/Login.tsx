import { Link, Form, redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { InputType, SubmitBtn } from '../components';
import customAxios from '../utils/customAxios';
import { toast } from 'react-toastify';

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customAxios.post('/auth/login', data);
    toast.success('Login successful');
    return redirect('/dashboard');
  } catch (error: any) {
    if (error.response.data.msg) {
      toast.error(error.response.data.msg);
    } else {
      toast.error('An error occurred.');
      return redirect('/dashboard');
    }
    return error
  }
};

const Login = () => {
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4>login</h4>
        <InputType type='email' name='email' />
        <InputType type='password' name='password' />
        <SubmitBtn formBtn={false} />
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
