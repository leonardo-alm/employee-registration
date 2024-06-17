import { StatsContainer } from '../components';
import { useLoaderData } from 'react-router-dom';
import { IDefaultStats } from '../interfaces/IDefaultStats';
import customAxios from '../utils/customAxios';

export const loader = async () => {
  const response = await customAxios.get('/employees/stats');
  return response.data;
};

const Stats = () => {
  const { defaultStats } = useLoaderData() as { defaultStats: IDefaultStats }

  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
    </>
  );
};

export default Stats;
