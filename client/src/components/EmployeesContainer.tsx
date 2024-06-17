import Employee from './Employee';
import Wrapper from '../assets/wrappers/EmployeesContainer';
import { useMyEmployeesContext } from '../pages/MyEmployees';
import Pagenation from './Pagenation';

const EmployeesContainer = () => {
  const { data } = useMyEmployeesContext()!;

  const { employees, totalEmployees, numOfPages } = data;
  if (employees.length === 0) {
    return (
      <Wrapper>
        <div className='no-employees'>
          <h2>No employees to display...</h2>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalEmployees} employee{employees.length > 1 && 's'} found
      </h5>
      <div className='employees'>
        {employees.map((employee) => {
          return <Employee key={employee._id.toString()} {...employee} />;
        })}
      </div>
      {numOfPages > 1 && <Pagenation />}
    </Wrapper>
  );
};
export default EmployeesContainer;
