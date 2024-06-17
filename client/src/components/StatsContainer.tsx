import Wrapper from '../assets/wrappers/StatsContainer';
import StatItem from './StatItem';
import { IDefaultStats } from '../interfaces/IDefaultStats';
import { RiComputerLine } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { SiMarketo } from "react-icons/si";

const StatsContainer = ({ defaultStats }: { defaultStats: IDefaultStats }) => {
  const stats = [
    {
      title: 'information technology',
      count: defaultStats['information technology'] || 0,
      icon: <RiComputerLine size={50} />,
    },
    {
      title: 'human resources',
      count: defaultStats['human resources'] || 0,
      icon: <IoIosPeople size={50} />,
    },
    {
      title: 'marketing',
      count: defaultStats?.marketing || 0,
      icon: <SiMarketo size={50} />,
    },
    {
      title: 'sales',
      count: defaultStats?.sales || 0,
      icon: <GrMoney size={50} />,
    },
    {
      title: 'security',
      count: defaultStats?.security || 0,
      icon: <MdOutlineSecurity size={50} />
    },
  ];
  return (
    <Wrapper>
      <h5>employees by department</h5>
      <div className='stats-data'>
        {stats.map((item) => {
          return <StatItem key={item.title} {...item} />;
        })}
      </div>

    </Wrapper>
  );
};
export default StatsContainer;
