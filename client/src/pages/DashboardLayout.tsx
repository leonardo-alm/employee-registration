import { toast } from 'react-toastify';
import { IDashboardContextValue } from '../interfaces/IDashboardContextValue';
import { Navbar, Loading, Modal } from '../components';
import { createContext, useContext, useEffect, useState } from 'react';
import { Outlet, redirect, useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import customAxios from '../utils/customAxios';
import { IUser } from '../interfaces/IUser';
import Footer from '../components/Footer';

export const loader = async () => {
  try {
    const { data } = await customAxios.get('/users/current-user');
    return data;
  } catch (error) {
    return redirect('/');
  }
};

const DashboardContext = createContext<IDashboardContextValue | undefined>(undefined)

const DashboardLayout = () => {
  const { user } = useLoaderData() as { user: IUser };
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const [showModal, setShowModal] = useState(false);
  const [isAuthError, setIsAuthError] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const logoutUser = async () => {
    navigate('/');
    await customAxios.get('/auth/logout');
    toast.success('Logging out...');
  };

  customAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        setIsAuthError(true);
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (!isAuthError) return;
    logoutUser();
  }, [isAuthError]);

  return (
    <DashboardContext.Provider
      value={{
        user,
        showModal,
        toggleModal,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className='dashboard'>
          <Modal />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
            </div>
            <Footer />
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
