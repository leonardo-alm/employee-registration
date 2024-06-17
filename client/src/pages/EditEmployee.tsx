import { GENDER, ETHNICITY, DEPARTMENT } from '../../../utils/constants';
import { InputType, InputSelect, SubmitBtn } from '../components';
import { Params, useLoaderData } from 'react-router-dom';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import customAxios from '../utils/customAxios';
import { IEmployee } from '../interfaces/IEmployee';

day.extend(advancedFormat);

export const loader = async ({ params }: { params: Params }) => {
  try {
    const { data } = await customAxios.get(`/employees/${params.id}`);
    return data;
  } catch (error: any) {
    if (error.response.data.msg) {
      toast.error(error.response.data.msg);
    } else {
      toast.error('An error occurred.');
    }
    return redirect('/dashboard');
  }
}


export const action = async ({ request, params }: { request: Request, params: Params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customAxios.patch(`/employees/${params.id}`, data);
    toast.success('Employee edited successfully');
    return redirect('/dashboard');
  } catch (error: any) {
    if (error.response.data.msg) {
      toast.error(error.response.data.msg);
    }
    else {
      toast.error('An error occurred.');
    }
    return error;
  };
}

const EditEmployee = () => {
  const { employee } = useLoaderData() as { employee: IEmployee }
  const dateOfBirth = day(employee.dateOfBirth).format('YYYY-MM-DD');

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h5 className='form-title'>add employee</h5>
        <div className='form-center'>
          <InputType type='text' labelText='name' name='name' defaultValue={employee.name} />
          <InputType type='email' labelText='email' name='email' defaultValue={employee.email} />
          <InputType type='text' labelText='phone' name='phoneNumber' defaultValue={employee.phoneNumber} />
          <InputType type='date' labelText='date of birth' name='dateOfBirth' defaultValue={dateOfBirth} />
          <InputSelect
            labelText='gender'
            name='gender'
            defaultValue={employee.gender}
            list={Object.values(GENDER)}
          />

          <InputSelect
            labelText='ethnicity'
            name='ethnicity'
            defaultValue={employee.ethnicity}
            list={Object.values(ETHNICITY)}
          />
          <InputSelect
            labelText='department'
            name='department'
            defaultValue={employee.department}
            list={Object.values(DEPARTMENT)}
          />

          <InputSelect
            labelText='on vacation'
            name='isOnVacation'
            list={['yes', 'no']}
            defaultValue={employee.isOnVacation ? 'yes' : 'no'}
          />
          <SubmitBtn formBtn />
        </div>

      </Form>
    </Wrapper>
  );
};

export default EditEmployee;
