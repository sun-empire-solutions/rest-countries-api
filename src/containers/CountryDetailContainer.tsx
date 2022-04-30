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
    <div className="detail-content">
      <div className="div-button">
        <button onClick={handleGoBack}>Back</button>
      </div>
      <div className="country-detail">
        <div className="flag-img">
          <img src={country.flags.png} alt="" />
        </div>
        <div className="description-country">
          <div className="name-country">
            <h1>{country.name.common}</h1>
          </div>
          <div className="descrip">
            <div className="descrip1">
              <h5>
                <strong>Native Name: </strong>
                {country.name.nativeName.spa.common}
              </h5>
              <h5>
                <strong>Population: </strong>
                {country.population}
              </h5>
              <h5>
                <strong>Region: </strong>
                {country.region}
              </h5>
              <h5>
                <strong>Sub Region: </strong>
                {country.subregion}
              </h5>
              <h5>
                <strong>Capital: </strong>
                {country.capital}
              </h5>
            </div>
            <div className="descrip2">
              <h5>
                <strong>Top Level Domain: </strong>
                {country.tld}
              </h5>
              <h5>
                <strong>Currencies: </strong>
                {country.currencies.UYU.name}
              </h5>
              <h5>
                <strong>Lenguajes: </strong>
                {country.languages.spa}
              </h5>
            </div>
          </div>
          <div className="border-country">
            <h5>
              <strong>Borders Countries: </strong>
            </h5>
            <p>{country.borders}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CountryDetailContainer };
