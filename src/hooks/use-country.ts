import { useState } from "react";

import { api } from "../api";
import { Country } from "../types";

const useCountry = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState<Country>(null);
  const [error, setError] = useState<Error>(null);

  const handleResponse = async (path: string) => {
    setIsLoading(true);
    const { response, error } = await api.get(path);
    console.log(path, response);

    if (error) {
      setError(error);
    } else {
      setCountry(response[0] as Country);
    }
    setIsLoading(false);
  };

  const getCountry = (code: string) => {
    handleResponse(`/alpha/${code}`);
  };

  return {
    country,
    isLoading,
    error,
    getCountry,
  };
};

export { useCountry };
