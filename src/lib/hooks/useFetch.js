import { toast } from 'react-toastify';
import { useCallback, useEffect, useState } from "react";

const useFetch = ({
  apiFunc,
  onSuccess,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await apiFunc();

      if (onSuccess) {
        onSuccess(response);
      }
    } catch (error) {
      if (onError) {
        onError(error.response.data);
      } else {
        toast({
          title: 'Error',
          description: 'Something went wrong!',
          status: 'error'
        });
      }
    } finally {
      setIsLoading(false);
    }
  }, [apiFunc, onError, onSuccess, toast]);

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading,
    refetch: fetchData,
  };
};

export default useFetch;
