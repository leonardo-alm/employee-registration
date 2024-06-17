import { toast } from 'react-toastify';
import { EmployeesContainer, SearchContainer } from '../components';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
import customAxios from '../utils/customAxios';
import { IMyEmployeesContext } from '../interfaces/IMyEmployeesContext';

export const loader = async ({ request }: { request: Request }) => {
  const params = Object.fromEntries(
    Array.from(new URL(request.url).searchParams.entries())
  );

  try {
    const { data } = await customAxios.get('/employees', {
      params,
    });
    return { data, searchValues: { ...params } };
  } catch (error: any) {
    if (error.response.data.msg) {
      toast.error(error.response.data.msg);
    } else {
      toast.error('An error occurred.');
    }
    return error
  }
};

const MyEmployeesContext = createContext<IMyEmployeesContext | undefined>(undefined);

const MyEmployees = () => {
  const { searchValues, data } = useLoaderData() as IMyEmployeesContext;

  return (
    <MyEmployeesContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <EmployeesContainer />
    </MyEmployeesContext.Provider>
  );
};

export const useMyEmployeesContext = () => useContext(MyEmployeesContext);

export default MyEmployees;
