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
            <p>{country.name.common}</p>
          </div>
          <div className="data-country">
            <div className="data-left">
              <p>
                <strong>Native Name: </strong>
                {Object.entries(country.name.nativeName)[0][1].common}{" "}
              </p>

              <p>
                <strong>Population: </strong>
                {country.population}
              </p>
              <p>
                <strong>Region: </strong>
                {country.region}
              </p>
              <p>
                <strong>Sub Region: </strong>
                {country.subregion}
              </p>
              <p>
                <strong>Capital: </strong>
                {country.capital}
              </p>
            </div>
            <div className="data-right">
              <p>
                <strong>Top Level Domain: </strong>
                {country.tld}
              </p>
              <p>
                <strong>Currencies: </strong>
                {Object.entries(country.currencies)[0][1].name}
              </p>
              <p>
                <strong>Lenguajes: </strong>
                {Object.entries(country.languages)
                  .map((item) => item[1])
                  .join(", ")}
              </p>
            </div>
          </div>
          <div className="border-country">
            <p>
              <strong>Borders Countries: </strong>
            </p>
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
