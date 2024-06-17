import { InputType, SubmitBtn } from '../components';
import { useOutletContext, redirect } from 'react-router-dom';
import { Form } from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import img from '../assets/images/profile.svg'
import customAxios from '../utils/customAxios';
import { IUser } from '../interfaces/IUser';

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customAxios.patch('/users/update-user', data);
    toast.success('Profile updated successfully');
    return redirect('/dashboard');
  } catch (error: any) {
    if (error.response.data.msg) {
      toast.error(error.response.data.msg);
    } else {
      toast.error('An error occurred.');
    }
    return error
  }
};

const Profile = () => {
  const { user }: { user: IUser } = useOutletContext();
  const { name, company, email } = user;

  return (
    <Wrapper>
      <Form method='post' className='form' encType='multipart/form-data'>
        <h4 className='form-title'>Edit profile</h4>
        <div className='form-center'>
          <InputType type='text' name='name' defaultValue={name} />
          <InputType
            type='text'
            name='company'
            labelText='company'
            defaultValue={company}
          />
          <InputType type='email' name='email' defaultValue={email} />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
