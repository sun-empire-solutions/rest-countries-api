import { useEffect, useState } from "react";

import { api } from "../api";
import { Country } from "../types";

const useCountries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState<Country[]>([]);
  const [nameFilter, setNameFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [error, setError] = useState<Error>(null);

  const handleResponse = async (path: string) => {
    setIsLoading(true);
    const { countries: countriesResponse, error } = await api.get(path);
    if (error) {
      setError(error);
    } else {
      setCountries(countriesResponse);
    }
    setIsLoading(false);
  };

  const getAllCountries = () => {
    handleResponse("/all");
  };

  const getCountriesByName = () => {
    handleResponse(`/name/${nameFilter}`);
  };

  const getCountriesByRegion = () => {
    handleResponse(`/region/${regionFilter}`);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  useEffect(() => {
    nameFilter && getCountriesByName();
  }, [nameFilter]);

  useEffect(() => {
    regionFilter && getCountriesByRegion();
  }, [regionFilter]);

  return {
    countries,
    isLoading,
    error,
    nameFilter,
    setNameFilter,
    setRegionFilter,
  };
};

export { useCountries };
