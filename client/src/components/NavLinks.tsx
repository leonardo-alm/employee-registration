import { useDashboardContext } from '../pages/DashboardLayout';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/NavLinks';

const NavLinks = ({ isModalOpen }: { isModalOpen: boolean }) => {
  const { toggleModal } = useDashboardContext()!;
  return (
    <Wrapper>
      <div className={isModalOpen ? 'modal-nav-links' : 'nav-links'}>
        {links.map((link) => {
          const { text, path} = link;
          return (
            <NavLink
              to={path}
              key={text}
              className={isModalOpen ? 'modal-nav-link' : 'nav-link'}
              onClick={isModalOpen ? toggleModal : undefined }
              end
            >
              {text}
            </NavLink>
          );
        })}
      </div>

    </Wrapper>

  );
};
export default NavLinks;
