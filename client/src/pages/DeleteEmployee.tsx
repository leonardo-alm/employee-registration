import { toast } from 'react-toastify';
import { Params, redirect } from 'react-router-dom';
import customAxios from '../utils/customAxios';

export const action =
  async ({ params }: { params: Params }) => {
    try {
      
      await customAxios.delete(`/employees/${params.id}`);
      toast.success('Employee deleted successfully');
    } catch (error: any) {
      if (error.response.data.msg) {
        toast.error(error.response.data.msg);
      } else {
        toast.error('An error occurred.');
      }
    }
    return redirect('/dashboard');
  };
