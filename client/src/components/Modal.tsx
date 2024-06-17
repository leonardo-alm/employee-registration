import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Modal'
import { useDashboardContext } from '../pages/DashboardLayout';

import NavLinks from './NavLinks';
const Modal = () => {
  const { showModal, toggleModal } = useDashboardContext()!;

  return (
    <Wrapper>
      <div
        className={
          showModal ? 'modal-container show-modal' : 'modal-container'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleModal}>
            <FaTimes />
          </button>
          <NavLinks isModalOpen={true} />
        </div>
      </div>
    </Wrapper>
  );
};
export default Modal;
