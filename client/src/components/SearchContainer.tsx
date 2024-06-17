import { InputType, InputSelect } from '.';
import { Form, useSubmit, Link } from 'react-router-dom';
import { ETHNICITY, GENDER, DEPARTMENT, SORT_BY } from '../../../utils/constants';
import { useMyEmployeesContext } from '../pages/MyEmployees';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useDashboardContext } from '../pages/DashboardLayout';

const SearchContainer = () => {
  const { searchValues } = useMyEmployeesContext()!;
  const { user } = useDashboardContext()!;
  const { name, department, gender, isOnVacation, ethnicity, sort } = searchValues;

  const submit = useSubmit();

  const debounce = (onChange: (form: HTMLFormElement) => void) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const form = e.currentTarget.form as HTMLFormElement;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000);
    };
  };
  return (
    <Wrapper>
      <Form className='form'>
        <h5 className='form-title'>search <span>{user.company}</span> employees</h5>
        <div className='form-center'>
          <InputType
            type='search'
            name='name'
            defaultValue={name}
            onChange={debounce((form) => {
              submit(form);
            })}
          />

          <InputSelect
            labelText='on vacation'
            name='isOnVacation'
            list={['all', 'yes', 'no']}
            defaultValue={isOnVacation}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <InputSelect
            labelText='department'
            name='department'
            list={['all', ...Object.values(DEPARTMENT)]}
            defaultValue={department}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />

          <InputSelect
            labelText='gender'
            name='gender'
            list={['all', ...Object.values(GENDER)]}
            defaultValue={gender}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <InputSelect
            labelText='ethnicity'
            name='ethnicity'
            list={['all', ...Object.values(ETHNICITY)]}
            defaultValue={ethnicity}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <InputSelect
            name='sort'
            defaultValue={sort}
            list={[...Object.values(SORT_BY)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
        </div>
      </Form>
    </Wrapper>
  );
};
export default SearchContainer;
