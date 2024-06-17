import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Employee'
import EmployeeInfo from './EmployeeInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { IEmployee } from '../interfaces/IEmployee';
import { RiComputerLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { SiMarketo } from "react-icons/si";
import { GrMoney } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

day.extend(advancedFormat);

const depIcons = {
  'information technology': <RiComputerLine size={50} />,
  'human resources': <IoIosPeople size={50} />,
  'marketing': <SiMarketo size={50} />,
  'sales': <GrMoney size={50} />,
  'security': <MdOutlineSecurity size={50} />
};

const Employee = ({
  _id,
  department,
  email,
  name,
  dateOfBirth,
  phoneNumber,
  gender,
  ethnicity,
  isOnVacation
}: IEmployee) => {

  const date = day(dateOfBirth).format('MMM Do, YYYY');

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{depIcons[department]}</div>
        <div className='info'>
          <h5>{name}</h5>
          <p>{department}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <EmployeeInfo icon={<GoDotFill style={{ color: '#1F0049' }} />} text={name} field='name' />
          <EmployeeInfo icon={<GoDotFill style={{ color: '#1F0049' }} />} text={department} field='department' />
          <EmployeeInfo icon={<GoDotFill style={{ color: '#1F0049' }} />} text={email} field='email' />
          <EmployeeInfo icon={<GoDotFill style={{ color: '#1F0049' }} />} text={ethnicity} field='ethnicity' />
          <EmployeeInfo icon={<GoDotFill style={{ color: '#1F0049' }} />} text={phoneNumber} field='phone number' />
          <EmployeeInfo icon={<GoDotFill style={{ color: '#1F0049' }} />} text={gender} field='gender' />
          <EmployeeInfo icon={<GoDotFill style={{ color: '#1F0049' }} />} text={date} field='date of birth' />
          <EmployeeInfo icon={<GoDotFill style={{ color: '#1F0049' }} />} text={isOnVacation ? 'Yes' : 'No'} field='on vacation' />
        </div>
        <footer className='actions'>
          <Link to={`edit-employee/${_id}`} className='btn edit-btn'>
            Edit
          </Link>
          <Form method='post' action={`delete-employee/${_id}`}>
            <button type='submit' className='btn delete-btn'>
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Employee;
