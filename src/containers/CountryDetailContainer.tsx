import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";

import { useCountry } from "../hooks/use-country";

const CountryDetailContainer = () => {
  const { country, isLoading, error, getCountry } = useCountry();
  const { code } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getCountry(code);
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <span>{country.name.common}</span>
    </div>
  );
};

export { CountryDetailContainer };
