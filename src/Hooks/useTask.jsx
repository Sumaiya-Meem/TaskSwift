

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useTask = () => {
    const axiosSecure = useAxiosSecure();
    const { isLoading, refetch, data:allTask=[]} = useQuery({
        queryKey: ['taskData'],
        queryFn: async () =>
        {
            const res = await axiosSecure.get('/tasks')
            return res.data;
        }
      })
      return [allTask,isLoading,refetch]
};

export default useTask;