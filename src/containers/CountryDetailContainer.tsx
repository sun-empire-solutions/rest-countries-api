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
      <div className="go-back-button">
        <button onClick={handleGoBack}>Back</button>
      </div>
      <div className="country-detail">
        <div className="flag-img">
          <img src={country.flags.png} alt="" />
        </div>
        <div className="country-description">
          <div className="country-name">{country.name.common}</div>
          <div className="data-country">
            <div className="data-left">
              <div className="info-item">
                <strong>Native Name: </strong>
                {Object.entries(country.name.nativeName)[0][1].common}
              </div>

              <div className="info-item">
                <strong>Population: </strong>
                {country.population}
              </div>
              <div className="info-item">
                <strong>Region: </strong>
                {country.region}
              </div>
              <div className="info-item">
                <strong>Sub Region: </strong>
                {country.subregion}
              </div>
              <div className="info-item">
                <strong>Capital: </strong>
                {country.capital}
              </div>
            </div>
            <div className="data-right">
              <div className="info-item">
                <strong>Top Level Domain: </strong>
                {country.tld}
              </div>
              <div className="info-item">
                <strong>Currencies: </strong>
                {Object.entries(country.currencies)[0][1].name}
              </div>
              <div className="info-item">
                <strong>Lenguajes: </strong>
                {Object.entries(country.languages)
                  .map((item) => item[1])
                  .join(", ")}
              </div>
            </div>
          </div>
          <div className="border-country">
            <div className="info-item">
              <strong>Borders Countries: </strong>
            </div>
            <div className="border-list">
              {country.borders?.map((border, index) => (
                <div key={index} className="border-list_item">
                  {border}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CountryDetailContainer };
