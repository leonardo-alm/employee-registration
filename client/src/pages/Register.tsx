import { Form, redirect, Link } from 'react-router-dom';
import { InputType, SubmitBtn } from '../components';
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import customAxios from '../utils/customAxios';

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customAxios.post('/auth/register', data);
    toast.success('Registration successful');
    return redirect('/login');
  } catch (error: any) {
    if (error.response.data.msg) {
      toast.error(error.response.data.msg);
    } else {
      toast.error('An error occurred.');
    }
    return error
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4>Register</h4>
        <InputType type='text' name='name' />
        <InputType type='text' name='company' labelText='company' />
        <InputType type='email' name='email' />
        <InputType type='password' name='password' />
        <SubmitBtn formBtn={false} />
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
