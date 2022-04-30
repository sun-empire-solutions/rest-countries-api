import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";

import { useCountry } from "../hooks/use-country";

const CountryDetailContainer = () => {
  const { country, isLoading, error, getCountry } = useCountry();
  const { code } = useParams();
  console.log(code);

  useEffect(() => {
    getCountry(code);
  }, []);

  useEffect(() => {
    console.log(country);
  }, [country]);

  return isLoading ? <Spinner /> : <div>{country.name.common}</div>;
};

export { CountryDetailContainer };
