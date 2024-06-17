import Wrapper from '../assets/wrappers/StatItem';
import { IStatItemProps } from '../interfaces/IStatItemProps';

const StatItem = ({ count, title, icon,}: IStatItemProps) => {
  return (
    <Wrapper>
      <header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </header>
      <h5 className='title'>{title}</h5>
    </Wrapper>
  );
};
export default StatItem;
