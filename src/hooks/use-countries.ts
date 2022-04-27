import { useEffect, useState } from "react";

import { api } from "../api";
import { Country } from "../types";

const useCountries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState<Country[]>([]);
  const [nameFilter, setNameFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("All");
  const [error, setError] = useState<Error>(null);

  const handleResponse = async (path: string) => {
    setIsLoading(true);
    const { countries: countriesResponse, error } = await api.get(path);
    console.log(path, countriesResponse);

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

  const getCountriesByRegion = () => {
    if (regionFilter !== "All") {
      handleResponse(`/region/${regionFilter}`);
    } else {
      getAllCountries();
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  useEffect(() => {
    getCountriesByRegion();
  }, [regionFilter]);

  return {
    countries,
    isLoading,
    error,
    nameFilter,
    setNameFilter,
    regionFilter,
    setRegionFilter,
  };
};

export { useCountries };
