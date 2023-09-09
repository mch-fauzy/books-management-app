import { useState } from 'react';

const useMutation = ({
  apiFunc,
  onError,
  onSuccess
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async (data) => {
    setIsLoading(true);

    try {
      const response = await apiFunc(data);

      if (onSuccess) {
        onSuccess(response);
      }
    } catch (error) {
      if (onError) {
        onError(error);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    mutate,
  };
}

export default useMutation;
