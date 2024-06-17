import { GENDER, ETHNICITY, DEPARTMENT } from '../../../utils/constants';
import { InputType, InputSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customAxios from '../utils/customAxios';
import { useDashboardContext } from './DashboardLayout';

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  try {
    await customAxios.post('/employees', data);
    toast.success('Employee added successfully ');
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

const AddEmployee = () => {
  const { user } = useDashboardContext()!;
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h5 className='form-title'>add <span>{user.company}</span> employee</h5>
        <div className='form-center'>
          <InputType type='text' labelText='name' name='name' />
          <InputType type='email' labelText='email' name='email' />
          <InputType type='text' labelText='phone' name='phoneNumber' />
          <InputType type='date' labelText='date of birth' name='dateOfBirth' />
          <InputSelect
            labelText='gender'
            name='gender'
            defaultValue={GENDER.FEMALE}
            list={Object.values(GENDER)}
          />
          
          <InputSelect
            labelText='ethnicity'
            name='ethnicity'
            defaultValue={ETHNICITY.ASIAN}
            list={Object.values(ETHNICITY)}
          />
          <InputSelect
            labelText='department'
            name='department'
            defaultValue={DEPARTMENT.HR}
            list={Object.values(DEPARTMENT)}
          />
          <SubmitBtn formBtn />
        </div>

      </Form>
    </Wrapper>
  );
};

export default AddEmployee;
