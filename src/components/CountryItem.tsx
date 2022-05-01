import { Link } from "react-router-dom";

import { Country } from "../types";

const CountryItem = ({
  item: {
    flags: { png: countryFlagUrl },
    name: { common: countryCommonName },
    population,
    region,
    capital,
    cca2: countryCode,
  },
}: IProps) => {
  return (
    <Link to={`/countries/${countryCode}`} className="country-item">
      <img className="country-item_flag" src={countryFlagUrl} alt="" />
      <div className="country-item_description">
        <span>
          <strong>{countryCommonName}</strong>
        </span>
        <div className="country-item_info">
          <p>
            <strong>Polulation: </strong>
            {population}
          </p>
          <p>
            <strong>Region: </strong>
            {region}
          </p>
          <p>
            <strong>Capital: </strong>
            {capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

type IProps = {
  item: Country;
};

export { CountryItem };
