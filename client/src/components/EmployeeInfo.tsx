import { ReactNode } from 'react';
import Wrapper from '../assets/wrappers/EmployeeInfo';

const EmployeeInfo = ({ icon, text, field }: { icon: ReactNode, text: string, field: string }) => {
  return (
    <Wrapper>
      <span className='employee-icon'>{icon}</span>
      <span className='field'>{field}:</span>
      <span className={`employee-text ${field}`}>{text}</span>
    </Wrapper>
  );
};
export default EmployeeInfo;
